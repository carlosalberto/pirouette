var uuid = require("./uuid"),
    path = require("path"),
    fs = require("fs"),
    project = require("./project"),
    util = require("./util"),
    child_process = require("child_process");

var spawn = child_process.spawn;
var APPDIR = getUserHome() + "/Library/Application Support/iPhone Simulator/6.1/Applications";
var XCODE = "/Applications/Xcode.app";
var TRCSUB="/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate";

function getUserHome() {
  return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
}

//
// create a new uuid for apps that haven't been installed.  reuse the existing one if they have been.
//
function appuuid(appdir) {
  var uuid_dirs = fs.readdirSync(APPDIR);
  for (var i = 0, e = uuid_dirs.length; i < e; i ++) {
    try {
      if (fs.statSync (APPDIR + "/" + uuid_dirs[i] + "/" + appdir).IsDirectory())
	return uuid_dirs[i];
    }
    catch (e) {
      continue;
    }
  }
  return uuid.v4().toUpperCase();
}

function install(uuid, top, config) {
  var appdirname = config.projectName + ".app";
  var sourceDir = path.join (top, appdirname);
  var destDir = path.join (APPDIR, uuid, appdirname);

  fs.mkdirSync(path.join (APPDIR, uuid));

  util.traverseDir (sourceDir, true, /* pre-order traversal, so we can create dirs before their contents */
    function dir_cb (sourcePath) {
      var destPath = path.join (destDir, path.relative(sourceDir, sourcePath));
      fs.mkdirSync (destPath);
    },
    function file_cb (sourcePath) {
      var destPath = path.join (destDir, path.relative(sourceDir, sourcePath));
      fs.writeFileSync(destPath, fs.readFileSync (sourcePath, null));
    });
}

exports.run = function run(env, args) {
  var build_config = project.Configuration.Debug; // eventually this will be a parameter
  var proj = project.Project.findContaining ();
  if (!proj)
    throw new Error ("Couldn't find containing project.");
    
  var config = proj.config;

  if (config.projectType != project.ProjectTypes.ios)
    throw new Error ("Can't deploy non-ios projects to simulator.");

  var uuid = appuuid(config.projectName + ".app");

  console.log ("uuid = " + uuid);

  install(uuid, proj.configurationDir(build_config), config);

  spawn("instruments",
        [ "-D", "/tmp/runsim.trace", "-t", XCODE+TRCSUB, path.join (APPDIR,uuid,config.projectName+".app") ],
	{ stdio: [ 'ignore', process.stdout, process.stderr ] });
};

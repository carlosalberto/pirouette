var util = require("./util"),
    fs = require("fs"),
    path = require("path"),
    project = require("./project");

function run(env, args) {
    var project_type;

    switch (args[0]) {
    case "-ios":
	project_type = project.ProjectTypes.ios;
	args.shift();
	break;
    case "-osx":
	project_type = project.ProjectTypes.osx;
	args.shift();
	break;
    default:
	if (args[0][0] == '-')
	    throw "unrecognized option " + args[0];
	project_type = project.ProjectTypes.osx;
    }

    project_name = args[0];
    app_delegate_name = "AppDelegate"; // XXX eventually make this a parameter

    if (!project_name) {
	throw "you need to specify project name"
    }

    copyTemplateDir(path.join (env.pirouette_dir, "templates", project_type), project_name);
}

function copyTemplateDir(templateDir, projectDir) {
    function do_replace(str) {
	return str.replace(/@@PROJECT_NAME@@/g, project_name)
	          .replace(/@@APP_DELEGATE_NAME@@/g, app_delegate_name)
	          .replace(/@@PIROUETTE_VERSION@@/g, "0.01") /* XXX this particular one needs help */;
    }

    util.traverseDir (templateDir, true, /* preorder traversal, so we can create dirs before their contents */
	 	      function dir_cb (templatePath) {
			  var projectPath = path.join (projectDir, do_replace(path.relative (templateDir, templatePath)));
			  fs.mkdirSync (projectPath);
		      },
		      function file_cb (templatePath) {
			  var projectPath = path.join (projectDir, do_replace(path.relative (templateDir, templatePath)));
			  var contents = do_replace (fs.readFileSync(templatePath, "utf-8"));
			  fs.writeFileSync(projectPath, contents);
		      });
}

exports.run = run;

// Local Variables:
// mode: javascript
// End:

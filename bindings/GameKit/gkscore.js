// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKScore = GKScore = objc.bindClass(foundation.NSObject,
  function GKScore () {
    return GKScore.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing a Score Object
    init: objc.instanceSelector("init"),
    initWithCategory: objc.instanceSelector("initWithCategory:"),

    // Score Properties
    playerID: objc.instanceProperty(),
    category: objc.instanceProperty(),
    date: objc.instanceProperty(),
    value: objc.instanceProperty(),
    context: objc.instanceProperty(),
    formattedValue: objc.instanceProperty(),
    rank: objc.instanceProperty(),

    // Reporting a New Score
    reportScore: objc.instanceSelector("reportScoreWithCompletionHandler:"),

    // Changing the Default Leaderboard
    shouldSetDefaultLeaderboard: objc.instanceProperty()
});

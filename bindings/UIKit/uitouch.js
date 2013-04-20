// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log "UITouch"
exports.UITouch = UITouch = foundation.NSObject.extendClass ("UITouch", {

    // Getting the Location of Touches
    locationInView:         objc.instanceSelector("locationInView:"),
    previousLocationInView: objc.instanceSelector("previousLocationInView:"),
    view: objc.instanceProperty(),
    window: objc.instanceProperty(),

    // Getting Touch Attributes
    tapCount: objc.instanceProperty(),
    timestamp: objc.instanceProperty(),
    phase: objc.instanceProperty(),

    // Getting a Touch Object’s Gesture Recognizers
    gestureRecognizers: objc.instanceProperty()

});

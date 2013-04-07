// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITabBar");
exports.UITabBar = UITabBar = objc.bindClass(UIView,
  function UITabBar () {
    return UITabBar.__super__.constructor.apply(this, arguments);
  }, {

    // Getting and Setting Properties
    delegate: objc.autoboxProperty(UITabBarDelegate),

    // Configuring Items
    setItems: objc.instanceSelector("setItems:animated:"),
    items: objc.instanceProperty({ set: function (v) { return this.setItems (v, false); } }),
    selectedItem: objc.instanceProperty(),

    // Customizing Tab Bars
    beginCustomizingItems: objc.instanceSelector("beginCustomizingItems:"),
    endCustomizing:        objc.instanceSelector("endCustomizingAnimated:"),
    isCustomizing:         objc.instanceSelector("isCustomizing"),

    // Customizing Appearance
    backgroundImage: objc.instanceProperty(),
    selectedImageTintColor: objc.instanceProperty(),
    selectionIndicatorImage: objc.instanceProperty(),
    tintColor: objc.instanceProperty()

});
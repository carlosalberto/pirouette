// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.SKPaymentQueue = SKPaymentQueue = objc.bindClass(NSObject,
  function SKPaymentQueue () {
    return SKPaymentQueue.__super__.constructor.apply(this, arguments);
  }, {

  // Determining Whether the User Can Make Payments
  canMakePayments: objc.staticSelector("canMakePayments"),

  // Getting the Queue
  defaultQueue: objc.staticSelector("defaultQueue"),

  // Adding and Removing the Observer
  addTransactionObserver: objc.instanceSelector("addTransactionObserver:"),
  removeTransactionObserver: objc.instanceSelector("removeTransactionObserver:"),

  // Managing Transactions
  transactions: objc.instanceProperty(),
  addPayment: objc.instanceSelector("addPayment:"),
  finishTransaction: objc.instanceSelector("finishTransaction:"),

  // Restoring Purchases
  restoreCompletedTransactions: objc.instanceSelector("restoreCompletedTransactions")

});

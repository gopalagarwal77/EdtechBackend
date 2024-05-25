const Razorpay = require('razorpay');

exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY || rzp_test_TzxQSmEJSA9Ca3,
    Key_secret: process.env.RAZORPAY_SECRET,
}); 

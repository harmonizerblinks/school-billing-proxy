'use strict';

var root = '/v1';

module.exports = {

   /*
  Get Schools 
  */
  getSchools: {
    method: 'get',
    endpoint: [root, '/getSchools'].join(''),
  },

  /*
  Get Active Session 
  */
  getActiveSession: {
    method: 'post',
    endpoint: [root, '/getStudent'].join(''),
    // params: ['studentNumber*']
  },

  /*
  Send Otp 
  */
  sendOtp: {
    method: 'post',
    endpoint: [root, '/SendOtp'].join(''),
    params: ['type*','mobile*','length*']
  },

  /*
  Verify Otp 
  */
  verifyOtp: {
    method: 'post',
    endpoint: [root, '/VerifyOtp'].join(''),
    params: ['mobile*','otp*']
  }, 

  /*
  Buy Voucher 
  */
  buyVoucher: {
    method: 'post',
    endpoint: [root, '/buyVoucher'].join(''),
    params: ['options','name*','email*','mobile*','network*', 'amount', 'currency*', 'formCode*']
  },

  /*
  Verify Voucher 
  */
  verifyVoucher: {
    method: 'post',
    endpoint: [root, '/verifyVoucher'].join(''),
    params: ['code*']
  }, 

  /*
  Get Student 
  */
  getStudent: {
    method: 'post',
    endpoint: [root, '/getStudent'].join(''),
    params: ['studentNumber*']
  },

  /*
  Create Checkout 
  */
  CreateCheckout: {
    method: 'post',
    endpoint: [root, '/CreateCheckout'].join(''),
    params: ['options','name*','email*','mobile*', 'amount*', 'currency*', 'order_id*', 'order_desc*', 'customerid', 'idnumberid', 'redirecturl','callback']
  },

  /*
  Get Checkout
  */
  GetCheckout: {
    method: 'post',
    endpoint: [root, '/GetCheckout'].join(''),
    params: ['code*','id']
  },

  /*
  Get Checkout
  */
  ProcessMomoCheckout: {
    method: 'post',
    endpoint: [root, '/PayMomoCheckout'].join(''),
    params: ['code*','id*','mobile*', 'mobile_network*', 'otp']
  },


  /*
  Send Payment (Cashout)
  */
  ProcessCardCheckout: {
    method: 'post',
    endpoint: [root, '/PayCardCheckout'].join(''),
    params: ['code*','id*','card_number*', 'expiry_year*', 'expiry_month*', 'cvv*', 'pin', 'otp']
  },

  /*
  Verify Card Transaction
  */
  verifyCardPayment: {
    method: 'post',
    endpoint: [root, '/VerifyCardPayment'].join(''),
    params: ['type*','order_id*','value']
  },

  /*
    Verify transaction
  */
  verifyPayment: {
    method: 'post',
    endpoint: [root, '/GetTransStatus'].join(''),
    params: ['type*','order_id*']
  },


};

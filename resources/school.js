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
    params: []
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
  Send Sms 
  */
  sendSms: {
    method: 'post',
    endpoint: [root, '/sendSms'].join(''),
    params: ['mobile*','message*']
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
  Get Department 
  */
  getDepartments: {
    method: 'post',
    endpoint: [root, '/getDepartments'].join(''),
    params: ['formId*']
  },

  /*
  Get Forms 
  */
  getForms: {
    method: 'post',
    endpoint: [root, '/getForms'].join(''),
    params: []
  },

  /*
  Get Class 
  */
  getClass: {
    method: 'post',
    endpoint: [root, '/getClass'].join(''),
    params: []
  },

  /*
  Get Levels 
  */
  getLevels: {
    method: 'post',
    endpoint: [root, '/getLevels'].join(''),
    params: []
  },

  /*
  Get Semesters
  */
  getSemesters: {
    method: 'post',
    endpoint: [root, '/getSemesters'].join(''),
    params: [ ]
  },

  /*
  Get Courses
  */
  getCourses: {
    method: 'post',
    endpoint: [root, '/getCourses'].join(''),
    params: ['code*']
  },

  /*
  Get Admission
  */
  getAdmission: {
    method: 'post',
    endpoint: [root, '/getAdmission'].join(''),
    params: ['code*']
  },

  /*
  Submit Application
  */
  submitApplication: {
    method: 'post',
    endpoint: [root, '/submitApplication'].join(''),
    params: ['code*']
  },

  /*
  Change Pin
  */
  changePin: {
    method: 'post',
    endpoint: [root, '/changePin'].join(''),
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
  Get Student Bills 
  */
  getStudentBills: {
    method: 'post',
    endpoint: [root, '/getStudentBills'].join(''),
    params: ['studentNumber*','isMandatory*','page','limit','index']
  },

  /*
  Get Student Bills Ussd 
  */
  getStudentBillsUssd: {
    method: 'post',
    endpoint: [root, '/getStudentBillsUssd'].join(''),
    params: ['studentNumber*','isMandatory*','page*','limit*','index*']
  },

  /*
  Get StudentWallet
  */
  getStudentWallet: {
    method: 'post',
    endpoint: [root, '/getAdmission'].join(''),
    params: ['studentNumber*']
  },

  /*
  Student Topup 
  */
  studentTopup: {
    method: 'post',
    endpoint: [root, '/CreateCheckout'].join(''),
    params: ['options','name*','email*','mobile*', 'amount*', 'currency*', 'order_id*', 'order_desc*', 'customerid']
  },

  /*
  Wallet Topup
  */
  walletTopup: {
    method: 'post',
    endpoint: [root, '/GetCheckout'].join(''),
    params: ['code*','id']
  },

  /*
  Get Student Message
  */
  getStudentMessage: {
    method: 'post',
    endpoint: [root, '/getStudentMessage'].join(''),
    params: ['code*','id*','mobile*', 'mobile_network*', 'otp']
  }, 


  /*
  Post Student Message
  */
  postMessage: {
    method: 'post',
    endpoint: [root, '/postMessage'].join(''),
    params: ['code*','id*','mobile*', 'mobile_network*', 'otp']
  }, 

  /*
  Get FeeTypes
  */
  getFeeTypes: {
    method: 'post',
    endpoint: [root, '/getFeeTypes'].join(''),
    params: ['code*','id*','mobile*', 'mobile_network*', 'otp']
  }, 

  /*
  Get Notifications
  */
  getNotifications: {
    method: 'post',
    endpoint: [root, '/getNotifications'].join(''),
    params: ['code*','id*','mobile*', 'mobile_network*', 'otp']
  }, 

  /*
  Get Notification By Id
  */
  getNotificationById: {
    method: 'post',
    endpoint: [root, '/getNotificationById'].join(''),
    params: ['code*','id*','mobile*', 'mobile_network*', 'otp']
  }, 

  /*
  Get Recent Payments
  */
  recentPayments: {
    method: 'post',
    endpoint: [root, '/recentPayments'].join(''),
    params: ['code*','id*','mobile*', 'mobile_network*', 'otp']
  }, 

  /*
  Request Fee Payment
  */
  requestFeePayment: {
    method: 'post',
    endpoint: [root, '/requestFeePayment'].join(''),
    params: ['code*','id*','mobile*', 'mobile_network*', 'otp']
  }, 

  /*
  Pay Bills
  */
  payBills: {
    method: 'post',
    endpoint: [root, '/payBills'].join(''),
    params: ['code*','id*','mobile*', 'mobile_network*', 'otp']
  }, 

  /*
    Payment Report
  */
    paymentReport: {
      method: 'post',
      endpoint: [root, '/GetTransStatus'].join(''),
      params: ['type*','order_id*']
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

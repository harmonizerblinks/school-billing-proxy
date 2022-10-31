## school billing proxy 

# ![Issues](https://img.shields.io/github/issues/harmonizerblinks/school-billing-proxy) ![Star](https://img.shields.io/github/stars/harmonizerblinks/school-billing-proxy) ![Issues](https://img.shields.io/github/license/harmonizerblinks/school-billing-proxy)

Nodejs API Wrapper For School Billing.

# [![NPM](https://nodei.co/npm/school-billing-proxy.png)](https://nodei.co/npm/school-billing-proxy/)

### Installation

```
npm install school-billing-proxy
```

### Usaged

```js

var url = "endpoint";

// Require the library
var billing = require('school-billing-proxy')(process.env.APP_ID, process.env.APP_KEY, process.env.SCHOOL_CODE, url);


```

#### Making calls to the resources
The resource methods accepts are promisified, but can receive optional callback as the last argument.

```js
// billing.{resource}
billing.school.getSchools({})
	.then((body)=> {
  		console.log(body);
	})
	.catch((error)=> {
		console.log(error);
	});
```



For all resource methods, the JSON body can be passed as the argument.

### Resources

- school
  - getSchools
  - getActiveSession
  - sendOtp
  - sendSms
  - verifyOtp
  - buyVoucher
  - verifyVoucher
  - getDepartment
  - getForms
  - getClass
  - getLevels
  - getSemesters
  - getCourses
  - getAdmission
  - submitApplication
  - changePin
  - getStudent
  - getStudentBills
  - getStudentBillsUssd
  - getStudentWallet
  - studentTopup
  - walletTopup
  - getStudentMessage
  - postMessage
  - getFeeTypes
  - getNotifications
  - getNotificationById
  - getNotificationById
  - recentPayments
  - requestFeePayment
  - payBills
  - paymentReport
  - verifyPayment

```js
billing.school.createCheckout({
	name: 'Firstname Lastname',
	mobile: '+233540000000',
	mobile_network: 'MTN || AIRTEL || TIGO || VODAFONE',
	email: 'harmony@cross-switch.com',
	currency: 'GHS',
	amount: 0.1,
	order_id: `${Math.ceil(Math.random() * 10e8)}`,
	order_desc: 'Testing',
	account: '',
	customerid: '',
	callback: ''
}).then((body)=> {
	console.log(body);
}).catch((error)=> {
	console.log(error);
});
```

Method to process mobile Money on Checkout.

```js
billing.school.buyVoucher({
	name: 'Firstname Lastname',
	mobile: '+233540000000',
	mobile_network: 'MTN || AIRTEL || TIGO || VODAFONE',
	email: 'harmony.alabi@cross-switch.com',
	code: '+233540000000',
	formCode: '',
	amount: 1,
}).then((body)=> {
	console.log(body);
}).catch((error)=> {
	console.log(error);
});
```


Method to Get Cashout Balance.

```js
payment.checkout.getCheckout({})
.then((body)=> {
	console.log(body);
}).catch((error)=> {
	console.log(error);
});
```

Method to Verify Transaction status.

```js
payment.checkout.verifyPayment({
	order_id: `${data.transaction_no}`,
}).then((body)=> {
	console.log(body);
}).catch((error)=> {
	console.log(error);
});
```



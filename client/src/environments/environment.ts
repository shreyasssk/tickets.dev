// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authURL: {
    sign: '/api/users/signin',
    signup: '/api/users/signup',
    currentUser: '/api/users/currentuser',
    signout: '/api/users/signout',
  },
  ticketsURL: '/api/tickets/',
  ordersURL: '/api/orders/',
  paymentsURL: '/api/payments',
  stripe_key: 'pk_test_y8F2lb1XpCSs4IlUo4uiUjIy00uscBLWMH',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// authURL: {
//   sign: 'http://localhost:4000/api/users/signin',
//   signup: 'http://localhost:4000/api/users/signup',
//   currentUser: 'http://localhost:4000/api/users/currentuser',
//   signout: 'http://localhost:4000/api/users/signout',
// },
// ticketsURL: 'http://localhost:4001/api/tickets/',
// ordersURL: 'http://localhost:4002/api/orders/',
// paymentsURL: 'http://localhost:4003/api/payments',
// stripe_key: 'pk_test_y8F2lb1XpCSs4IlUo4uiUjIy00uscBLWMH',

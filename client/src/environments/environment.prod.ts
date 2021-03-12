export const environment = {
  production: true,
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

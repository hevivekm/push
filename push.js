let push = require('web-push');

let vapidKeys = {
  publicKey: 'BMXGGu7ye0kJ_HWHsdofXGczIzFzm3g0zP33gaxtmaR-A7lMh80nk_UI0z_4Sx0fopVF0T-3l8qZwmB5qY8t97M',
  privateKey: 'aEFzVql4qDiV32gludRYjUfpohusJpC43vx6FAJvn-g',
};

push.setVapidDetails('mailto:vivek.m@hubengage.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/fhuC290cCTM:APA91bFbQNJG5d09TO5Tk_cNOvULBJ4YPw03X0Bsg06zsuHDN1_MMqv1upOVt8EBW14WH_pvMbXAKJb47ESwi21spbDM1zJBhjjCJYdj3jAfJZpFuliil9JTSk9i2pD3z_fhzz6jXl7A',
  expirationTime: null,
  keys: {
    p256dh: 'BBZ2RCHruNxRG_WYpeXL0DCuL0YYzrLztPlkjiNlbdG8Vm4I4z9P_ycEjD-20mCBjMFAfRusVyJUKlZK8fW7S60',
    auth: 'O2_O9AIc8gvYfq75XroTkA',
  },
};

let payload = Buffer.from(
  JSON.stringify({
    title: 'title',
    body: 'body',
    data: {
      a: 1,
      b: 2,
    },
  })
);
push.sendNotification(sub, payload);

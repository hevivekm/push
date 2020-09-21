let push = require('web-push');

let vapidKeys = {
  publicKey: 'BMXGGu7ye0kJ_HWHsdofXGczIzFzm3g0zP33gaxtmaR-A7lMh80nk_UI0z_4Sx0fopVF0T-3l8qZwmB5qY8t97M',
  privateKey: 'aEFzVql4qDiV32gludRYjUfpohusJpC43vx6FAJvn-g',
};

push.setVapidDetails('mailto:vivek.m@hubengage.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/cdGgJBWgNPc:APA91bEXjAIXFyDuZd4QUgQdWN2Vn9bM1Pkz1rMvD8r64h5Y-539Vc86xMItI9igxjgN_sQX05BCHlzuVjJVV83SAo06C6TkXxbJHcQmgcUFLMSOAssGikTvWRbsxO9gnUpaL7o9NnVq',
  expirationTime: null,
  keys: {
    p256dh: 'BAMZ2TyJyliudKB-PcxMC0JDpnqRp0T8FGw1RUnclu8HYf9JrjNiDkyURTbUHHHkeyrrLhDcauAgKJGtjecot8I',
    auth: 'WjkaGaMgj6OR57QYEosKQg',
  },
};

let payload = JSON.stringify({
  title: 'title',
  body: 'body',
  data: {
    a: 1,
    b: 2,
  },
});
push.sendNotification(sub, payload);

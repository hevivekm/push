let push = require('web-push');

let vapidKeys = {
  publicKey: 'BMXGGu7ye0kJ_HWHsdofXGczIzFzm3g0zP33gaxtmaR-A7lMh80nk_UI0z_4Sx0fopVF0T-3l8qZwmB5qY8t97M',
  privateKey: 'aEFzVql4qDiV32gludRYjUfpohusJpC43vx6FAJvn-g',
};

push.setVapidDetails('mailto:vivek.m@hubengage.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/e0XsVE7uX94:APA91bEgg5qi0DNp253oZsRUxz54K8Awi5Q67E9x1UcFM_kZaMga8nwj5esqYTR8DPkSTYuRJIdWDwD826-Zy1i8-AwzR5L1E4K-7uwJx_2_bvVvcZ0gGC-3bG0s_73GsZL9z1v5ORRR',
  expirationTime: null,
  keys: {
    p256dh: 'BPVqQgX9_9RbQklAdPCa0o7BAziGDE_ahOHQvy-T1iCmcAUrluqvWDN7ZBqQGtBPQe1FN9RyfOk0g7eMwlHJUCQ',
    auth: '7KN7s4dO7E1fS8HCIvdvdA',
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

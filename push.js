let push = require('web-push');

let vapidKeys = {
  publicKey: 'BMXGGu7ye0kJ_HWHsdofXGczIzFzm3g0zP33gaxtmaR-A7lMh80nk_UI0z_4Sx0fopVF0T-3l8qZwmB5qY8t97M',
  privateKey: 'aEFzVql4qDiV32gludRYjUfpohusJpC43vx6FAJvn-g',
};

push.setVapidDetails('mailto:vivek.m@hubengage.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/cdGvBkNLbBA:APA91bGXGIx9wO3TPrmeTQOPGY4gUic_IDi8jHdrnt6-F3z0uA8iXjDvIBkFhI6sQ4iJiHtImyEOiqWuYzYw6ITl9Q9A30Oe9ePE2csWWKiEuDDDT3fXhuRGi9P-6vnOSs8vUOWJM7Ug',
  expirationTime: null,
  keys: {
    p256dh: 'BOu0B7egOycibbOsV_hFLs9TJ-an1KRl44UU0Is4VE6NswV_hzJwjj6NxcIwugOTpZ88PoYq7I5LfgE13nn6cYs',
    auth: 'Ev8pYhikPl8f99sKiJJxiA',
  },
};

push.sendNotification(sub, 'test message');

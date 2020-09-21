let push = require('web-push');

let vapidKeys = {
  publicKey: 'BMXGGu7ye0kJ_HWHsdofXGczIzFzm3g0zP33gaxtmaR-A7lMh80nk_UI0z_4Sx0fopVF0T-3l8qZwmB5qY8t97M',
  privateKey: 'aEFzVql4qDiV32gludRYjUfpohusJpC43vx6FAJvn-g',
};

push.setVapidDetails('mailto:vivek.m@hubengage.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/esPsOe0g9yE:APA91bGXP5QXZuXHQJ6gI83ForX52G9HwfqQrgLOCQ-ma4lwX-JYwDT7QNpqmFd4-2-PGyeD1F66AIcgv9xN7O0XcAfogacg5wTDFqEfLJnaFWYM1IAM1m7naEtUTsksvFGP26XWNsf4',
  expirationTime: null,
  keys: {
    p256dh: 'BIPru0Itc6imgDt2_4IkD3l33LSpULfHXObP42TbEx9q78Wu0EzHuMx9R55wX5YN5u3K_OTdcnGPHcNHC6Zss54',
    auth: 'VGWiCUqXmlDcj78aWqtOyw',
  },
};

let payload = {
  title: 'title',
  body: 'body',
  data: {
    a: 1,
    b: 2,
  },
};
push.sendNotification(sub, payload);

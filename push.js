let push = require('web-push');

let vapidKeys = {
  publicKey: 'BMXGGu7ye0kJ_HWHsdofXGczIzFzm3g0zP33gaxtmaR-A7lMh80nk_UI0z_4Sx0fopVF0T-3l8qZwmB5qY8t97M',
  privateKey: 'aEFzVql4qDiV32gludRYjUfpohusJpC43vx6FAJvn-g',
};

push.setVapidDetails('mailto:vivek.m@hubengage.com', vapidKeys.publicKey, vapidKeys.privateKey);

// let sub = {
//   endpoint:
//     'https://fcm.googleapis.com/fcm/send/dLE6L9vZ8Bk:APA91bF3iv4s8yA1IQmJslo2wuGLtmH9lAMcLCd404mqVDBbiVbFbyy80724ExYuzC8OK8d8lV_kaT2gHT0rxoHeGlQoka_KaaFiiqbuut7CaQdU5V-VpWigopR_7nUu7FlPfa82s7_F',
//   expirationTime: null,
//   keys: {
//     p256dh: 'BHPbpeBIPraQOQnYe1nvoI3qmH8xMAJ267hj73cW2R4S2Qq-0fHS4qQmrdcfpvN_Vsbt40VkqG2crRYhsfVDR9g',
//     auth: 'i95ZdwFDtA2sofwyr4sf9A',
//   },
// };
let sub = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/ek5XCLS0tHs:APA91bEsZBRv7qitv-81YY66xyw0wmtbE1y8zETQqbl_6k-qfLqDek3-AIHbSQr4ZEHvqGcMgGpJ5VNuzu36RlXNiSYnUBirTOtiLvxfG5VFeoxGXa5n4SfuFQ6bqNqny48FrTTIMjTL',
  expirationTime: null,
  keys: {
    p256dh: 'BI_Um2GRI92uBlhVpD24nTcUYKp9WL9GUs7jOu6QI0EWpmIjPB9pbwZD_XyuBd_OF_BHIXA2rTjGZ3BrTbDtCrE',
    auth: '1Dq0t5jnPBuG5ATGvkTg1A',
  },
};
let payload = JSON.stringify({
  title: 'title 5',
  body: 'body 2',
  image: 'https://img.icons8.com/ios/452/online--v2.png',
  icon: 'https://img.icons8.com/ios/452/online--v2.png',
  data: {
    a: 1,
    b: 2,
  },
});

(async () => {
  try {
    let r = new Promise(async (resolve, reject) => {
      return push.sendNotification(sub, payload).catch((error) => {
        return reject(error);
      });
    });
    await r;
  } catch (error) {
    if (error.statusCode === 404 || error.statusCode === 410) {
      console.log('Subscription has expired or is no longer valid: ', error);
    } else {
      throw error;
    }
  }
})();

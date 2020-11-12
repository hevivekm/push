let push = require('web-push');

let vapidKeys = {
  publicKey: 'BMXGGu7ye0kJ_HWHsdofXGczIzFzm3g0zP33gaxtmaR-A7lMh80nk_UI0z_4Sx0fopVF0T-3l8qZwmB5qY8t97M',
  privateKey: 'aEFzVql4qDiV32gludRYjUfpohusJpC43vx6FAJvn-g',
};

push.setVapidDetails('mailto:vivek.m@hubengage.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub =
  // {
  //   endpoint:
  //     'https://fcm.googleapis.com/fcm/send/d-JoSM-fhIs:APA91bGa2TMA0GayCJc4IQqmA2uRYJurgUStrhjVa93MErhVl1GUFBz_V2c5cHf9okPxqUyg2DZbWFlOQCBQPV5sdK48j3dzEGrMJtvPT_yxf7sRycopWDhOS_MSim5y7p5S5Ds4fGZ3',
  //   expirationTime: null,
  //   keys: {
  //     p256dh: 'BHOdQ2tkJOjI2OP0s6Sggj78PW3-3vbrJwOOU5gu6PKlES8lT0Aneui1-YjJxTKaZvVB1r5gUr6TR-ExwFmZsbU',
  //     auth: 'GJz2dUro57y5ZdukGA57Jw',
  //   },
  // };

  // {
  //   endpoint:
  //     'https://fcm.googleapis.com/fcm/send/dovr_ljEWQ0:APA91bHbfgukskGNDecqfZX7cEebJzxZYQHYrs0o4CsN-w5n4ztYweSs1YYJIWM3NcrAo0vsjvLxUEVMa6IhqVFEWzqoGYbYbNusySI5FFk9h_RlQdtHD3vpYi020O549rVVg0eommmh',
  //   expirationTime: null,
  //   keys: {
  //     p256dh: 'BLcHTt2t5KSNZpx6O1Jq_0jfZ6HFvTERfqydw2ZEx7S2HSZfFipVm9QUkCLdnyu8BOCA0UuLNJOCv-49mxDbYQU',
  //     auth: 'MywclL8hF-meovYPrkuYVA',
  //   },
  // };

  {
    endpoint:
      'https://fcm.googleapis.com/fcm/send/d_PncSbU3Vo:APA91bH2ogt99hOpNNSjCQzpKtt8uMMI17FxOr9MWZRBpUBnmchEZk2P-PUfw3r2Pq2fyCsxXQib2AyHmrdyDF1J72hMPxusSyrhRjJ2T7Pbt-9wX-sCCwANanQIwK_OTVym_qSGIcI_',
    expirationTime: null,
    keys: {
      p256dh: 'BFI82CzU2-LM3gvhjnRbx2GDb4oZ3GZG_8NSWlaMbCdG7JPVU1humc251pmi4Db73VePk-hDOWnCWx28k0YfmDY',
      auth: 'OCy39jqRF_zurYo0okO6gQ',
    },
  };
let payload = JSON.stringify({
  title: 'title',
  body: 'body',
  image: 'https://www.flaticon.com/svg/static/icons/svg/831/831276.svg',
  icon: 'https://www.flaticon.com/svg/static/icons/svg/831/831276.svg',
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

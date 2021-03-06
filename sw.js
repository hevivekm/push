self.addEventListener('push', (event) => {
  let title = 'test message';
  let body = 'test body';
  if (event.data) {
    console.log('This push event has data: ', event.data.blob().toString());
    console.log('This push event has data: ', JSON.stringify(event.data));
    let d = event.data.json();
    title = d.title;
    body = d.body;
  } else {
    console.log('This push event has no data.');
  }

  // self.registration.showNotification('test message', {});
  self.registration.showNotification(title, {
    body,
    icon: './pizza.png',
    actions: [
      {
        action: 'coffee-action',
        title: 'Coffee',
      },
    ],
  });
});

// self.addEventListener('push', function (e) {
//   var options = {
//     body: 'This notification was generated from a push!',
//     icon: 'images/example.png',
//     vibrate: [100, 50, 100],
//     data: {
//       dateOfArrival: Date.now(),
//       primaryKey: '2',
//     },
//     actions: [
//       { action: 'explore', title: 'Explore this new world', icon: 'images/checkmark.png' },
//       { action: 'close', title: 'Close', icon: 'images/xmark.png' },
//     ],
//   };
//   e.waitUntil(self.registration.showNotification('Hello world!', options));
// });

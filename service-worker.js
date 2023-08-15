self.addEventListener('push', event => {
  const options = {
    body: event.data.text(),
    icon: './assets/images/icon.png',
    badge: './assets/images/icon.png'
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

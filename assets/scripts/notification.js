document.addEventListener('DOMContentLoaded', () => {
    const permissionBtn = document.getElementById('permissionBtn');
    const showNotificationBtn = document.getElementById('showNotificationBtn');
    const notificationMessageInput = document.getElementById('notificationMessage');

    permissionBtn.addEventListener('click', () => {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('Notification permission granted.');
            } else {
                console.log('Notification permission denied.');
            }
        });
    });

    showNotificationBtn.addEventListener('click', () => {
        const message = notificationMessageInput.value;

        if (Notification.permission === 'granted' && message) {
            navigator.serviceWorker.ready.then(registration => {
                registration.showNotification('Custom Notification', {
                    body: message,
                    icon: '/assets/images/icon.png',
                    badge: '/assets/images/icon.png'
                });
            });
        }
    });
});

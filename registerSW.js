if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/Lumina/sw.js', { scope: '/Lumina/' })})}
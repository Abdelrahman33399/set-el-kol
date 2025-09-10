// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDeapYypO595vcDWUoh1gOncsGkQ5EZdyE",
    authDomain: "sit-el-kol.firebaseapp.com",
    projectId: "sit-el-kol",
    storageBucket: "sit-el-kol.firebasestorage.app",
    messagingSenderId: "573924344198",
    appId: "1:573924344198:web:fec2e9a54c1c152cd16c07",
    measurementId: "G-CWVJDKPS0M"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// استقبال الإشعارات في الخلفية
messaging.onBackgroundMessage((payload) => {
    console.log("Received background message: ", payload);

    const notificationTitle = payload.notification?.title || "ست الكل";
    const notificationOptions = {
        body: payload.notification?.body || "لديك إشعار جديد!",
        icon: "Image_fx6.jpg",
        badge: "Image_fx6.jpg"
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDeapYypO595vcDWUoh1gOncsGkQ5EZdyE",
    authDomain: "sit-el-kol.firebaseapp.com",
    projectId: "sit-el-kol",
    storageBucket: "sit-el-kol.firebasestorage.app",
    messagingSenderId: "573924344198",
    appId: "1:573924344198:web:fec2e9a54c1c152cd16c07"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// تأكد من أن vapidKey ده نفس اللي في صفحة الداشبورد
messaging.usePublicVapidKey("BLf737_88DPhSZR5P0_EbALn_fwnrlxF5LKr6rWslAYad6vBGKbGY2sHOnYDC7G-xTMQyqQLrF2XaZeiLo6-uqw");

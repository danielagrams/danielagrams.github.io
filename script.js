// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCY8pR1cqlCOt9kE-5ZBWU1XwGrgbwnDWI",
    authDomain: "my-website-2469a.firebaseapp.com",
    databaseURL: "https://my-website-2469a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-website-2469a",
    storageBucket: "my-website-2469a.firebasestorage.app",
    messagingSenderId: "774089208016",
    appId: "1:774089208016:web:23522f24af5baa5fe96ed5"
};

// Initialize Firebase App
const app = firebase.initializeApp(firebaseConfig);

// Reference to Firebase Realtime Database
const db = firebase.database();
const counterRef = db.ref('visitorCount');

// Fetch the current counter value
counterRef.once('value', snapshot => {
    const visitorCount = snapshot.val() || 0;
    document.getElementById('count').textContent = visitorCount;
    
    // Increment counter on each page load
    counterRef.set(visitorCount + 1);
});
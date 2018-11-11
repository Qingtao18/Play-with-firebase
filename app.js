var firebase = require("firebase");
var admin = require("firebase-admin");

var serviceAccount = require("./test-fast-firebase-adminsdk-ka4jx-a2b46b2ae0.json");

firebase.initializeApp();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-fast.firebaseio.com"
});



var db = firebase.database();
var ref = db.ref("userDB");
ref.once("value", function(snapshot) {
    console.log(snapshot.val());
});

var usersRef = ref.child("users");
usersRef.set({
    alanisawesome: {
        date_of_birth: "June 23, 1912",
        full_name: "Alan Turing"
    },
    gracehop: {
        date_of_birth: "December 9, 1906",
        full_name: "Grace Hopper"
    }
});
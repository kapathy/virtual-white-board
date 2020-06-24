import App from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAGD3by0y8wzxSwcM5HeoJcy-WBWy3W6co",
    authDomain: "virtual-white-board.firebaseapp.com",
    databaseURL: "https://virtual-white-board.firebaseio.com",
    projectId: "virtual-white-board",
    storageBucket: "virtual-white-board.appspot.com",
    messagingSenderId: "562326485518",
    appId: "1:562326485518:web:e4a87a852c7897c9d79a5f",
    measurementId: "G-CWBQGTRF8M"
};

class Firebase {
    constructor() {
        App.initializeApp(firebaseConfig);
        this.auth = App.auth();
        this.db = App.firestore();
    }

    signin(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    async signup(firstname, lastname, username, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password);
        return this.auth.currentUser.updateProfile({
            displayName: username
        });
    }

    signout() {
        return this.auth.signOut();
    }

    getUser() {
        return this.auth.currentUser();
    }

    authChange(user) {
        return this.auth.onAuthStateChanged(user);
    }

    addPost(date, value, user) {
        this.db.collection('posts').add({ date, value, user });
    }

    getDB() {
        return this.db.collection('posts')
    }
}


export default new Firebase();

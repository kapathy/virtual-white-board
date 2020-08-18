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

/**
* Firebase initialisation and methods.
*/
class Firebase {
    constructor() {
        App.initializeApp(firebaseConfig);
        this.auth = App.auth();
        this.db = App.firestore();
    }

    /**
    * Method to sign in.
    * @param {String} email 
    * @param {String} password 
    */
    signin(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    /**
    * Method to sign in.
    * @param {String} firstname 
    * @param {String} lastname 
    * @param {String} username 
    * @param {String} email 
    * @param {String} password 
    */
    async signup(firstname, lastname, username, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password);
        return this.auth.currentUser.updateProfile({
            displayName: username
        });
    }

    /**
    * Method to sign out.
    */
    signout() {
        return this.auth.signOut();
    }

    /**
    * Method that returns the user who is logged in.
    */
    getUser() {
        return this.auth.currentUser();
    }

    /**
    * Method that updates when user changes.
    */
    authChange(user) {
        return this.auth.onAuthStateChanged(user);
    }

    /**
    * Method to add a post to the database.
    */
    addPost(date, value, user, color) {
        this.db.collection('posts').add({ date, value, user, color });
    }

}

export default new Firebase();

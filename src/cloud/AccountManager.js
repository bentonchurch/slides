import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence, browserLocalPersistence } from "firebase/auth";
import { User } from "./User.js";

class AccountManager {
  firebaseApp;
  firebaseAuth;
  
  constructor(firebaseApp) {
    this.firebaseApp = firebaseApp;
    this.firebaseAuth = getAuth();

    console.log(this.firebaseAuth);
  }

  async staySignedIn(persist) {
    await setPersistence(this.firebaseAuth, persist ? browserLocalPersistence : browserSessionPersistence);
  }

  async signUp(email, password, staySignedIn) {
    const user = (await createUserWithEmailAndPassword(this.firebaseAuth, email, password)).user;

    if (staySignedIn) {
      await this.staySignedIn(staySignedIn);
    }

    return user;
  }
  
  async getCurrentUser() {
    await this.firebaseAuth.authStateReady();
    return this.firebaseAuth.currentUser;
  }
}

export { AccountManager };
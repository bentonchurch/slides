// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { config } from "./config.js";
import { AccountManager } from "./AccountManager.js";

// Initialize Firebase
const app = initializeApp(config);
const accountManager = new AccountManager(app);
console.log(app, accountManager);
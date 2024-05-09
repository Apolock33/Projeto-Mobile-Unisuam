import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { environment } from "src/environments/environment.prod";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  databaseURL: environment.firebaseConfig.databaseURL,
};
const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);
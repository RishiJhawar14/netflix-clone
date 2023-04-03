import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDg0XaPpuAvjpR-nW8H3MNU9cnuU-R88yc",
  authDomain: "netflix-clone-fd04c.firebaseapp.com",
  projectId: "netflix-clone-fd04c",
  storageBucket: "netflix-clone-fd04c.appspot.com",
  messagingSenderId: "70712862097",
  appId: "1:70712862097:web:208f6c900a5b22ae426630",
  measurementId: "G-S40PXQMWQ0"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;

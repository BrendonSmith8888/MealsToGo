import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
/* import * as firebase from "firebase"; */
import { getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDCmhNiiezoLNv8A7jwm6d5kGieZzcou6c",
  authDomain: "mealstogo-57eee.firebaseapp.com",
  projectId: "mealstogo-57eee",
  storageBucket: "mealstogo-57eee.appspot.com",
  messagingSenderId: "308173163183",
  appId: "1:308173163183:web:767d8eaaabc852eba6625a",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = async (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
/* if (getApps().length < 1) {
  initializeApp(firebaseConfig);
} */

/* if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} */

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "<email>", "<password>")
        .then((user) => {
          console.log(user);
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.error(e);
        });
    }, 5000);
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

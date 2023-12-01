import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {setDoc, doc }  from 'firebase/firestore'

const AuthContext = createContext();

/**
* @description This function is an `AuthContextProvider` that creates an authentication
* context for use within a React application. It provides the following functions
* to manage user authentication:
* 
* 	- `signUp(email: string. password: string)` - Signs up a new user with the provided
* email and password.
* 	- `logIn(email: string password: string`) - Logs the user into the system using
* their email and password.
* 	- `logOut()` - Logs the user out of the system.
* 	- `user` - Holds the current user object.
* 
* The function uses the `useState`, `useEffect`, and `createUserWithEmailAndPassword`
* methods to manage user state and handle authentication.
* 
* @returns { object } The `AuthContextProvider` function returns an `AuthContext.Provider`
* component with the following output:
* 
* 	- A value object named `values` that contains four properties:
* 	+ `signUp` : a function to create a new user
* 	+ `logIn` : a function to log into an existing user
* 	+ `logOut` : a function to log out of the current user
* 	+ `user` : the current user object (as returned by `onAuthStateChanged`)
* 	- A child component(s) (`children`) wrapped within the `AuthContext.Provider` component.
*/
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  
/**
* @description This function signUp takes two parameters email and password of type
* strings. It uses the createUserWithEmailAndPassword method to create a user account
* for the provided email address and encrypted password.
* 
* @param { string } email - In the provided function `signUp`, the `email` parameter
* is passed as an argument to the `createUserWithEmailAndPassword` function.
* 
* @param { string } password - Based on the code provided:
* 
* The `password` input parameter is used as the password for the new user account
* being created using the `createUserWithEmailAndPassword()` method.
* 
* @returns { Promise } The output of this function is undefined because the function
* does not return anything. It returns no value and does not have a return statement.
*/
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      setDoc(doc(db, 'users', email), {
        savedMovies: []
      });
    }).catch((error) => {
      console.error(error);
    });
  }

/**
* @description The `logIn` function takes an email and a password as inputs and uses
* the `signInWithEmailAndPassword` method to sign the user into their account.
* 
* @param { string } email - The `email` input parameter is passed as the username
* for signing into a Google account through Firebase Authentication.
* 
* @param { string } password - The `password` input parameter is passed to the
* `signInWithEmailAndPassword()` method and represents the password that should be
* used for signing into the authenticator (in this case "auth").
* 
* @returns { object } The `logIn` function takes two arguments `email` and `password`,
* and returns a Promise that resolves with the result of calling `signInWithEmailAndPassword`
* with the `auth` object and the provided `email` and `password`.
* 
* So the output returned by this function is a Promise that resolves with the result
* of the sign-in process. If the sign-in is successful (i.e. the email and password
* are valid), the promise will resolve to a FirebaseUser object representing the
* signed-in user.
*/
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

/**
* @description This function `logOut()` signs out the user using the `signOut()`
* function and returns the result.
* 
* @returns {  } The output returned by the `logOut()` function is `signOut(auth)`.
*/
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  const values = {
    signUp,
    logIn,
    logOut,
    user
  }
  
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
}

/**
* @description The `UserAuth` function returns the value of the ` AuthContext`.
* 
* @returns {  } The `UserAuth` function returns ` undefined`, because the `useContext`
* hook expects a functional value as its second argument that returns the data when
* called with no arguments. However; since there's no functional context defined yet
* around `useContext` calls the internal [[Proxy]] internal context; thus causing `undefined`.
*/
export function UserAuth() {
  return useContext(AuthContext);
}

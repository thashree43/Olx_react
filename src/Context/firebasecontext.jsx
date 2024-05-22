import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth"

import {auth,db} from  "../firebase/config"
import { setDoc,doc } from "firebase/firestore";

const Authcontext = createContext(null)
export function Authcontextprovider({children}){
   

        async function signup(email, password, username, mobile) {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            await setDoc(doc(db, "users", user.uid), {
                username: username,
                mobile: mobile,
                email: email
            });
            
            return user;    
    }
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logout(){
        return signOut(auth)
    }

    return <Authcontext.Provider value={{signup,login,logout}}>{children}</Authcontext.Provider>
}

export function userAuth(){
    return useContext(Authcontext)
}
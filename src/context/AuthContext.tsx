import React,{ onValue } from "firebase/database";
import { createContext,useContext,useState,useEffect, ReactNode } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged, User, UserCredential } from "firebase/auth"; 
import { auth ,db} from "../firebase";
import {setDoc,doc} from 'firebase/firestore'
type Props={
    children:ReactNode
}


type AuthContextType = {
    signUP: (email: string, password: string) => Promise<UserCredential>,
    logIn: (email: string, password: string) => Promise<UserCredential>,
    logOut: () => Promise<void>,
    user: User |null
};
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthContextProvider({children}:Props){
    const [user, setUser] = useState<User | null>(null)

    async function signUP(email:string,password:string){
       await setDoc(doc(db,'users',email),{
           SavedShows:[]
        })
       
        
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function logOut(){
        return signOut(auth)
    }
    function logIn(email:string,password:string){
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe()
        }
    })
    return(
        <AuthContext.Provider value={{signUP,logIn,logOut,user}} >
        {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)
}
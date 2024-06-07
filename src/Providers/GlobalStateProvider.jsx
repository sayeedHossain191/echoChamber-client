/* eslint-disable react/prop-types */
// import { createContext, useEffect, useState } from 'react'
// import {
//     GoogleAuthProvider,
//     createUserWithEmailAndPassword,
//     getAuth,
//     onAuthStateChanged,
//     signInWithEmailAndPassword,
//     signInWithPopup,
//     signOut,
//     updateProfile,
// } from 'firebase/auth'
// import { app } from '../Firebase/firebase.config'
// import useAxiosPublic from '../Hooks/useAxiosPublic'

import { createContext, useEffect, useState } from "react"



export const GlobalStateContext = createContext(null)
// const auth = getAuth(app)


const GlobalStateProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const getNotifications = () => {
        fetch('https://b9a12-forum-server.vercel.app/announcements')
            .then(res => res.json())
            .then(data => setNotifications(data))
            .catch(err => console.log('err', err))
    }
    useEffect(() => {
        getNotifications();
    }, [])



    const globalState = {
        notifications,
        getNotifications
    }
    console.log('notification', notifications)
    return (
        <GlobalStateContext.Provider value={globalState}>{children}</GlobalStateContext.Provider>
    )
}

export default GlobalStateProvider;

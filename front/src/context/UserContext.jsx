import { createContext, useContext, useState } from "react";

export const UserContext = createContext({
    userActive: {},
    userAppointments: [],
    setUserActive: () => {},
    setUserAppointments: () => {},
})

export const UserProvider = ({children}) => {
    const [userActive, setUserActive] = useState ({})
    const [userAppointments, setUserAppointments] = useState ([])

    console.log("Esto tiene el contexto", userActive, userAppointments)

    return (
        <UserContext.Provider value={{userActive, userAppointments, setUserActive, setUserAppointments}}> {children} </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
import React, { createContext, useState } from 'react';
 export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] =useState({
        name:'gadu miya',
        email:'gadu@miya.com'
    })
    const userData= {
        user,setUser,
    }

    return <AuthContext value={userData}>{children}</AuthContext> ;
  

};

export default AuthProvider;
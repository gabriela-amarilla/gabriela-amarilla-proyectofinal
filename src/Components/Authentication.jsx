import React, {useState} from 'react';
import { AuthContext } from '../Context/AuthContext';



const Authentication = props => {

    const currentUser = {
        authenticated: false,
        token: ''
    };
    
    return (
        <div>
            <AuthContext.Provider value={currentUser}>
            {currentUser.authenticated ? props.children : null}
            </AuthContext.Provider>
        </div>
        )
}
export {AuthContext, AuthProvider};
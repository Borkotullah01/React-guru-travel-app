import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {user} = useContext(AuthContext);
    if (user) {
        return children;
    } else {
        return <div className="w-full h-screen flex"><span className="loading loading-bars w-32 mx-auto "></span></div>
    }
};

export default Private;
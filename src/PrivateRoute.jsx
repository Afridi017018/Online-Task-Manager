import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './pages/Loading/Loading';
import { AuthContext } from './providers/AuthProvider';


const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

// console.log(location)
    if(loading){
        return <Loading />
    }

    if(user)
    {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;

};

export default PrivateRoute;
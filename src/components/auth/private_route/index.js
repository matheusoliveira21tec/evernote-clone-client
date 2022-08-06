import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const privateRoute = () => (
        localStorage.getItem('user')
            ? <Outlet />
            : <Navigate replace to={{ pathname: '/login' }} />
)


export default privateRoute;
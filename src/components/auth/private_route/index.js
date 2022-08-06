import React from 'react';
import { Navigate } from 'react-router-dom';

const privateRoute = ({ component: Component, ...rest }) => (
        localStorage.getItem('user')
            ? <Component {...rest} />
            : <Navigate replace to={{ pathname: '/login' }} />
)

export default privateRoute;
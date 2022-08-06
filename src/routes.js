import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './screens/home';
import Register from './screens/auth/register';
import Login from './screens/auth/login';
import NotesIndex from './screens/notes/index';
import UserEdit from './screens/users/edit';
import PrivateRoute from './components/auth/private_route';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<PrivateRoute />}>
                <Route exact path='/notes' element={<NotesIndex />} />
                <Route exact path='/user/edit' element={<UserEdit />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Rotas;
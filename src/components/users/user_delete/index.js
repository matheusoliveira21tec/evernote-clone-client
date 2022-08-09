import React, { useState } from 'react';
import { Button } from "rbx";
import UserService from '../../../services/users';
import { Navigate } from "react-router-dom";
import "../../../styles/users.scss";

function UsersDelete() {
    const [redirectToHome, setRedirectToHome] = useState(false);

    const deleteUser = async () => {
        if (window.confirm('Are you sure you wish to delete this account?')) {
            await UserService.delete()
            setRedirectToHome(true)
        }
    }

    if (redirectToHome)
        return <Navigate replace to={{ pathname: "/" }} />

    return (
        <Button color="danger" onClick={() => deleteUser()}>
            Excluir conta
        </Button>
    )
}

export default UsersDelete;
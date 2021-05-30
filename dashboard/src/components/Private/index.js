import React from 'react';
import User from "../../helpers/User";

export default function Private({children}) {
    if (User.userSeted()) {
        return (
            <>
                {children}
            </>
        );
    } else {
        window.location.pathname = '/signin'
    }
}
import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const AuthenticatedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        rest.loggedIn === true
            ?
            <Component {...rest} to='/' />
            :
            <Redirect to='/login' />
    )} />
)


export default AuthenticatedRoute;
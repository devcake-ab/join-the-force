import React from 'react'
import { Switch } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import HomeScreen from '../screens/HomeScreen'
import InformationScreen from '../screens/InformationScreen'
import TestScreen from '../screens/TestScreen'


export default function Routes() {
    return (
        <Switch>
            <PrivateRoute path="/" exact component={HomeScreen} />
            <PrivateRoute path="/information" exact component={InformationScreen} />
            <PrivateRoute path="/test" exact component={TestScreen} isPrivate={true} />
            {/* redirect user to SignIn page if PrivateRoute does not exist and user is not authenticated */}
            <PrivateRoute component={HomeScreen} />
        </Switch>
    )
}

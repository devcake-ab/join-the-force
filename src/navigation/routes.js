import React from 'react'
import { Switch } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import { Route } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import InformationScreen from '../screens/InformationScreen'
import TestScreen from '../screens/TestScreen'
import SubmitInformationScreen from '../screens/SubmitInformationScreen'

const learnMoreScreen = () => {
    return (
        <div>
            <h2>Learn more</h2>
            <h3>Coming soon</h3>
        </div>
    )
}
export default function Routes() {
    return (
        <Switch>
            <PrivateRoute path="/" exact component={HomeScreen} />
            <PrivateRoute path="/information" exact component={InformationScreen} />
            <Route path="/test" exact component={TestScreen} isPrivate={true} />
            <Route path="/learnMore" exact component={learnMoreScreen} />
            <PrivateRoute path="/submit" exact component={SubmitInformationScreen} />
            {/* redirect user to SignIn page if PrivateRoute does not exist and user is not authenticated */}
            <PrivateRoute component={HomeScreen} />
        </Switch>
    )
}

import Intro from '../screens/Intro';
import Login from '../screens/Login';
import OtpScreen from '../screens/OtpScreen';
import SignUp from '../screens/SignUp';
import { StackNavigator } from 'react-navigation';
import React from 'react';

const RootNavigation = StackNavigator({
    Intro:{
        screen: Intro,
    },
    Login:{
        screen: Login,
    },
    OtpScreen:{
        screen: OtpScreen,
    },
}, {
    headerMode: 'none',
});

export default RootNavigation;

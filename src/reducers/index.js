import { combineReducers } from 'redux';
import Auth from './Auth';
import Nav from './Navigation';
export default combineReducers ({
    xacthuc:Auth,
    nav: Nav,
});
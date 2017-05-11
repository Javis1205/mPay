import { NavigationActions } from 'react-navigation';
import { LOGIN, LOGOUT } from './type';
export const loginSuccess = (user) => (dispatch) => {
        dispatch({
            type: LOGIN,
            payload: user
        });
        const resetNavigator = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Authorized'
                })
            ],
            params: (user)
        });
        dispatch(resetNavigator);
    };
export const logout = () => (dispatch) => {
        dispatch({
            type: LOGOUT
        });
        const resetNavigator = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Unauthorized'
                })
            ]
        });
        dispatch(resetNavigator);
    };
export const checklogin = () => (dispatch) => {
        const gotoNavigator = NavigationActions.navigate({
                    routeName: 'Login'
                })
        dispatch(gotoNavigator);
    };
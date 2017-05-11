import { NavigationActions } from 'react-navigation';
import { GOTOAUTHEN } from './type';
import { AsyncStorage } from 'react-native';
export const gotoauthen = () => (dispatch) => {
        const SuNavigator = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Authorized'
                })
            ]
        });
        const FaNavigator = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Unauthorized'
                })
            ]
        });       
        const CHECK = async () => {
            try {
                const value = await AsyncStorage.getItem('DATAUSER');
                if (value !== null) {
                    dispatch(SuNavigator);
                } else {
                    dispatch(FaNavigator);
                }
            } catch (e) {
                alert('da xay ra loi loi la : ', e.message);
            }
        };        
        dispatch(CHECK);
    }
;
export const gotomainscreen = () => (dispatch) => {
        
        const gotoNavigator = NavigationActions.navigate({
                    routeName: 'Login'
                })    
        
        dispatch(gotoNavigator);
    }
;
export const gotootp = () => (dispatch) => {
        
        const gotoNavigator = NavigationActions.navigate({
                    routeName: 'OtpScreen'
                })    
        
        dispatch(gotoNavigator);
    }
;
export const gotosignup = () => (dispatch) => {
        
        const gotoNavigator = NavigationActions.navigate({
                    routeName: 'SignUp'
                })    
        
        dispatch(gotoNavigator);
    }
;
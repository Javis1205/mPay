import React, { Component }     from 'react';
import { addNavigationHelpers } from 'react-navigation';
import {connect}                from 'react-redux';
import RootNavigation           from '../navigations/RootNavigation';
class AppNavigation extends Component {
    render(){
        return(
            <RootNavigation 
                navigation = {
                    addNavigationHelpers({
                        dispatch: this.props.dispatch,
                        state: this.props.nav
                    })
                }
            />
        );
    }
}
const mapStateToProps = (state) =>{
    console.log('mapStateToProp',state)
    return{
        nav : state.nav
    }
}

export default connect (mapStateToProps)(AppNavigation);
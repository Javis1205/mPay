import React, { Component } from 'react';
import { AsyncStorage,Text } from 'react-native';
import {
    Image, Screen, Button, View, Divider
} from '@shoutem/ui';
import {
    NavigationActions
} from 'react-navigation';

const USER_DATA = 'user_data';

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            userData: null
        });
    }
    componentWillMount() {
        this.getUserData();
    }

    async onOpenChoiceChannel() {
        await this.props.navigation.navigate('DrawerClose');
        await this.props.navigation.navigate('ListChannel');
    }

    async onOpenNewsSaved() {
        await this.props.navigation.navigate('DrawerClose');
        await this.props.navigation.navigate('ListSavedNews');
    }

    onLogout() {
        this.deleteUserData();
    }

    async getUserData() {
        this.state.userData = await AsyncStorage.getItem(USER_DATA);
    }
    navigateToLogin = (routeName) => {
        const resetActionLogin = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName })]
        });
        this.props.navigation.dispatch(resetActionLogin);
    }



    async deleteUserData() {
        try {
            await AsyncStorage.removeItem(USER_DATA);
            this.navigateToLogin('Login');
        } catch (error) {
            console.log('Delete data newsfeed went wrong');
        }
    }


    render() {
        if (this.state.userData == null) {
            return (
                <Screen>
                    <View>
                        <Divider />
                        <View styleName="horizontal h-center">
                            <Image
                                style={{
                                    width: 100,
                                    height: 100
                                }}
                                source={require('../asset/images/logo.png')}
                            />

                        </View>
                        <Divider />
                        <Divider styleName="line" />
                        <Button styleName="small" onPress={this.onOpenNewsSaved.bind(this)}>
                            <Text>News Liked</Text>
                        </Button>
                        <Divider styleName="line" />
                        <Button styleName="small" onPress={this.onOpenChoiceChannel.bind(this)}>
                            <Text>Choice Channel</Text>
                        </Button>
                        <Divider styleName="line" />
                        <Button styleName="small" onPress={this.onLogout.bind(this)}>
                            <Text>Logout</Text>
                        </Button>
                    </View>

                </Screen >

            );
        }
        return (
            <Screen>
                <View>
                    <Divider />
                    <View styleName="horizontal h-center">
                        <Image
                            style={{
                                width: 100,
                                height: 100
                            }}
                            source={require('../asset/images/logo.png')}
                        />

                    </View>
                    <Divider />
                    <Divider styleName="line" />
                    <Divider styleName="line" />
                    <Button styleName="small" onPress={this.onOpenNewsSaved.bind(this)}>
                        <Text>News Liked</Text>
                    </Button>
                    <Divider styleName="line" />
                    <Button styleName="small" onPress={this.onOpenChoiceChannel.bind(this)}>
                        <Text>Choice Channel</Text>
                    </Button>
                    <Divider styleName="line" />
                    <Button styleName="small" onPress={this.onLogout.bind(this)}>
                        <Text>Logout</Text>
                    </Button>
                </View>

            </Screen >

        );
    }
}
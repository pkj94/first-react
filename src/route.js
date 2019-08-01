import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";
import { dynamicSize, getFontSize, fontFamily, themeColor, orange } from './utility/responsive';
import { View, StyleSheet } from 'react-native';
import Login from './screens/prelogin/login/login';
const prefix = 'awsomeproject://';
function stackOfAllScreens(initialScreen) {
    return createStackNavigator({
        Login: {
            screen: Login,
            navigationOptions: () => ({
                header: null
            })
        },
    }, {
            initialRouteName: initialScreen,
            navigationOptions: {
                headerTintColor: '#7a7a7a',
                headerTitleStyle: { fontFamily: fontFamily('bold'), fontWeight: 'normal', fontSize: dynamicSize(15), color: '#7a7a7a' },
                headerStyle: {
                    borderTopWidth: 0.5,
                    borderTopColor: '#e7e7e7',
                    borderBottomColor: 'white',

                },
            },
        });
}
class HandleNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.checkAuth()
    }

    componentDidMount() {
        // Linking.addEventListener('url', event => {
        //     this.handleOpenURL(event)
        // });
        // Linking.getInitialURL().then(url => url && this.handleOpenURL(url));
    }
    componentWillUnmount() {
        // Linking.removeEventListener('url', this.handleOpenURL);

    }
    handleOpenURL(url) {
        console.log('deeplink' + url)
        var name = url.split('://')[1]
        console.log('name of deeplink' + name)
        if (name != '') {
            setTimeout(() => {
                const navigateAction = NavigationActions.navigate({
                    routeName: name
                });
                this.props.navigation.dispatch(navigateAction);

            }, 3000);
        }


        //const path = url.split(':/')[1];
        //LinkRoutes(path);
    }
    checkAuth = () => {
        // AsyncStorage.getItem('headerData').then(data => {
        //     let paramData = JSON.parse(data)
        //     if (data != null) {


        //     }
        //     else this.props.navigation.navigate('stack')
        // })
        this.props.navigation.navigate('stack')
    }
    render() {
        return (
            <View></View>
        )
    }
}
export const Navigation = createSwitchNavigator({
    HandleNavigation: HandleNavigation,
    stack: { screen: stackOfAllScreens('Login') },
    stack1: { screen: stackOfAllScreens('Login') },
});
export default createAppContainer(Navigation);
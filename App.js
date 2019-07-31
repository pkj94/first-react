/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, NetInfo, Dimensions, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { SafeAreaView } from 'react-navigation';
import Routes from './src/route';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight;
const { height, width } = Dimensions.get('window');
import { createStore } from 'redux'
const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ height: STATUSBAR_HEIGHT, backgroundColor }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
const initialState = {

  userObject: {},
  notificationCount: 0

}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'userObject':
      return {
        ...state,
        userObject: action.value
      }
    case 'notificationCount':
      return {
        ...state,
        notificationCount: action.value
      }
    default:
      return {
        state
      }
  }
}
const store = createStore(reducer)

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true
    }
  }


  componentDidMount() {


    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {

    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  };

  render() {
    return (
      <Provider store={store}>
        <SafeAreaView
          forceInset={{ bottom: Platform.OS == 'ios' && deviceWidthLarge ? 30 : null }}
          style={styles.container}>
          <MyStatusBar backgroundColor={'white'} barStyle="dark-content" />
          <Routes />
          {!this.state.isConnected ? <View style={styles.offlineContainer}>
            <Text style={styles.offlineText}>No Internet Connection</Text>
          </View>
            : null}
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  offlineContainer: {
    backgroundColor: '#56B24D',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 30
  },
  offlineText: {
    color: '#fff'
  }
});

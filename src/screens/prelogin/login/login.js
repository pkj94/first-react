import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { dynamicSize } from '../../../utility/responsive';
import Style from "./style";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // alert(Width)
    }
    render() {
        return (
            <View style={Style.container}>
                <Image resizeMode="contain" style={Style.logoImage} source={require('../../../assets/image/logo.png')}></Image>
                <Text>Hello</Text>
                <View style={Style.bottomView}><Text>Signup</Text></View>
            </View>
        );
    }
}

export default Login;
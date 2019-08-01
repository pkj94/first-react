import React, { Component } from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import { dynamicSize } from '../../../utility/responsive';
import Style from "./style";
import { TouchableOpacity } from 'react-native-gesture-handler';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        // alert(Width)
    }
    render() {
        return (
            <View style={Style.container}>
                <Image resizeMode="contain" style={Style.logoImage} source={require('../../../assets/image/logo.png')}></Image>
                <TextInput style={Style.input} value={this.state.username} editable = {true} inlineImageLeft='search_icon' onChangeText={(text) => this.setState({username:text})}></TextInput>
                <TextInput style={Style.input}  value={this.state.password} password editable = {true} onChangeText={(text) => this.setState({password: text})}></TextInput>
                <View style={Style.buttonView}>
                    <TouchableOpacity
                        style={Style.buttonTouch}
                        uppercase={false}
                        block
                    >
                        <Text style={Style.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <Text style={Style.forgotOuterText}>Forgotten your login detail? <Text style={Style.forgotInnerText}>Get help with Sign In</Text></Text>
                <View style={Style.border}>
                    <Text style={Style.borderText}>OR</Text>
                </View>
                <View style={Style.bottomView}>
                    <Text style={Style.bottomViewOuterText}>Do you want an account? 
                        <Text style={Style.bottomViewInnerText}> Signup</Text>
                    </Text>
                </View>
            </View>
        );
    }
}

export default Login;
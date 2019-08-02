import React, { Component } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { dynamicSize, themeColor } from '../../../utility/responsive';
import Style from "./style";
import Lang from "./lang";
import { Icon } from 'react-native-elements';
import validator from 'validator';

class Login extends Component {
    constructor(props) {
        super(props);
        Lang.setLanguage('en');
        this.state = {
            username: '',
            password: '',
            showPassword: false
        };
        // alert(Width)
    }
    validateLogin() {
        console.log(this.state)
        let error = false;
        if (validator.isEmpty(this.state.username)) {

        }
    }
    changeLanguage(language) {
        // alert(language);
        Lang.setLanguage(language);
        this.setState({});
    }
    render() {
        return (
            <View style={Style.container}>
                <Image resizeMode="contain" style={Style.logoImage} source={require('../../../assets/image/logo.png')}></Image>
                <View style={Style.inputContainer}>
                    <Icon
                        name='email'
                        type="material"
                        color={themeColor} />
                    <TextInput style={Style.input} value={this.state.username} editable={true} inlineImageLeft='search_icon' onChangeText={(text) => this.setState({ username: text })}></TextInput>
                </View>
                <View style={Style.inputContainer}>
                    <Icon
                        name='lock'
                        type="material"
                        color={themeColor} />
                    <TextInput style={Style.input} secureTextEntry={!this.state.showPassword} value={this.state.password} password editable={true} onChangeText={(text) => this.setState({ password: text })}></TextInput>
                    <Icon
                        name={!this.state.showPassword ? 'eye-slash' : 'eye'}
                        type="font-awesome"
                        color='#7a7a7a'
                        onPress={() => { this.setState({ showPassword: !this.state.showPassword }) }} />
                </View>
                <View style={Style.buttonView}>
                    <TouchableOpacity
                        onPress={() => this.validateLogin()}
                        style={Style.buttonTouch}
                        uppercase={false}
                        block
                    >
                        <Text style={Style.buttonText}>{Lang.logiBtn}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={Style.forgotOuterText}>{Lang.forgotTxt} <Text style={Style.forgotInnerText}>{Lang.forgotLink}</Text></Text>
                <View style={Style.border}>
                    <Text style={Style.borderText}>{Lang.orTxt}</Text>
                </View>
                <View style={Style.Social}>
                    <TouchableOpacity style={[Style.facebookImage, { width: '47%' }]} onPress={() => this.changeLanguage('hi')} >
                        <Image resizeMode="contain" style={Style.facebookImage} source={require('../../../assets/image/facebook.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Style.googleImage, { width: '47%' }]} onPress={() => this.changeLanguage('en')} >
                        <Image resizeMode="contain" style={Style.googleImage} source={require('../../../assets/image/google.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={Style.bottomView}>
                    <Text style={Style.bottomViewOuterText}>{Lang.createAccountTxt}
                        <Text style={Style.bottomViewInnerText}> {Lang.signupTxt}</Text>
                    </Text>
                </View>
            </View>
        );
    }
}

export default Login;
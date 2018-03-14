/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Alert,
    View,
    Button,
    Image,
    YellowBox,
    ScrollView
} from 'react-native';
import CustomButton from '../Components/CustomButton'
import CustomTextInput from '../Components/CustomTextInput'

export default class App extends Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);
        this.state = { username: '', password: '' };
    }
    render() {
        return (
            <ScrollView style={{
                backgroundColor: 'white'
            }} >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    paddingBottom: 32,
                    paddingTop: 32
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 64
                    }}>
                        <Image source={require('../image/logo-silver-arrow.png')}
                            style={{
                                width: 260,
                                resizeMode: Image.resizeMode.contain
                            }}
                        />
                    </View>
                    <View style={{
                        marginBottom: 8,
                        marginLeft: 32,
                        marginRight: 32
                    }}>
                        <CustomTextInput placeholder='Email' onChangeText={(value) => { this.setState({ username: value }) }} />
                        <CustomTextInput placeholder='Password' onChangeText={(value) => { this.setState({ password: value }) }} />
                        <CustomTextInput placeholder='Confirm Password' onChangeText={(value) => { this.setState({ password: value }) }} />
                        <CustomTextInput placeholder='Confirm Password' onChangeText={(value) => { this.setState({ password: value }) }} />
                        <CustomTextInput placeholder='First Name' onChangeText={(value) => { this.setState({ password: value }) }} />
                        <CustomTextInput placeholder='Last Name' onChangeText={(value) => { this.setState({ password: value }) }} />
                        <CustomTextInput placeholder='Company' onChangeText={(value) => { this.setState({ password: value }) }} />
                        <CustomTextInput placeholder='Company Address' onChangeText={(value) => { this.setState({ password: value }) }} />
                        <CustomTextInput placeholder='Company Email' onChangeText={(value) => { this.setState({ password: value }) }} />
                        <CustomTextInput placeholder='Company Phone' onChangeText={(value) => { this.setState({ password: value }) }} />
                        <CustomTextInput placeholder='Phone Number' onChangeText={(value) => { this.setState({ password: value }) }} />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 64
                    }} >
                        <View style={{
                            marginBottom: 8,
                            marginLeft: 48,
                            marginRight: 8,
                            borderColor: 'black',
                            borderWidth: 1,
                            width: 24,
                            height: 24,
                            borderRadius: 5
                        }} />
                        <Text>aggree to the Terms of use and Privacy Policy</Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        marginLeft: 64,
                        marginRight: 64
                    }}>
                        <CustomButton title='SIGN UP' onPress={() => {
                            this.props.navigation.navigate('SignUp')
                        }} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}


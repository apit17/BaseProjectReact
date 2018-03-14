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
    Button
} from 'react-native';
import CustomButton from '../Components/CustomButton'
import CustomTextInput from '../Components/CustomTextInput'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
    }
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'column',
                marginLeft: 16,
                marginRight: 16
            }}>
                <View style={{
                    marginBottom: 8
                }}>
                    <CustomTextInput placeholder='Username' onChangeText={(value) => { this.setState({ username: value }) }} />
                </View>
                <View>
                    <CustomTextInput placeholder='Password' onChangeText={(value) => { this.setState({ password: value }) }} />
                </View>
                <View style={{
                    justifyContent: 'center',
                    flexDirection: 'column',
                    marginLeft: 32,
                    marginRight: 32
                }}>
                    <CustomButton title='LOGIN' onPress={() => {
                        this.props.navigation.navigate('Home')
                    }} />
                </View>
                <View>
                    <Button
                        title='Daftar disini'
                        onPress={() => { Alert.alert('register tapped') }} />
                </View>
            </View>
        );
    }
}


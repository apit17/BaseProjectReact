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
    TouchableOpacity
} from 'react-native';
import CustomButton from '../Components/CustomButton'
import CustomTextInput from '../Components/CustomTextInput'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
    }
    static navigationOptions = { header: null }
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: 'white'
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
                    <CustomTextInput placeholder='Username' onChangeText={(value) => { this.setState({ username: value }) }} />
                    <CustomTextInput placeholder='Password' onChangeText={(value) => { this.setState({ password: value }) }} />
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
                    <Text>remember me</Text>
                    <View style={{
                        marginLeft: 64,
                    }} >
                        <TouchableOpacity
                            onPress={() => { Alert.alert('forgot password') }}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    paddingTop: 8,
                                    paddingBottom: 8,
                                    fontSize: 13,
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    fontStyle: 'italic'
                                }}>
                                forgot password
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    justifyContent: 'center',
                    flexDirection: 'column',
                    marginLeft: 64,
                    marginRight: 64
                }}>
                    <CustomButton title='LOGIN' onPress={() => {
                        this.props.navigation.navigate('Home')
                    }} />
                    <CustomButton title='SIGN UP' onPress={() => {
                        this.props.navigation.navigate('SignUp')
                    }} />
                </View>
            </View>
        );
    }
}



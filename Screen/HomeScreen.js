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
    YellowBox,
    DrawerSlideEvent,
} from 'react-native';
import CustomButton from '../Components/CustomButton'
import CustomTextInput from '../Components/CustomTextInput'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);
    }
    static navigationOptions = { header: null }
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'column',
                marginLeft: 16,
                marginRight: 16
            }}>
                <Text>
                    Goblog
                </Text>
            </View>
        );
    }
}


import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'

export default class CustomTextInput extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TextInput
                style={{
                    borderBottomColor: 'steelblue',
                    borderBottomWidth:1.5,
                    marginLeft: 16,
                    marginRight: 16,
                    marginBottom: 8,
                    padding: 5,
                    fontSize: 14
                }}
                placeholder={this.props.placeholder}
                onChangeText = {(value)=>{this.props.onChangeText(value)}}>
            </TextInput>
        )
    }
}

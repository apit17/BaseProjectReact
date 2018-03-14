import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

export default class Button extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TouchableOpacity
                onPress={
                    () => { this.props.onPress() }}
                style={{
                    backgroundColor: 'steelblue',
                    padding: 5,
                    margin: 10,
                    height: 45,
                    borderRadius: 5,
                    shadowRadius: 1.5,
                    shadowColor: 'gray',
                    shadowOpacity: 1,
                    shadowOffset: {width:2.5, height: 2.5}
                }}>
                <Text
                    style={{
                        textAlign: 'center',
                        paddingTop: 8,
                        paddingBottom: 8,
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: 'white'
                    }}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        )
    }
}
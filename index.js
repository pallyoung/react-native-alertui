/**
 * @description
 * @author Spencer
 */

'use strict'
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Animated,
    Modal,
    PixelRatio
} from 'react-native';

let window = Dimensions.get('window');
function AlertTitle(props) {
    if (props.text) {
        return <Text style={[styles.title]}>{props.text}</Text>
    }
    return null
}
function AlertMessage(props) {
    if (props.text) {
        return <View style={[styles.messageWrapper]}>
            <Text style={[styles.message]}>{props.text}</Text>
        </View>
    }
    return null
}
function AlertButtons(props) {
    if (Array.isArray(props.button) && props.button.length != 0) {
        let length = props.button.length;
        return <View style={[{ flexDirection: 'column' }, length <= 2 && { flexDirection: 'row', height: 43.5 }, length <= 2 && styles.borderTop]}>
            {props.button.map(function (button, i) {
                return <TouchableOpacity
                    key={i}
                    onPress={button.onPress}
                    activeOpacity = {1}
                    style={[
                        length <= 2 ? styles.button : styles.buttonl,
                        length == 2 && i == 1 && styles.borderLeft,
                    ]}>
                    <Text style={[styles.buttonText]}>{button.text}</Text>
                </TouchableOpacity>
            })}
        </View>
    }
    return null;
}
class AlertUI extends Component {
    constructor(...props) {
        super(...props);
    }
    render() {
        var buttons = this.props.buttons.map(function (button, i) {
            !button.text && i == 0 && (button.text = '确定');
            !button.text && i == 1 && (button.text = '取消');
            return button;
        })
        return <View
            {...this.props}
            style={[styles.alertWrapper, this.props.style]}>
            <AlertTitle text={this.props.title} />
            <AlertMessage text={this.props.message} />
            <AlertButtons button={buttons} />
        </View>
    }
}
const styles = StyleSheet.create({
    alertWrapper: {
        backgroundColor: '#fff',
        width: window.width*0.72,
        borderRadius: 5,
        flexDirection: 'column',
        paddingTop: 10.5,
        overflow: 'hidden'
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        color: '#030303',
        marginHorizontal: 44,
        marginBottom: 8
    },
    messageWrapper: {
        flexDirection: 'column',
        marginBottom: 10,
        minHeight: 58,
        marginHorizontal: 34,
        justifyContent: 'center'
    },
    message: {
        fontSize: 13,
        color: '#030303',
        textAlign: 'center',
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonl: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(0,0,0,0.12)',
        borderTopWidth: 1 / PixelRatio.get()
    },
    buttonText: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        color: '#0076FF'
    },
    borderTop: {
        borderColor: 'rgba(0,0,0,0.12)',
        borderTopWidth: 1 / PixelRatio.get()
    },
    borderLeft: {
        borderColor: 'rgba(0,0,0,0.12)',
        borderLeftWidth: 1 / PixelRatio.get()
    }
})

export default AlertUI;
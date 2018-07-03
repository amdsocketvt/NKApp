import React, { Component } from 'react';
import PropTypes from   'prop-types';

import { View, 
    StyleSheet, 
    Image, 
    TextInput,
    Text,
    TouchableOpacity     } from 'react-native';   

export default class InputType extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' , remove: false};
      }

    removeTextInput() {
        this.setState({text:'' , remove: false})
    }

    // handleChangeText() = (typedText) => {
    //     this.setState({text:typedText})
    // }

    handleChangeText = (typedText) => {
        this.setState({text:typedText, remove: true})
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.props.titleText}
                </Text>
                <View style={styles.viewTextInput}>
                    <TextInput
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    // onChangeText={(text) => this.setState({text})}
                    onChange={this.handleChangeText}
                    value={this.state.text}
                    secureTextEntry={this.props.secureText}
                    placeholderTextColor= '#A0A0A0'
                    placeholder = {this.props.placeHolder}/>
                    <TouchableOpacity onPress={this.removeTextInput.bind(this)}>
                        {this.state.remove ? 
                            <Image source={require('../Resource/Images/close.png')} style = {styles.close} /> : 
                            <Image style = {styles.close} />
                        }
                        
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

{/* defaultProps */}
InputType.defaultProps = {
    titleText: 'Title Text',
    placeHolder: 'Place Holder'
};  

{/* propTypes */}
InputType.propTypes = {
    titleText: PropTypes.string,
    placeHolder: PropTypes.string,
    secureText: PropTypes.bool
};

const styles = StyleSheet.create({
    container: {
        height:64,
        margin: 20,
        marginBottom: 1,
    },
    title: {
        fontSize: 12, 
        fontWeight: 'bold',
        color: '#D4D7D9'
    },
    viewTextInput: {
        flexDirection: 'row',
        marginTop: 5,
        height: 45, 
        borderColor: '#F5F8FA',
        borderWidth: 1,
        backgroundColor: '#F5F8FA',
        borderRadius: 2
    },
    input: {
        marginTop: 0,  
        marginLeft: 8,   
        paddingTop:0,
        paddingBottom: 0,
        fontSize: 14,
        color: '#4A4A4A',
        width: '85%',
        borderColor: '#48BBEC'
        },
    close: {
        width:15,
        height:15,
        marginTop:15,   
        marginLeft: 10
    }
});
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, 
    StyleSheet,
    Text, 
    Platform } from 'react-native';   

export default class ButtonType extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.props.titleButton}
                </Text>
            </View>
        );
    }
}

{/* defaultProps */}
ButtonType.defaultProps = {
    titleButton: 'Title Button'
};  

{/* propTypes */}
ButtonType.propTypes = {
    titleButton: PropTypes.string
};

const styles = StyleSheet.create({
    container: {
        height:40,
        margin: 20,
        marginBottom: 15,
        backgroundColor: '#DC0021',
        borderRadius: 2
    },
    title: {
        fontSize: 14, 
        fontWeight: 'bold',
        color: 'white',
        width:'100%',
        height:'100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingTop:0,
        paddingBottom: 0,
        ...Platform.select({ ios: { paddingTop: 10 }, android: {} }),
    }
});
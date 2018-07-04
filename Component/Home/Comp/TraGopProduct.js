import React, { Component } from "react";
import { StyleSheet,Image, View } from "react-native";
export default class TraGop extends Component {
    render() {
        return (
        <View style={stylesTragop.container}>
                {this.props.data === 1 ? 
                <Image 
                style={stylesTragop.StyleImage} 
                source={{ uri: "https://cdn.nguyenkimmall.com/images/companies/_1/Data_Price/Pic_Tags/tap-tragop0dong.png" }} 
                /> 
                : <Image />}
            
        </View>
        );
    }
}



const stylesTragop = StyleSheet.create({
    container: {
      marginTop: 5,
      height: 16,
      flex: 1,
      width:"100%"
    },
    StyleImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
});
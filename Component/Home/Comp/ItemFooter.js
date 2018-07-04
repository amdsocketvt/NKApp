import React, { Component } from "react";
import { StyleSheet, Text, View,  TouchableOpacity } from "react-native";
export default class ItemFooter extends Component {
    _onCate = () => {
        console.log("abd");
    };
    render() {
        return (
            <TouchableOpacity onPress={this._onCate}>
            <View style={StylesItemFooter.container} >
                <Text style={StylesItemFooter.TextProduct}>
                     {this.props.data.name}
                </Text>
            </View>
            </TouchableOpacity>
        );
    }
}


const StylesItemFooter = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 5,
    marginTop: 5,
    padding: 5
    // backgroundColor: "#F5FCFF",
    // borderRadius: 4,
    // borderWidth: 1,
    // borderColor: "#ddd",
  },
  TextProduct: {
    flex: 1,
    color: "#4A4A4A",
    fontSize: 12
  }
});
import React, { Component } from "react";
import { Text,FlatList, StyleSheet, View } from "react-native";
import CallCategory from "./Api";
import Category from './Category';
import ListProductView from './ListProductView';
export default class ListCategory extends Component {
    state = {
        data: []
    };

    componentDidMount() {
       // this.fetchData();
        CallCategory().then(result => {
            console.log("abc");
            this.setState({
                data: result
            });
        }).catch(err => console.error(err));
    }
    // fetchData() {
    // //    var results =  CallCategory();
    // //    console.log(results);
    // //     this.setState({
    // //         data: results.data.data_blocks
    // //     });
    //     CallCategory().then(result =>{
    //         console.log(result);
    //         this.setState({
    //             data: result
    //      });
    //     }).catch(err=>console.error(err));
    // }
    // _renderItem = ({ item }) => (
    //     <Category data={item} ></Category>
    // );
    render() {
        return (
            <View style={stylesList.container}>
                <ListProductView />
                 <FlatList
                    data={this.state.data}
                    keyExtractor={() => 'A' + Math.random().toString(36).substr(2, 9)}
                    renderItem={({ item }) =>
                       <Category data={item} ></Category>
                    }
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />

            </View>
        );
    }
}

const stylesList = StyleSheet.create({
    container: {
        margin: 0,
        flex: 1,
        backgroundColor: "white"
    }
});

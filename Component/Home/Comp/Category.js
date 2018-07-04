import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import ItemProduct from "./ItemProduct";

import Item from './Item';
export default class Category extends Component {
  state = {
    id : null,
    name: null,
    alias : null,
    products: [],
    footer:[],
    position_display:null,
    backgroundColor:null
  };

  // componentWillMount() {
  //   this.setState({
  //     id: this.props.data.id,
  //     name: this.props.data.header.name,
  //     alias: this.props.data.header.alias,
  //     products: this.props.data.product_list_details,
  //     footer: this.props.data.footer,
  //     position_display: this.props.data.position_display,
  //     backgroundColor: this.props.data.color
  //   });
  // }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={[styles.stylehr, { borderBottomColor: this.props.data.color}]}
        />
        <Text style={styles.TextCategory}>{this.props.data.header.name}</Text>
        <View style={styles.ViewImage}>
          <Image
            style={styles.StyleImage}
            source={{ uri: 'https://cdn.nguyenkimmall.com/images/promo/522/home-scroll-mobile-floor-tivi-lg.jpg' }}
          />
        </View>
        <View  style={styles.list}>
            {this.props.data.product_list_details.map(it =>   <ItemProduct key={'D' + Math.random().toString(36).substr(2, 9)} data={it} DataColumn={2}  />)}
        </View>

        {/* <FlatList
          data={this.props.data.product_list_details}
          keyExtractor={() => 'D' + Math.random().toString(36).substr(2, 9)}
        //  ItemSeparatorComponent={() => <View style={{ width: '100%', height: 0.5, backgroundColor: 'red' }} />}
          renderItem={({ item }) =>
              <ItemProduct data={item} DataColumn={2} />
          }
          style={styles.list}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          horizontalScroll={false}
        />  */}
        <Item data={this.props.data.footer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 0,

    marginBottom:5,
    paddingBottom: 5,
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "gray",
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'red',
    shadowOffset: { height: 2, width: 0 }
  },
  TextCategory: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    margin: 5,
  },
  list: {
    marginBottom: 5,
 //   marginTop: 5,
    padding: 3,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  stylehr:{

    borderBottomWidth: 3,
    width:200
  },
  ViewImage:{
    height:120,
    marginBottom: 3,
  },
  StyleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});

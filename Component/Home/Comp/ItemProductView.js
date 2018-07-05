import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions} from "react-native";
import TraGop from './TraGopProduct';
export default class ItemProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { widthitem:  parseInt((Dimensions.get("window").width / parseInt(this.props.DataColumn)) - 8)
  };

  }
  _onPress = () => {
    console.log("abc");
  };
  render() {
    return <TouchableOpacity onPress={this._onPress}>
        <View style={[StylesItem.container, { width: this.state.widthitem }]}>
          <View style={StylesItem.ViewImageProduct}>
            <Image style={StylesItem.ImageProduct} source={{ uri: "https://cdn.nguyenkimmall.com/images/thumbnails/225/225/detailed/291/01_8329-af.jpg" }} />
          </View>
          <View style={StylesItem.ViewTitle}>
            <TraGop data={this.props.data.nk_tragop_0} link={this.props.data.nk_tragop_0} />
          
            <Text style={StylesItem.TextBrand}>{this.props.data.brand}</Text>
            <Text style={StylesItem.TextProduct}>
              {this.props.data.shortname}
            </Text>
            <Text style={StylesItem.TextPrice}>
              {this.props.data.price}
            </Text>
            {this.props.data.nk_tragop_0 === 1 ? <Text
                style={StylesItem.TextSale}
              >
                {this.props.data.text_promotion}
              </Text> : <Text   style={StylesItem.TextSale} ></Text>}
          </View>
        </View>
      </TouchableOpacity>;
  }
}


const StylesItem = StyleSheet.create({
  container: {
  //  aspectRatio: 1,
  //  flex: 1,
  //  flexDirection: 'column',
    //marginLeft:5,
    // marginTop: 5,
    padding: 5,
   // height:400,
    // width:(Dimensions.get("window").width / 3 )- 10 ,

    // minWidth: 190,
    // maxWidth: 230,
    // height: 304,
    // maxHeight: 304,
    //backgroundColor: "#F5FCFF",
    //  borderRadius: 4,
    // borderWidth: 0.5,
    // borderColor: "gray"
  },
  TextProduct: {
    fontSize: 12
  },
  ImageProduct: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
    //flex:1
  },
  ViewImageProduct: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    height: 100
  },
  TextPrice: {
    color: "red",
    fontSize: 16,
    marginTop: 5
  },
  TextBrand: {
    //justifyContent: "center",
    fontWeight: "bold",
    fontSize: 12
  },
  ViewTitle: {
    justifyContent: "center",
    alignItems: "center",
  
  },
  TextSale: {
    fontSize: 10,
    color: "#53C574"
  },
  ImageProductSale:{
    width:"100%",
    height:"100%"
  }
});
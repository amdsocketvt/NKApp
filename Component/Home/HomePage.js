import React, { Component } from 'react'
import { View, Text, TouchableOpacity , TouchableHighlight, ScrollView, StyleSheet, Image} from 'react-native'
import HeaderMenu from '../../Global/HeaderMenu/HeaderMenu'
import ImageSlider from './ImageSlider'
import HorizontalMenu from './HorizontalMenu'
import FontAwesome, { Icons } from 'react-native-fontawesome';
import ListCategory from './Comp/ListCategory';
const images = [
    'https://cdn.nguyenkimmall.com/images/promo/521/HW_768x298.jpg',
    'https://cdn.nguyenkimmall.com/images/promo/526/Tivi-Panasonic-768x298.jpg',
    'https://cdn.nguyenkimmall.com/images/promo/527/home-scroll-mobile-A6-km-new.jpg'
  ];
export default class HomePage extends Component{

    _rendSlide = ({ index, item, style, width }) =>(
        <View
        key={index}
        style={[style, {backgroundColor : 'white'}]}
      >
        <Image source={{ uri: item }} style={{flex: 1,
            width: null,
            height: null,
            resizeMode: 'contain'}} />
      </View>
    )

    _rendButton = (position, move) =>(
        <View style={styles.buttons}>
        {images.map((image, index) => {
          return (
            <TouchableHighlight
              key={index}
              underlayColor="#ccc"
              onPress={() => move(index)}
              style={[styles.button, position === index  && styles.buttonSelected]}
            >
              <Text >

              </Text>
            </TouchableHighlight>
          );
        })}
      </View>
    )


    render(){

        return(
            <View style={{flex : 1, backgroundColor : '#F0F1F5'}}>

                <HeaderMenu/>
                <ScrollView>
                <View style={{backgroundColor : '#FFD600',height:32, flexDirection : 'row', alignItems: 'center', justifyContent:'space-between', padding : 10}}>

                  <Text>
                    Khuyến mãi HOT
                  </Text>

                    <FontAwesome>{Icons.chevronRight}</FontAwesome>

                </View>
                <View style={{height : 160}}>
                    <ImageSlider
                        images={images}
                        customSlide={this._rendSlide}
                        customButtons={this._rendButton}
                    />
                </View>
                <HorizontalMenu/>

                <ListCategory/>
              </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },

    buttons: {
        zIndex: 1,
        height: 15,
        marginTop: -25,
        marginBottom: 10,
        flexDirection: 'row',
      },
    customSlide: {
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
    customImage: {
      width: '100%',
      height: '100%',
    },
    button: {
        margin : 3,
        width: 6.6,
        height: 6.6,
        backgroundColor : 'transparent',
        borderRadius : 20,
        borderColor : 'white',
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
      },
      buttonSelected: {
        backgroundColor : 'red',
        borderColor : 'red',
      },
  });

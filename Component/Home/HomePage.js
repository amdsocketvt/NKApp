import React, { Component } from 'react'
import { View, Text, Platform, TouchableOpacity , TouchableHighlight, ScrollView, StyleSheet, Image} from 'react-native'
import HeaderMenu from '../../Global/HeaderMenu/HeaderMenu'
import BannerSlider from '../../Global/BannerSlider'
import HorizontalMenu from './HorizontalMenu'
import FontAwesome, { Icons } from 'react-native-fontawesome';
import ListCategory from './Comp/ListCategory';



export default class HomePage extends Component{

    render(){
      const images = [
        'https://cdn.nguyenkimmall.com/images/promo/521/HW_768x298.jpg',
        'https://cdn.nguyenkimmall.com/images/promo/526/Tivi-Panasonic-768x298.jpg',
        'https://cdn.nguyenkimmall.com/images/promo/527/home-scroll-mobile-A6-km-new.jpg'
      ];
        return(
            <View style={styles.container}>

                <HeaderMenu/>
                <ScrollView>
                <View style={{backgroundColor : '#FFD600',height:32, flexDirection : 'row', alignItems: 'center', justifyContent:'space-between', padding : 10}}>

                  <Text>
                    Khuyến mãi HOT
                  </Text>

                    <FontAwesome>{Icons.chevronRight}</FontAwesome>

                </View>
                
                <HorizontalMenu/>
                <BannerSlider
                  data={images}
                />
                <ListCategory/>
              </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex : 1,
      backgroundColor : '#F0F1F5',
      ...Platform.select({
        ios: {
          marginTop: 20
        }
      })
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

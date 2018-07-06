import React, { Component } from 'react';
import {View, StyleSheet, Image, TouchableHighlight, Text} from 'react-native';
import ImageSlider from './Lib/ImageSlider';


class BannerSlider extends Component{
    _rendSlide = ({ index, item, style, width }) =>(
        <View
        key={index}
        style={[style, {backgroundColor : 'white'}]}
      >
        <Image 
        source={{ uri: item }} 
        style={{flex: 1,
            width: null,
            height: null,
            resizeMode: 'contain'}}
           />
      </View>
    );
    
    _rendButton = (position, move) =>(
        <View style={styles.buttons}>
        {this.props.data.map((image, index) => {
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
    );
    render(){
        return(
            <View style={{height : 160}}>
                {this.props.data.length > 0 ? <ImageSlider
                  images={this.props.data}
                  customSlide={this._rendSlide}
                  customButtons={this._rendButton}
                  /> : null}
                
            </View>
        );
    }
}


const styles = StyleSheet.create({

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

export default BannerSlider;
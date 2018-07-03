import React, { Component } from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, StatusBar}from 'react-native'
import AppIntroSlider from './AppIntroSlider'


const styles = StyleSheet.create({
    buttonCircle: {
      width: 40,
      height: 40,
      backgroundColor: 'red',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
     width: 320,
     height: 320
    },
    mainContent: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    text: {
        color: 'red',
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 22,
        color: 'red',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginBottom: 16,
    },
    containBtn : {
      flexDirection: 'row',
      justifyContent : "space-around",
      alignItems: 'center',
    },
    button : {
      alignItems: 'center',
      justifyContent : 'center',
      padding : 10,
      borderRadius : 30,
      borderWidth: 1,
      borderColor  : "red",
      flex : 1,
      margin : 15
    },
    buttonLogin : {
      backgroundColor : 'white'
    },
    buttonRegister : {
      backgroundColor: "red"
    },
    txtReg : {
      color : "white",
      fontSize: 16,
      
    },
    txtLog : {
      color : "red",
      fontSize: 16,
      
    }

  });

const slides = [
    {   
      key: 'dat1',
        image: require('../../Resource/Images/1.png'),
      },
      {
        key: 'dat2',
        image: require('../../Resource/Images/2.png'),
      },
      {
        key: 'dat3',
        image: require('../../Resource/Images/3.png'),
      },
      {
        key: 'dat4',
        image: require('../../Resource/Images/4.png'),
      },
      {
        key: 'dat5',
        image: require('../../Resource/Images/5.png'),
      }
];
export default class IntroSlider extends Component{

    _renderItems = props =>(
        <View
      style={[styles.mainContent, {
        paddingTop: props.topSpacer,
        paddingBottom: props.bottomSpacer,
        width: props.width,
        height: props.height,
      }]}
    >
        <Image source={props.image} style={styles.image}></Image>
    
    </View>
    );
    render(){
        return(
            <View style={{flex : 1, backgroundColor: 'white'}}>
              <StatusBar
                backgroundColor="red"
                barStyle="light-content"
              />
             
                <AppIntroSlider
                slides = {slides}
                renderItem={this._renderItems}
                activeDotColor="red"
                dotBorderColor="red"
                dotBorderWidth={1}
                dotColor="white"
                autoPlay={true}
                maxPlay={5}
                timerNext={5000}
                />

                <View style={styles.containBtn}>
                    <TouchableOpacity 
                    style={[styles.button, styles.buttonRegister]}
                    onPress={()=>{this.props.navigation.navigate('LoginMain' , {type:false})}}>
                      <Text style={styles.txtReg}>Đăng ký</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={[styles.button, styles.buttonLogin]}
                    onPress={()=>{this.props.navigation.navigate('LoginMain' , {type:true})}}>
                      <Text style={styles.txtLog}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>   
        );
    }
}


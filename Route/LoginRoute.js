import React, { Component } from 'react'
import {
    createStackNavigator,
  } from 'react-navigation';
import IntroSlider from '../Component/Login/IntroSlider'
import LoginMain from '../Component/Login/LoginMain'
import HomePage from '../Component/Home/HomePage'

const LoginRoute = createStackNavigator({
   
    IntroSlider : {screen : IntroSlider},
    LoginMain : {screen : LoginMain},
    Home : {screen : HomePage}
},{navigationOptions : {
    header : null
}})

export default LoginRoute;
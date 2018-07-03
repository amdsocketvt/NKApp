import React, { Component } from 'react'
import {
    createStackNavigator,
  } from 'react-navigation';
import IntroSlider from '../Component/Login/IntroSlider'
import LoginMain from '../Component/Login/LoginMain'

const LoginRoute = createStackNavigator({
    IntroSlider : {screen : IntroSlider},
    LoginMain : {screen : LoginMain}
},{navigationOptions : {
    header : null
}})

export default LoginRoute;
import React, { Component } from 'react'
import {Image} from "react-native"

const Splash = () => {
    return(
        <Image 
            source={require('../../Resource/Images/welcome.jpg')}
            style={{width: null, height: null, flex : 1}}
        />
    );
}

export default Splash;
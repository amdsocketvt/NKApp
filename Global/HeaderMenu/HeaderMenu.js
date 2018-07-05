import React, { Component } from 'react';
import {View, Text , StyleSheet, TouchableOpacity, Image} from 'react-native';
import LeftMenu from './LeftMenu'
import {RNCamera} from 'react-native-camera'
export default class HeaderMenu extends Component{

    constructor(props){
        super(props);
        this.state = {
            isMenu : false,
            isSearch : false,
            isQR :false,

        }
    }

    barcodeRead(data){
        this.setState({
            isQR : false
        })
        console.log(data);
    }
    render(){
        return(
            <View>
            <View style={styles.header}>
                    <TouchableOpacity style={styles.btnMenu}
                    onPress={()=>{this.setState({isMenu : this.state.isMenu ? false : true})}}>
                        <Image source={require('../../Resource/Images/Line.png')}/>
                    </TouchableOpacity>
                    <View style={styles.searchBar}>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Image source={require('../../Resource/Images/filler.png')} style={{width: 20, height: 20}}/>

                            <Text>Tìm sản phẩm, thương hiệu</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{this.setState({isQR : this.state.isQR ? false : true})}}>
                            <Image source={require('../../Resource/Images/qr.png')} style={{width: 20, height: 20}}/>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity style={styles.btnMenu}>
                        <Image source={require('../../Resource/Images/Cart.png')}/>
                    </TouchableOpacity>

                </View>
                {this.state.isMenu ? <View style={{position : 'absolute', left : 0, top : 56, backgroundColor :'#bdc3c7'}}><LeftMenu/></View> : <View></View>}
                {this.state.isQR ? <RNCamera
                style={{flex : 1}}
                barCodeTypes={[RNCamera.Constants.BarCodeType.qr, RNCamera.Constants.BarCodeType.code128]}
                onBarCodeRead={(data) => this.barcodeRead(data)}
                />:null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    header : {
        height : 56,
        backgroundColor : "#DC0021",
        justifyContent : 'center',
        flexDirection : 'row'
    },
    btnMenu : {
        flex : 0.5,
        justifyContent : 'center',
        alignItems: 'center',
    },
    searchBar : {
        backgroundColor : 'white',
        flex : 4,
        margin : 10,
        borderRadius: 2,
        padding : 5,

        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //Shadow
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 },
    }
})

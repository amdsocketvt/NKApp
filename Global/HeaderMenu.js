import React, { Component } from 'react';
import {View, Text , StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class HeaderMenu extends Component{

    constructor(props){
        super(props);
        this.state = {
            isMenu : false,
            isSearch : false
        }
    }
    render(){
        return(
                <View style={styles.header}>
                    <TouchableOpacity style={styles.btnMenu}>
                        <Image source={require('../Resource/Images/Line.png')}/>
                    </TouchableOpacity>
                    <View style={styles.searchBar}>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Image source={require('../Resource/Images//filler.png')} style={{width: 20, height: 20}}/>
                            
                            <Text>Tìm sản phẩm, thương hiệu</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Image source={require('../Resource/Images//qr.png')} style={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                        
                    </View>
                    <TouchableOpacity style={styles.btnMenu}>
                        <Image source={require('../Resource/Images//Cart.png')}/>
                    </TouchableOpacity>
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
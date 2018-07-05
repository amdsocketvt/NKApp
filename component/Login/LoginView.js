import React, { Component } from 'react';
import { View,
    TouchableOpacity,
    Text,
    ScrollView } from 'react-native';
import InputType from '../../Global/InputType';
import ButtonType from '../../Global/ButtonType';
import SocialType from '../../Global/SocialType';

export default class LoginView extends Component {
    
    gotoMain(){
        this.props.navi.navigate('Home')
    }
    render() {

        return (
            <ScrollView>
                <View style={{flex:1, height:550}}>
                    <InputType titleText='Email' placeHolder='Nhập email'/>
                    <InputType titleText='Mật khẩu' placeHolder='Nhập mật khẩu' secureText={true}/>
                    <TouchableOpacity onPress={()=>this.gotoMain()}>
                        <ButtonType titleButton='Đăng nhập'/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{color:'#1A7EFF', fontSize: 12, textAlign: 'center', marginTop:0 }}>
                            Bạn quên mật khẩu?
                        </Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row', marginLeft:20, marginBottom:10, marginRight:20, marginTop:30, height:20}}>
                        <Text style={{backgroundColor:'#E6E6E6', width:'15%', textAlign:'left', height:1, marginTop:8}}></Text>
                        <Text style={{color:'#4A4A4A', width:'70%', fontSize: 12, textAlign: 'center'}}>Hoặc đăng nhập nhanh bằng</Text>
                        <Text style={{backgroundColor:'#E6E6E6', width:'15%', textAlign:'right', height:1, marginTop:8}}></Text>
                    </View> 
                    <SocialType status='login'/>
                </View>
            </ScrollView>
        );
    }
}
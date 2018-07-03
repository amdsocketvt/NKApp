import React, { Component } from 'react';
import RadioButton from 'radio-button-react-native';

import { View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView } from 'react-native';

import InputType from '../../Global/InputType';
import ButtonType from '../../Global/ButtonType';
import SocialType from '../../Global/SocialType';
export default class RegisterView extends Component {

    constructor (props) {
        super(props)
          this.state = {
                value: 0
            }
        }

    handleOnPress(value){
        this.setState({value:value})
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.radioStyle}>
                        <RadioButton currentValue={this.state.value}  value={0} onPress={this.handleOnPress.bind(this)}/>
                        <Text style={styles.radioBtn1}>Anh</Text>
                        <RadioButton currentValue={this.state.value} value={1} onPress={this.handleOnPress.bind(this)}/>
                        <Text style={styles.radioBtn2}>Chị</Text>
                    </View>
                    <InputType titleText='Họ và tên' placeHolder='Nguyen Van A'/>
                    <InputType titleText='Email' placeHolder='email@email.com'/>
                    <InputType titleText='Mật khẩu' placeHolder='***************' secureText={true}/>
                    <InputType titleText='Nhập lại mật khẩu' placeHolder='***************' secureText={true}/>
                    <TouchableOpacity>
                        <ButtonType titleButton='Tạo tài khoản'/>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row', marginLeft:20, marginBottom:10, marginRight:20, marginTop:30, height:20}}>
                        <Text style={{backgroundColor:'#E6E6E6', width:'15%', textAlign:'left', height:1, marginTop:8}}></Text>
                        <Text style={{color:'#4A4A4A', width:'70%', fontSize: 12, textAlign: 'center'}}>Hoặc đăng ký nhanh bằng</Text>
                        <Text style={{backgroundColor:'#E6E6E6', width:'15%', textAlign:'right', height:1, marginTop:8}}></Text>
                    </View> 
                    <SocialType status='register'/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    /* Background Image */
    container: {
        flex: 1,
        height: 750
    },
    radioStyle: {
        marginTop: 20,
        marginLeft: 20,
        flexDirection: 'row',
    },
    radioBtn1: {
        marginLeft: 10,
        marginRight: 20,
        fontSize: 14, 
        fontWeight: 'bold' 
        
    },
    radioBtn2: {
        marginLeft: 10,
        fontSize: 14, 
        fontWeight: 'bold' 
    }
})
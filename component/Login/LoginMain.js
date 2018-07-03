import React, { Component } from 'react';
import { View, 
    StyleSheet, 
    ImageBackground, 
    Image, 
    TouchableOpacity,
    Text } from 'react-native';
import LoginView from './LoginView';
import RegisterView from './RegisterView';
export default class LoginMain extends Component {
    
    state = {
        status: true
    }

    changeViewRegister() {
        this.setState({ status: false })
    }

    changeViewLogin() {
        this.setState({ status: true })
    }

    render() {
        const { status } = this.state;
        const textColorLogin = status ? '#DC0021' : '#E6E6E6'
        const textColorRegister = status ? '#E6E6E6' : '#DC0021'

        lineSelected = function(viewShow) {
            if (((viewShow === 'login') && (status === true)) || ((viewShow === 'register') && (status === false))) {
                return {
                    marginTop: 5,
                    backgroundColor: '#DC0021',
                    width: '100%',
                    height: 2,
                }
            }
            return {
                marginTop: 5,
                backgroundColor: '#FFFFFF',
                width: '100%',
                height: 2,
            }
        } 

        return (
            <ImageBackground source ={require('../../Resource/Images/bgLogin.png')} style= {styles.bgImg}>
                <Image source={require('../../Resource/Images/headerSlogan.png')} style = {styles.header} />

                {/* View Main */}
                <View style={styles.container}>
                    <View style={styles.tagOption}>
                        <TouchableOpacity style={styles.login} onPress = { () => this.changeViewLogin()}>
                            <Text style={{color:textColorLogin, fontSize: 14, fontWeight: 'bold' }}>
                                ĐĂNG NHẬP
                            </Text>
                            <View style={lineSelected('login')}>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.register} onPress = { () => this.changeViewRegister()}>
                            <Text style={{color:textColorRegister, fontSize: 14, fontWeight: 'bold' }}>
                                ĐĂNG KÝ
                            </Text>
                            <View style={lineSelected('register')}>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style= {styles.line} />
                    {this.state.status ? <LoginView/> : <RegisterView/>}
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    /* Background Image */
    bgImg: {
        flex: 1,
        alignItems: 'center'
    },
    /* Slogan */
    header: {
        marginTop: 40,
        width: 226,
        height: 75
    },
    /* View Main */
    container: {
        backgroundColor: 'white',
        marginTop: 20,
        width: '95%',
        height: '100%',
        borderRadius: 5,
    },
    /*Tab Login - Register */
    tagOption: {
        marginLeft: 20,
        marginTop: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center'    
    },
    /*Underline Selected */
    line: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#E6E6E6',
        height:1
    },
    /*Text Login */
    login: {
        flex:1,
        alignItems: 'center'
    },
    /*Text Register */
    register: {
        flex:1,
        alignItems: 'center',
    }
});
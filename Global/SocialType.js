import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, 
    StyleSheet,
    Text, 
    Image,
    TouchableOpacity, 
    AsyncStorage  } from 'react-native';   


import FBSDK , {LoginManager, AccessToken,  GraphRequest,
    GraphRequestManager} from 'react-native-fbsdk';
import  { GoogleSignin } from 'react-native-google-signin';


const facebookParams = "id,name,email,picture.width(50).height(50)";
const _USEROBJECT_ = "USEROBJECT";

let userObj = {  
    idUser:0,
    nameUser: 'user',
    emailUser: 'user@mail.com',
    photoUser: 'linkphoto',
    passwordUser: 'password',
    nameSocial: 'Default',
    idSocial: "0",
    accessToken:"",
    status:0
};



export default class SocialType extends Component {
    constructor(props) {
        super(props);
        this.state = { user: ''};
      }

        /**  Login with facebook */
            _fbAuth = () => { 
            LoginManager.logInWithReadPermissions(['public_profile', 'email'])      
                .then((results) => {
                if(results.isCancelled)
                {
                console.log('Login is fail');
                }
                else{
                console.log('Login is success with: ' + results.grantedPermissions.toString());
                console.log('AccessToken ' + AccessToken);          
                AccessToken.getCurrentAccessToken().then(
                    (data) => {
                    console.log('data: ' + data);
                    const responseInfoCallback = (error, result) => {
                        if (error) {
                        console.log(error);
                        alert('Error fetching data: ' + error.toString());
                        } else {
                        console.log(result);
                        //this.setState({	name: 'sadsa'  } ); 
                        //this.setState({ name :  result.name , link : result.picture.data.url  }); //                
                        userObj = {
                            nameUser: result.name,
                            emailUser: result.email,
                            photoUser: result.picture.data.url,
                            passwordUser: '123456',
                            nameSocial: 'facebook',
                            idSocial: result.id,
                            accessToken:data.accessToken,
                            status:1
                        };
                        console.log("Facebook userObj: ", userObj);
                        try{
                            AsyncStorage.setItem(_USEROBJECT_,  JSON.stringify(userObj));
                        } 
                        catch(error){
                        } 
                        }
                    }

                    
                    const infoRequest = new GraphRequest(
                        '/me',
                        {
                        accessToken: data.accessToken,
                        parameters: {
                            fields: {
                            string: facebookParams
                            }
                        }
                        },
                        responseInfoCallback);
            
                    new GraphRequestManager().addRequest(infoRequest).start();
                
                    
                    }
                )

                }
            }, function(error){
            console.log(error);
            })
        }

        async setupGoogleSignin() {
        //     try {
            await GoogleSignin.hasPlayServices({ autoResolve: true });
            await GoogleSignin.configure({
                webClientId: "887676567624-gbu9k1794blj494i0nb49ed9sqgbv7m1.apps.googleusercontent.com",
                iosClientId: "887676567624-i4hpbcup1a0s8lrj06fa98v19ujr4gli.apps.googleusercontent.com",    //,
                offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
                hostedDomain: '', // specifies a hosted domain restriction
                forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login
                accountName: '', // [Android] specifies an account name on the device that should be used  
            });

            const user = await GoogleSignin.currentUserAsync();
            console.log(user);

            this.setState({ user });
            };

        // //     const result = await GoogleSignin.currentUserAsync();
        // //     console.log("user",result);
        // //    // console.log("user.idToken:",  result.idToken);
        // //     //this.setState({ name:result.name, link:result.photo  });
        // //     userObj = {
        // //         nameUser: result.name,
        // //         emailUser: result.email,
        // //         photoUser: result.photo,
        // //         passwordUser: '123456',
        // //         nameSocial: 'google',
        // //         idSocial: result.id,
        // //         accessToken: result.accessToken,    
        // //         status:1
        // //     };
        // //     console.log("Google userObj: ", userObj);
        // //     try{
        // //         AsyncStorage.setItem(_USEROBJECT_,  JSON.stringify(userObj));
        // //     } 
        // //     catch(error){
        // //     } 
        //     }
        //     catch (err) {
        //     console.log("Google signin error", err.code, err.message);
        //     }
        // }

        /**  Login with google */
        _googleAuth = () => {
            this.setupGoogleSignin();    
            }

        zaloSocicalHandle() {
            if (this.props.status === "login") {
                console.log("Xu ly zalo");
            }
        }

        fbSocicalHandle() {
            if (this.props.status === "login") {              
                console.log("Xu ly fb login");
                this._fbAuth();
            }
        }

        gmailSocicalHandle() {
            if (this.props.status === "login") {
                console.log("Xu ly gg login");
                this._googleAuth();
            }
        }

        render() {
            return(
                <View style={styles.container}>
                    <View style={styles.content}>
                        <TouchableOpacity onPress = { () => this.zaloSocicalHandle()}>
                            <Image source={require('../Resource/Images/zaloIcon.png')} style = {styles.icon} />
                        </TouchableOpacity>
                        
                        <Text style={{color:'#4A4A4A', fontSize: 14, textAlign: 'center',  marginTop:5 }}> 
                            Zalo
                        </Text>
                    </View>
                    <View style={styles.content}>
                        <TouchableOpacity onPress = { () => this.fbSocicalHandle()}>
                            <Image source={require('../Resource/Images/fbIcon.png')} style = {styles.icon} />
                        </TouchableOpacity>
                        <Text style={{color:'#4A4A4A', fontSize: 14, textAlign: 'center', marginTop:5}}> 
                            Facebook
                        </Text>
                    </View>
                    <View style={styles.content}>
                        <TouchableOpacity onPress = { () => this.gmailSocicalHandle()}>
                            <Image source={require('../Resource/Images/gmailIcon.png')} style = {styles.icon} />
                        </TouchableOpacity>
                        <Text style={{color:'#4A4A4A', fontSize: 14, textAlign: 'center', marginTop:5 }}> 
                            Gmail
                        </Text>
                    </View>
                </View>
            );
        }
    }

{/* propTypes */}
SocialType.propTypes = {
    status: PropTypes.string
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    content: {
        alignItems: 'center',
        margin: 20,
        marginTop: 0,
    },
    icon: {
        width:40,
        height:40,
    }
});
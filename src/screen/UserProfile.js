import React, { Component } from 'react'
import { Text, View,StyleSheet,Image, ScrollView ,TextInput} from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Zocial from 'react-native-vector-icons/Zocial'
import Feather from 'react-native-vector-icons/Feather'
export default class UserProfile extends Component {
    render() {
        return (
             <View style={{height:"100%",backgroundColor:"snow",}} >
               <Image style={styles.dp}
                            source={require('../assets/dp.jpg')}>
                        </Image>
                        <Text style={{marginTop:10,fontSize:20, textAlign: "center",}}>RIMSHA</Text>
                       
               <View style={{height:"100%",backgroundColor:'sandybrown',marginTop:"10%",borderRadius:40}}>
               <ScrollView>
                    <View style={styles.container}>
                        <FontAwesome style={styles.iconstyle }
                         name="user"  size={20} color='sandybrown'  />
                        <TextInput  style={{ marginStart: 10, }}
                            placeholder="Choose your user name"
                            keyboardType="password"
                            placeholderTextColor="lightlategrey"                
                        />
                    </View>
                    <View style={styles.container1}>
                        <Zocial style={styles.iconstyle}
                         name="email"  size={20} color='sandybrown'  />
                        <TextInput style={{ marginStart: 10, }}
                            placeholder=" E-mail or phone number"
                            keyboardType="text"
                            placeholderTextColor="lightlategrey"                           
                        />
                    </View>
                    <View style={styles.container1} >
                        <Feather style={styles.iconstyle} 
                        name="phone-call"
                          size={20} color='sandybrown' />
                        <TextInput style={{ marginStart: 10, }}
                            placeholder="Enter your phone number"
                            keyboardType="password"
                            placeholderTextColor="lightlategrey"                            
                        />
                        
                    </View>
                    <View style={styles.container1} >
                        <Feather style={styles.iconstyle} 
                        name="phone-call"
                          size={20} color='sandybrown'  />
                        <TextInput style={{ marginStart: 10, }}
                            placeholder="Enter your phone number"
                            keyboardType="password"
                            placeholderTextColor="lightlategrey"                           
                        />
                        </View>
                        </ScrollView>
            </View>
           
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    dp:{ 
        height:130,width:130,alignContent:'center',alignSelf:'center',borderRadius:100,marginTop:60
    },
    container: {
        height: 60,
    
        marginHorizontal: 40,
        marginTop:90 ,
        borderRadius:40,
        textAlign: "center",
        flexDirection: "row",
        backgroundColor:'snow'
    },
    container1: {
        height: 60,
    
        marginHorizontal: 40,
        marginTop:20 ,
        borderRadius:40,
        textAlign: "center",
        flexDirection: "row",
        backgroundColor:'snow'
    },
    iconstyle:{
        marginTop: 20, marginLeft: 20
    }
});
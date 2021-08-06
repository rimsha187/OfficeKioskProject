import React, { Component } from 'react'
import { Text, View ,StyleSheet,TextInput,TouchableOpacity } from 'react-native'

export default class VerifyCode extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    
                 <View style={[styles.directions]}>
                     <View>
                          <Text style={styles.starttext}> Verify Code</Text>
                           <Text style={styles.bodytext}>Hy --------, Please check yourmail, enter the code below we sent you in mail and verify your account </Text>
                     </View>
                       <View style={{flexDirection:'row',justifyContent:'center',marginTop:'20%'}}>
                          <TextInput style={[styles.textboxpadding, styles.textbox]} />
                            <TextInput style={[styles.textboxpadding, styles.textbox]} />
                          <TextInput style={[styles.textboxpadding, styles.textbox]} />
                           <TextInput style={[styles.textboxpadding, styles.textbox]} />
                      </View>
                      <View>
                       <TouchableOpacity activeOpacity={0.5}
                       style={styles.btn}>
                        <Text style={styles.SignUptxt}>Submit</Text>
                    </TouchableOpacity>
                  </View>

                  </View>
                 
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'sandybrown',
        height:'100%'
    },
    container1:
    {
        backgroundColor:'seashell', 
        height:'100%',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        marginTop:'25%'
    },
    starttext:
    {
      color:'black',
      fontSize:29,
      marginTop:'10%',
      marginHorizontal:25
    },
      bodytext:
      {
          fontSize:15,
          color:'black',
          paddingTop:10,
          marginHorizontal:25
      },
      directions: {
      
marginTop:'30%',borderTopLeftRadius:40,
borderTopRightRadius:40
      ,backgroundColor:'white',
        height:'100%'
    },
    textbox: {
        backgroundColor: "white",
        borderColor: 'grey',
        borderWidth: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginStart:10,
        marginEnd:10,
marginTop:0,
       width:50,
       
        height: 60,

    },
    textboxpadding: {

        textAlign: "center"
    },
    btn:{
        marginHorizontal:25,
        height:60,
        borderRadius:30,
        backgroundColor:'sandybrown',
        paddingStart:20,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        marginTop:"20%"
    },
    SignUptxt:
   {
     
      fontSize:18,
      color:'white'
   },
});
import React, { Component } from 'react'
import { Text, View,StyleSheet ,Image,TextInput,Button, TouchableOpacity, ScrollView,} from 'react-native'
import User from 'react-native-vector-icons/AntDesign';
import Eye from 'react-native-vector-icons/Ionicons';
import Lock from 'react-native-vector-icons/MaterialIcons';
export default class LogIn extends Component {   
state={
    username:'',
    Pass:'',
    showPass:true,
    password: '',
   
 }

    render() {
        return (
            <View style={styles.container}>
                 <View style={styles.container1}>
                        <Text style={styles.starttext}> Get Started</Text>
                        <Text style={styles.bodytext}> Create Account to Continue</Text>
                        
                 
                    <View style={styles.socialicons}>
                        <Image style={styles.google} source={{uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'}}/>
                        <Image style={styles.fb} source={{uri: 'https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512'}}/>
                        <Image style={styles.twitter} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSov8rd1M_KeVCGCv9Qh40N0fK9JKY2a6I063Lpx7oEPWme576zXSLY1g05FauoMrOopNI&usqp=CAU'}}/>
                    </View>
                  
                   <View style={styles.textboxcontainer}>
                    <View style={styles.textbox}>
                       <User style={styles.iconstyle} name="user" size={20} color='sandybrown' />
                       <TextInput style={{paddingStart:15}} 
                        placeholder='Nimra Bukhari' 
                        placeholderTextColor="lightslategrey" />
                    </View>                  
                     <View style={styles.textbox3}>
                     <Lock style={styles.iconstyle} name="lock-outline" size={20} color='sandybrown' />
                       <TextInput style={{paddingStart:20,flex:1}} 
                        placeholder='Password' 
                        placeholderTextColor="lightslategrey" 
                        value={this.state.Pass} 
                        secureTextEntry={this.state.showPass}
                        onChangeText={(txt)=> this.setState({Pass:txt})}/>
                       <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} 
                       onPress={()=> this.setState({showPass:!this.state.showPass})}>
                       <Eye style={styles.EyeIcon} name={this.state.showPass==true? 'eye-off-outline':'eye-outline' }size={20} color="black"  /> 
                      </TouchableOpacity>
                       
                     </View>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Home')}
                    style={styles.btn}>
                       
                        <Text style={styles.SignUptxt}>Log In</Text>
                    </TouchableOpacity>
   
                   <View style={styles.lasttxtcontainer}>
                       <Text style={styles.alreadyText}>Don't Have Account? </Text>
                    <TouchableOpacity activeOpacity={0.5}>
                       <Text style={styles.SignInText}>Sign Up</Text>
                    </TouchableOpacity>
                   
                   </View>
                   <View style={{justifyContent:'center',alignItems:'center',marginTop:'32%'}}> 
                        <View  style={{ borderBottomColor: 'snow',borderBottomWidth: 4,width:'50%',}} >
                        </View>
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
        backgroundColor:'white', 
        height:'100%',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        marginTop:'25%'
    },
    starttext:
  {
    color:'black',
    fontSize:22,
    marginTop:20,
    marginHorizontal:25
  },
    bodytext:
    {
        fontSize:16,
        color:'black',
        paddingTop:10,
        marginHorizontal:25
    },
    socialicons:
    {
        flexDirection:'row',
        marginHorizontal:25,
        marginStart:10
    },
    google:
    {
        height:40,
        width:40,
        marginTop:15,
         marginStart:10,
        borderRadius:25
    },
    fb:
    {
        height:35,
        width:35,
        marginTop:15,
         marginStart:10,
        borderRadius:25
    },
    twitter:
    {
        height:40,
        width:40,
        marginTop:17,
         marginStart:10,
        borderRadius:25
    },
    textboxcontainer:
    {
        
        marginTop:20,
        marginHorizontal:25
        
    },
    textbox:{
        marginHorizontal:15,
        height:60,
        borderRadius:30,
        backgroundColor:'snow',
        paddingStart:20,
        flexDirection:'row',
    },
  
  
    textbox3:{
        marginHorizontal:15,
        height:60,
        borderRadius:30,
        backgroundColor:'snow',
        paddingStart:20,
        marginTop:20,
        flexDirection:'row',
     
    },
    btn:{
        marginHorizontal:15,
        height:60,
        borderRadius:30,
        backgroundColor:'sandybrown',
        paddingStart:20,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        marginTop:"40%"
    },
    SignUptxt:
   {
     
      fontSize:18,
      color:'white'
   },
   lasttxtcontainer:
   {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
   marginTop:'5%'
   },
   alreadyText:
   {
       color:'black',
       fontSize:16,   },
    SignInText:
    {
       color:'sandybrown',
       fontSize:16
    },
    container2: {
        height: 60,
        marginHorizontal: 20,
        marginTop:20 ,
        borderRadius:40,
        textAlign: "center",
        flexDirection: "row",
        backgroundColor:'brown'
    },
 iconstyle:{
        marginTop: 20,marginStart:5
    },
    
 iconstyle1:{
    marginTop: 20,marginStart:5,
 },
 EyeIcon:
 {
 paddingEnd:20
 },
  });

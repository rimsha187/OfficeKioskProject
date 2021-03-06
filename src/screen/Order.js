
import React, { Component } from 'react'
import { Image, Text, View,StyleSheet, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class Order extends Component {
    render() {
        return (
            <View style={{backgroundColor:'black',height:'100%'}}>
            <View style={{backgroundColor:'sandybrown',height:'90%',borderBottomLeftRadius:60,borderBottomRightRadius:60}}>
                <View style={{backgroundColor:'snow',height:'80%',borderBottomLeftRadius:60,borderBottomRightRadius:60}}>
                        <View style={{backgroundColor:'white',height:'70%',borderBottomLeftRadius:160,borderBottomRightRadius:160}}>
                                 <View>
                                     <Image  style={styles.dp}
                                     source={require('../assets/dp.jpg')}>
                                     </Image>
                                 </View>
                                 <View style={{flexDirection:'row',marginHorizontal:40}}>
                                     <TouchableOpacity style={{
                    backgroundColor: 'white',
                    borderRadius:40, alignItems: "center", textAlign: "center", justifyContent: "center",
                    height: 40, width: 50,  marginStart: 30,marginTop:100}}>
                        <Text style={{color:'black'}}>
                            S
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    borderRadius:40, alignItems: "center", textAlign: "center", justifyContent: "center",
                    height: 40, width: 50,  marginStart: 30,marginTop:120}}>
                        <Text style={{color:'black'}}>
                           M
                        </Text>

                                     </TouchableOpacity>
                                     <TouchableOpacity style={{
                    backgroundColor: 'white',
                    borderRadius:40, alignItems: "center", textAlign: "center", justifyContent: "center",
                    height: 40, width: 50,  marginStart: 30,marginTop:100}}>
                        <Text style={{color:'black'}}>
                           L
                        </Text>

                                     </TouchableOpacity>
                                 </View>
                        </View>
                <Text style={{marginStart:40,marginTop:40,fontSize:20}}>HEllo World</Text>
                <Text style={{marginStart:40,marginTop:10,fontSize:15}}>mix  </Text>
                <Text style={{marginStart:40,marginTop:10,fontSize:20}}>$34  </Text>
                  
                </View>
             <Text>HEllo</Text>
             </View>
             <View style={{flexDirection:'row',textAlign:'center',alignContent:'center',alignSelf:'center'}}>
           <Text style={{color:'white',marginTop:20,fontSize:20}}>Order Now</Text>
           <MaterialIcons style={{marginTop:23,}}
                         name="navigate-next"  size={25} color='white'  />
                         </View>
         </View>
            
           
        )
    }
}

const styles = StyleSheet.create({
    dp:{ 
        height:150,width:150,alignContent:'center',alignSelf:'center',marginTop:100
    },
    
});
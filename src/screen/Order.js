
import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class Order extends Component {
    render() {
        return (
            <View style={{backgroundColor:'black',height:'100%'}}>
            <View style={{backgroundColor:'sandybrown',height:'90%',borderBottomLeftRadius:60,borderBottomRightRadius:60}}>
                <View style={{backgroundColor:'snow',height:'70%',borderBottomLeftRadius:60,borderBottomRightRadius:60}}>
                        <View style={{backgroundColor:'white',height:'60%',borderBottomLeftRadius:160,borderBottomRightRadius:160}}>
                                 <View>
                                     <Image>
                                         saddadasf
                                     </Image>
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

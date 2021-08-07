// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
// import UserProfile from './src/screen/UserProfile'
// import Order from './src/screen/Order'
// import LogIn from './src/screen/LogIn'
// import ForgetPassword from './src/screen/ForgetPassword'
// import VerifyCode from './src/screen/VerifyCode'
// import OrderReceiver from './src/screen/OrderReceiver'
// import { NavigationContainer } from '@react-navigation/native'
// import {createStackNa}
// import Flat from './src/component/Flat'
// export default class App extends Component {
//   render() {
//     return (
//      <OrderReceiver/>
//     )
//   }
// }

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Order from './src/screen/Order'
import LogIn from './src/screen/LogIn'
import ForgetPassword from './src/screen/ForgetPassword'
import VerifyCode from './src/screen/VerifyCode'
import OrderReceiver from './src/screen/OrderReceiver'


const Stack = createStackNavigator();


function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="LogIn" component={LogIn} />
                <Stack.Screen name="Order" component={Order    } />
                {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;




// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

// import UserProfile from './src/screen/UserProfile'
// import Order from './src/screen/Order'
// import LogIn from './src/screen/LogIn'
// import ForgetPassword from './src/screen/ForgetPassword'
// import VerifyCode from './src/screen/VerifyCode'
// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Order" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;







import React, { Component } from 'react'
import { Text, View } from 'react-native'
import UserProfile from './src/screen/UserProfile'
import Order from './src/screen/Order'
import LogIn from './src/screen/LogIn'
import ForgetPassword from './src/screen/ForgetPassword'
import VerifyCode from './src/screen/VerifyCode'
export default class App extends Component {
  render() {
    return (
     <VerifyCode/>
    )
  }
}


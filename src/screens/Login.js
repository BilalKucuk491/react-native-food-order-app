import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {COLORS, FONTS, SIZES, images} from '../constants';
import {LinearGradient} from "react-native-linear-gradient"

const Login = ({navigation}) => {

  const renderHeader = ()=>{
    return (
      <View style={{
        height:SIZES.height > 700 ? "65%":"60%"
      }}>
        <ImageBackground source={images.loginBackground} 
        style={{
          flex:1,
          justifyContent:"flex-end"
        }} resizeMode="cover" />
      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}>
        <StatusBar barStyle="light-content" />
        {renderHeader()}
      {/* header */}
      {/* Details */}
    </View>
  );
};

export default Login;

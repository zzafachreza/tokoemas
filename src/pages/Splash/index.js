import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { MyButton } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';
import LinearGradient from 'react-native-linear-gradient';

export default function Splash({ navigation }) {
  const top = new Animated.Value(0.3);

  const animasi = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(top, {
          toValue: 1,
          duration: 1000,
        }),
        Animated.timing(top, {
          toValue: 0.3,
          duration: 1000,
        }),
      ]),
      {
        iterations: 1,
      },
    ).start();
  };



  useEffect(() => {
    setTimeout(() => {
      getData('user').then(res => {
        if (!res) {
          navigation.replace('Login')
        } else {
          navigation.replace('Home')
        }
      })
    }, 1500)
  }, []);


  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <View style={{
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Image source={require('../../assets/logo.png')} style={{
          width: windowWidth / 1.2,
          resizeMode: 'contain'
        }} />
        <ActivityIndicator size="large" color={colors.primary} />


      </View>




    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

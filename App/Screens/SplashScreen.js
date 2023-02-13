import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CSButton from '../Components/CSButton';

function SplashScreen({navigation}) {
  return (
    <>
      <View style={Styles.background}>
        <View>
        <Image
          source={require('../Images/f.png')}
          style={{resizeMode: 'contain'}}
        />
          <View style={Styles.container}>
            <Text
              style={{
                marginTop: 30,
                fontSize: 24,
                color: '#0D986A',
                fontWeight: '600',
                paddingHorizontal: 35,
                paddingTop: 15,
              }}>
              Get Ready
            </Text>
            <Text
              style={{
                fontSize: 24,
                color: '#0D986A',
                fontWeight: '600',
                paddingHorizontal: 35,
              }}>
              Be Higyenic
            </Text>
            <Text
              style={{
                color: '#0D986A',
                paddingHorizontal: 18,
                paddingTop: 30,
              }}>
              Plantly, the online nursery app to buy and sell plants, comes with
              a clean and neat design and the interface
            </Text>

            <View style={{padding: 20, marginBottom: 20}}>
              <CSButton
                label="Continue"
                loader={false}
                color="white"
                bgcolor="#0D986A"
                fs={20}
                fw={'800'}
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
const Styles = StyleSheet.create({
  background: {
    height: '100%',
    justifyContent: 'flex-end',
    width: '100%',
  },
  container: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#fff',
  },
});

export default SplashScreen;

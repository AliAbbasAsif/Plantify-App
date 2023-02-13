import axios from 'axios';
import React, {useState} from 'react';
import {Image, ImageBackground, Text, ToastAndroid, View} from 'react-native';
import CSButton from '../Components/CSButton';
import CSTextField from '../Components/CSTextField';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../Store/TokenSlice';
import {useEffect} from 'react';
import BaseUrl from '../Config/BaseUrl';

function Login({navigation}) {
  const [model, setModel] = useState({});
  let [loader, setloader] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector(state => state.Token);
  console.log(selector, 'Redux');

  let loginUser = () => {
    axios
      .post(`${BaseUrl}login`, model)
      .then(response => {
        console.log(response.data, 'response');
        if (response.data) {
          dispatch(add(response.data));
          ToastAndroid.show('Logged in successfully', 1500);
          navigation.navigate('Home');
        } else {
          setError(response.data.message);
          ToastAndroid.show('Login Failure', 1500);
        }
        setloader(false);
      })
      .catch(error => {
        setloader(false);
        console.log(error, 'error');
      });
  };
  //   useEffect(()=>{getData()},[])
  return (
    <>
      <View style={{width: '100%', height: '100%', flex: 1}}>
        <View style={{width: '100%', height: '100%'}}>
          <View style={{paddingHorizontal: 20, marginTop: 20}}>
            <Image
              source={{
                uri: 'https://www.plantifyhome.com/uploads/b/a2cb72cdbbaea69b27a68536ed0bccb81966cbb1a7d821779b646a0768b56040/logo_1663824610.png',
              }}
              style={{width: 80, height: 80, resizeMode: 'contain'}}
            />
          </View>

          <View
            style={{
              padding: 10,
              marginLeft: 10,
            }}>
            <Text
              style={{
                color: '#0D986A',
                fontWeight: '600',
                fontSize: 40,
                textAlign: 'left',
              }}>
              Login
            </Text>
            <Text
              style={{
                color: '#0D986A',
                width: '50%',
              }}>
              Enter Email and password for Shopping in shore
            </Text>
          </View>

          <View style={{marginTop: 50}}>
            <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
              <Text style={{color: 'grey', marginLeft: 10, padding: 5}}>
                Email
              </Text>
              <CSTextField
                placeholder="Email"
                onChangeText={e => setModel({...model, email: e})}
                placeholderTextColor={'black'}
                style={{
                  borderColor: '#0D986A',
                  borderWidth: 2,
                  borderRadius: 17,
                  paddingLeft: 20,
                  color: 'black',
                }}
              />
            </View>
            <View style={{paddingHorizontal: 20}}>
              <Text style={{color: 'grey', marginLeft: 10, padding: 5}}>
                Password
              </Text>
              <CSTextField
                placeholder="Password"
                onChangeText={e => setModel({...model, password: e})}
                placeholderTextColor={'black'}
                style={{
                  borderColor: '#0D986A',
                  borderWidth: 2,
                  borderRadius: 17,
                  paddingLeft: 20,
                  color: 'black',
                }}
              />
            </View>
            <View style={{padding: 13, position: 'relative', left: 15}}>
              <Text style={{color: '#0D986A', fontWeight: '600'}}>
                Forgot Password?
              </Text>
            </View>
            <View style={{paddingHorizontal: 20}}>
              <CSButton
                label={'Login'}
                loader={loader}
                onPress={loginUser}
                color={'white'}
                fs={20}
                fw={'800'}
                bgcolor={'#0D986A'}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#0D986A', fontSize: 16}}>
                  Don't have an account
                </Text>
                <Text
                  style={{
                    color: '#0D986A',
                    fontSize: 16,
                    fontWeight: '900',
                    paddingLeft: 8,
                  }}
                  onPress={() => navigation.navigate('Signup')}>
                  Sign Up
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default Login;

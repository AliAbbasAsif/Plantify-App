import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import CSButton from '../Components/CSButton';
import CSSnackbar from '../Components/CSSnackBar';
import CSTextField from '../Components/CSTextField';
import BaseUrl from '../Config/BaseUrl';

function Signup({navigation}) {
  const [model, setModel] = useState({});
  const [refresh, Setrefresh] = useState(false);
  let [loader, setloader] = useState(false);
  const [err, Seterr] = useState('');
  //   const [visible, setVisible] = useState(false);
  //   const [Status, setStatus] = useState("");
  let signupuser = () => {
    if (
      !model.Email ||
      !model.Password ||
      !model.firstname ||
      !model.lastname ||
      !model.mobilenumber
    ) {
      ToastAndroid.show('REQUIRED FIELDS ARE MISSING', 1500);
    } else {
      setloader(true);
    }
    axios
      .post(`${BaseUrl}signup`, model)
      .then(response => {
        console.log(response.data, 'response');
        // setVisible(true)
        // setStatus(response.data.message)
        if (response.data.status === true) {
          navigation.navigate('Login');
        }
        if (response.data.status == false) {
          Seterr(response.data.message);
          console.log(err, 'Error Message');
        }
        setloader(false);
        // Setrefresh(!refresh);
      })
      .catch(error => {
        setloader(false);
        console.log(error, 'error');
      });
  };
  useEffect(() => {}, [refresh]);
  return (
    <>
      <View style={{flex: 1, width: null, height: null}}>
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
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
                Sign Up
              </Text>
              <Text
                style={{
                  color: '#0D986A',
                  width: '50%',
                }}>
                Enter Email and password for Shopping in shore
              </Text>
            </View>

            <View>
              <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                <CSTextField
                  placeholder="FirstName"
                  onChangeText={e => setModel({...model, firstname: e})}
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
              <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                <CSTextField
                  placeholder="LastName"
                  onChangeText={e => setModel({...model, lastname: e})}
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
              <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                <CSTextField
                  placeholder="Phone Number"
                  onChangeText={e => setModel({...model, mobilenumber: e})}
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
              <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                <CSTextField
                  placeholder="Email"
                  onChangeText={e => setModel({...model, Email: e})}
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
              <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                <CSTextField
                  placeholder="Password"
                  onChangeText={e => setModel({...model, Password: e})}
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
              <View style={{margin: 5, paddingHorizontal: 20}}>
                {err ? (
                  <Text
                    style={{
                      color: 'red',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontSize: 18,
                    }}>
                    {err.toUpperCase()}
                  </Text>
                ) : null}
              </View>
            </View>
            <View style={{paddingHorizontal: 20, paddingTop: 16}}>
              <CSButton
                label={'SignUp'}
                loader={loader}
                color={'white'}
                fs={20}
                fw={'800'}
                bgcolor={'#0D986A'}
                onPress={signupuser}
              />
            </View>
          </ScrollView>
          <View>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row', marginTop: 16}}>
                <Text style={{color: '#0D986A', fontSize: 16}}>
                  Already have an account
                </Text>
                <Text
                  style={{
                    color: '#0D986A',
                    fontSize: 16,
                    fontWeight: '900',
                    paddingLeft: 8,
                  }}
                  onPress={() => navigation.navigate('Login')}>
                  Login
                </Text>
              </View>
            </View>
          </View>
          {/* <CSSnackbar label={setStatus} visible={visible}/> */}
        </View>
      </View>
    </>
  );
}

export default Signup;

import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import CSButton from '../Components/CSButton';

function Order({navigation}) {
  const credentials = useSelector(state => state.Token);
  const [id,Setid] = useState('')
  useEffect(() => {
    let r = (Math.random() + 1).toString(36).substring(1);
    console.log('random', r);
    Setid(r)
  }, []);
  return (
    <View>
      <Text
        style={{
          fontSize: 65,
          fontWeight: '900',
          color: '#0D986A',
          textAlign: 'center',
        }}>
        Order Recieved
      </Text>
      <View style={{padding: 20}}>
        <Text style={{color: 'black', textAlign: 'center'}}>
          OrderId: #{id}
        </Text>
      </View>
      <View style={{paddingTop: 100, paddingHorizontal: 20}}>
        <CSButton
          label={'Back To Home'}
          loader={false}
          color={'white'}
          fs={20}
          fw={'800'}
          bgcolor={'#0D986A'}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
}

export default Order;

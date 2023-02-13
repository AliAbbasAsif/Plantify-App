import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import CSButton from '../Components/CSButton';
import CSTextField from '../Components/CSTextField';
import BaseUrl from '../Config/BaseUrl';

function CheckOut({navigation}) {
  let auth = useSelector(state => state.Token);
  console.log(auth.user, 'auth');
  const [model, setModel] = useState({});
  console.log(model, 'modelnehiajkdfnhorwjkhnoi');
  let [loader, setloader] = useState(false);
  const [totalamount, setTotalamount] = useState(0);
  const cartItems = useSelector(state => state.cart);
  console.log(cartItems, 'c');
  let checkout = () => {
    axios
      .post(`${BaseUrl}orders`, {
        userName: auth.user.first_name,
        userId: auth.user._id,
        cartItems: cartItems,
        subTotal: totalamount,
        address: model,
      })
      .then(response => {
        console.log(response.data, 'response');
          navigation.navigate('Order');
       
      })
      .catch(error => {
        setloader(false);
        console.log(error, 'error');
      });
  };
  useEffect(() => {
    setTotalamount(
      cartItems
        .map(x => x.price)
        .reduce((partialSum, a) => partialSum + a, 0)
        .toFixed(0),
    );
  });
  return (
    <ScrollView>
      <View>
        <View
          style={{
            padding: 10,
            marginLeft: 18,
            marginTop: 90,
            marginBottom: 40,
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: '900',
              fontSize: 45,
              textAlign: 'center',
            }}>
            Check Out
          </Text>
        </View>
        <View style={{paddingHorizontal: 15}}>
          <View style={{backgroundColor: 'lightgrey', padding: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 25,
                fontWeight: '900',
                textAlign: 'center',
              }}>
              Order Summary
            </Text>
            {cartItems && cartItems.length > 0
              ? [...new Set(cartItems)].map((x, i) => (
                  <View style={{flexDirection: 'row', padding: 7}} key={i}>
                    <Text style={{color: 'black', fontWeight: '900', flex: 3}}>
                      {x.name}
                    </Text>
                    <Text style={{color: 'black', fontWeight: '900'}}>
                      ${x.price}
                    </Text>
                  </View>
                ))
              : null}
            <Text style={{color: 'black', fontWeight: '900', fontSize: 19}}>
              Total Amount: ${totalamount}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
          <CSTextField
            placeholder="Address"
            placeholderTextColor="black"
            onChangeText={e => setModel(e)}
            style={{
              borderColor: '#0D986A',
              borderWidth: 2,
              borderRadius: 17,
              paddingLeft: 20,
              color: '#0D986A',
            }}
          />
        </View>
        <View style={{paddingHorizontal: 20, paddingTop: 16}}>
          <CSButton
            label={'CheckOut'}
            loader={loader}
            color={'white'}
            fs={20}
            fw={'800'}
            bgcolor={'#0D986A'}
            onPress={checkout}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default CheckOut;

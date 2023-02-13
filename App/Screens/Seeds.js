import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { add } from '../Store/cartSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import BaseUrl from '../Config/BaseUrl';
import { addFavourite } from '../Store/favouritesslice';

function Seeds({navigation}) {
  let dispatch = useDispatch();
  let [Data, SetData] = useState('');
  let getData = () => {
    axios
          // .get('http://192.168.100.5:5000/api/similar/plants', {
      //   headers: {Authorization: `Bearer ${selector}`},
      // })
      .get(`${BaseUrl}seeds`)
      .then(response => {
        console.log(response.data.seeds, 'response');
        SetData(response.data.seeds);
      })
      .catch(err => {
        console.log('data not found', err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView >
    <View style={{backgroundColor:'#fff'}}>
      {Data && Data.length > 0 ? (
        <View style={{padding: 13}}>
          {Data.map((item, index) => (
            <View
              style={{
                margin: 4,
                padding: 10,
                backgroundColor: '#fff',
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,

                elevation: 7,
              }}
              key={index}>
              <TouchableOpacity onPress={() => navigation.navigate('Product', item)}>
              <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                      <Text style={{fontSize: 17, color: 'black'}}>
                        {item.name}
                      </Text>
                      <View
                        style={{
                          paddingHorizontal: 18,
                          paddingVertical: 5,
                          flexDirection: 'row',
                        }}>
                        <TouchableOpacity onPress={() => dispatch(add(item))}>
                          <Icon
                            name="shopping-cart"
                            size={25}
                            color="#0D986A"
                          />
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingLeft:15}} onPress={() => dispatch(addFavourite(item))}>
                          <Icon name="favorite" size={25} color="#0D986A" />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Image
                      source={{uri: `${item.image}`}}
                      style={{
                        width: 500,
                        height: 130,
                        resizeMode: 'stretch',
                        flex: 1,
                      }}
                    />
                  </View>
                <Text
                  style={{
                    fontSize: 17,
                    color: 'black',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                  }}>
                  $ {item.price}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : null}
    </View>
  </ScrollView>
  )
}

export default Seeds

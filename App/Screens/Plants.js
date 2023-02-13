import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AddButton from '../Components/AddButton';
import CSQuantity from '../Components/CSQuantity';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {add} from '../Store/cartSlice';
import BaseUrl from '../Config/BaseUrl';
import { addFavourite } from '../Store/favouritesslice';

function Plants({navigation}) {
  let dispatch = useDispatch();
  let [Data, SetData] = useState('');
  let getData = () => {
    axios
      // .get('http://192.168.100.5:5000/api/similar/plants', {
      //   headers: {Authorization: `Bearer ${selector}`},
      // })
      .get(`${BaseUrl}plants`)
      .then(response => {
        console.log(response.data.plants, 'response');
        SetData(response.data.plants);
      })
      .catch(err => {
        console.log('data not found', err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      <View style={{backgroundColor: '#fff'}}>
        {Data && Data.length > 0 ? (
          <View style={{padding: 13}}>
            {Data.map((plant, index) => (
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
                <TouchableOpacity
                  onPress={() => navigation.navigate('Product', plant)}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                      <Text style={{fontSize: 17, color: 'black'}}>
                        {plant.name}
                      </Text>
                      <View
                        style={{
                          paddingHorizontal: 18,
                          paddingVertical: 5,
                          flexDirection: 'row',
                        }}>
                        <TouchableOpacity onPress={() => dispatch(add(plant))}>
                          <Icon
                            name="shopping-cart"
                            size={25}
                            color="#0D986A"
                          />
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingLeft:15}} onPress={() => dispatch(addFavourite(plant))}>
                          <Icon name="favorite" size={25} color="#0D986A" />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Image
                      source={{uri: `${plant.image}`}}
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
                    $ {plant.price}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
}

export default Plants;

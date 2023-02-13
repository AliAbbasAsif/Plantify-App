import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import { add } from '../Store/cartSlice';


export default function AddButton({product}) {
  const dispatch = useDispatch();
  return (
    <>
      <View style={{alignItems: 'space-between'}}>
        <TouchableOpacity
          onPress={() => dispatch(add(product))}
          style={{
            backgroundColor: 'red',
            width: 50,
            margin: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            paddingHorizontal: 15,
            paddingVertical: 6,
            width: 'auto',
          }}>
          <Icon name="add" size={13} color="white" />
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              marginLeft: 5,
              fontWeight: 'bold',
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
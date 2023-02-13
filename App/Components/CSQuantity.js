import React from 'react'
import { useDispatch } from 'react-redux';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { add, remove } from '../Store/cartSlice';

function CSQuantity({productId, specificItemList, product}) {
    const dispatch = useDispatch();
  return (
    <>
    <View
      style={{
        margin: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
      }}>
      <Text
        style={{
          color: 'gray',
          padding: 5,
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Quantity :
      </Text>

      <TouchableOpacity
        onPress={() => dispatch(remove(productId))}
        style={{
          backgroundColor: 'grey',
          borderRadius: 50,
          padding: 6,
        }}>
        <Icon name="remove" size={20} color="white" />
      </TouchableOpacity>
      <Text style={{fontSize: 20, color: 'black'}}>
        {specificItemList.filter(item => item.id === productId).length}
      </Text>
      <TouchableOpacity
        onPress={() => dispatch(add(product))}
        style={{
          backgroundColor: 'red',
          borderRadius: 50,
          padding: 6,
        }}>
        <Icon name="add" size={20} color="white" />
      </TouchableOpacity>
    </View>
  </>
  )
}

export default CSQuantity


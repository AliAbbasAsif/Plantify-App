import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {add, remove, removeAll, removeAllInstance} from '../Store/cartSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CSQuantity from '../Components/CSQuantity';
import AddButton from '../Components/AddButton';
import {COD} from '../Config/COD';

function Cart({navigation}) {
  const favouritesslice = useSelector(state => state.favourite);
  const dispatch = useDispatch();
  const [couponcode, setCouponcode] = useState(false);
  const [totalamount, setTotalamount] = useState(0);
  const cartItems = useSelector(state => state.cart);
  const couponcodeChecker = couponCode => {
    if (couponCode === 'dis') {
      setCouponcode(true);
      setTotalamount(totalamount - 20);
    } else if (couponCode === 'dis99') {
      setCouponcode(true);
      setTotalamount(1);
      COD.INIT_COD = 0;
    } else {
      setCouponcode(false);
      COD.INIT_COD = 80;
      setTotalamount(
        cartItems
          .map(x => x.price)
          .reduce((partialSum, a) => partialSum + a, 0)
          .toFixed(0),
      );
    }
  };

  useEffect(() => {
    setTotalamount(
      cartItems
        .map(x => x.price)
        .reduce((partialSum, a) => partialSum + a, 0)
        .toFixed(0),
    );
  }, [cartItems]);

  return (
    <View style={{height: '100%', width: '100%'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingVertical: 10}}>
          <Image
            source={{
              uri: 'https://www.plantifyhome.com/uploads/b/a2cb72cdbbaea69b27a68536ed0bccb81966cbb1a7d821779b646a0768b56040/logo_1663824610.png',
            }}
            style={{width: 80, height: 80, resizeMode: 'contain'}}
          />
        </View>

        <View>
          <Text
            style={{
              color: '#0D986A',
              fontSize: 42,
              fontWeight: '900',
              textAlign: 'center',
            }}>
            Your Bag
          </Text>
        </View>
        <View>
          {cartItems && cartItems.length > 0 ? (
            [...new Set(cartItems)].map((x, i) => (
              <View
                key={i}
                style={{
                  backgroundColor: 'lightgrey',
                  marginVertical: 10,
                  marginHorizontal: 12,
                  borderRadius: 20,
                  padding: 5,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <View
                  key={x.id}
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}>
                  <View style={{flex: 1}}>
                    <Image
                      source={{uri: `${x.image}`}}
                      resizeMode="contain"
                      style={{
                        height: 70,
                        width: 90,
                        margin: 10,
                        borderRadius: 20,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 2,
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      marginLeft: 5,
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#222',
                        textAlign: 'left',
                        fontWeight: '800',
                      }}>
                      {x.name.slice(0, 30) + (x.name.length > 30 ? '...' : '')}
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        color: '#222',
                        textAlign: 'left',
                        fontWeight: '800',
                      }}>
                      ${x.price}
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <View style={{paddingHorizontal: 8}}>
                    <TouchableOpacity
                      onPress={() => dispatch(add(x))}
                      style={{
                        borderWidth: 2,
                        borderColor: 'white',
                        padding: 3,
                        borderRadius: 10,
                      }}>
                      <Icon name="add" size={20} color="black" />
                    </TouchableOpacity>
                  </View>

                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: '700',
                      color: 'black',
                    }}>
                    {cartItems.length
                      ? cartItems.filter(item => item._id === x._id).length
                      : null}
                  </Text>
                  <View style={{paddingHorizontal: 8}}>
                    <TouchableOpacity
                      onPress={() => dispatch(remove(x))}
                      style={{
                        borderWidth: 2,
                        borderColor: 'black',
                        padding: 2,
                        borderRadius: 10,
                      }}>
                      <Icon name="remove" size={20} color="red" />
                    </TouchableOpacity>
                  </View>
                  <View style={{paddingHorizontal: 8}}>
                    <TouchableOpacity
                      onPress={() => dispatch(removeAllInstance(x))}
                      style={{
                        padding: 3,
                        borderRadius: 10,
                        marginLeft: 10,
                      }}>
                      <Icon name="delete-outline" size={30} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <View>
              <Text
                style={{
                  color: '#222',
                  fontSize: 37,
                  textAlign: 'center',
                  marginTop: 150,
                }}>
                Plz fill Cart
              </Text>
            </View>
          )}
        </View>
        <View style={{padding: 20}}>
          <TextInput
            placeholder="COUPON CODE"
            placeholderTextColor={'black'}
            onChangeText={e => couponcodeChecker(e.toLowerCase())}
            style={{
              borderBottomWidth: 3,
              padding: 0,
              borderBottomColor: 'black',
              width: 100,
              color: 'black',
              fontSize: 16,
            }}
          />
          {couponcode ? (
            <Text style={{color: 'black', fontWeight: '700'}}>
              COUPON APPLIED
            </Text>
          ) : null}
          <View style={{paddingVertical: 10}}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '900'}}>
              Delivery Charges : {COD.INIT_COD}
            </Text>
          </View>
          <View style={{paddingTop: 10, flexDirection: 'row'}}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '900'}}>
              Total Ammount:
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: '900',
                justifyContent: 'space-around',
              }}>
              {' '}
              {''}
              {totalamount}
            </Text>
          </View>
        </View>

        <View>
          {favouritesslice && favouritesslice.length > 0 ? (
            [...new Set(favouritesslice)].map((x, i) => (
              <View key={i}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#0D986A',
                      fontSize: 17,
                      padding: 12,
                      flex: 5,
                    }}>
                    Saved For Later
                  </Text>
                  <Text
                    style={{
                      color: '#0D986A',
                      fontSize: 17,
                      padding: 12,
                      flex: 1,
                    }}>
                    {' '}
                    {favouritesslice.length
                      ? favouritesslice.filter(item => item._id === x._id)
                          .length
                      : null}
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: 'lightgrey',
                    marginVertical: 10,
                    marginHorizontal: 12,
                    borderRadius: 20,
                    padding: 5,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}>
                  <View
                    key={x.id}
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                    }}>
                    <View style={{flex: 1}}>
                      <Image
                        source={{uri: `${x.image}`}}
                        resizeMode="contain"
                        style={{
                          height: 70,
                          width: 90,
                          margin: 10,
                          borderRadius: 20,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flex: 2,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        marginLeft: 5,
                        padding: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#222',
                          textAlign: 'left',
                          fontWeight: '800',
                        }}>
                        {x.name.slice(0, 30) +
                          (x.name.length > 30 ? '...' : '')}
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#222',
                          textAlign: 'left',
                          fontWeight: '800',
                        }}>
                        ${x.price}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: '700',
                        color: 'black',
                      }}>
                      {favouritesslice.length
                        ? favouritesslice.filter(item => item._id === x._id)
                            .length
                        : null}
                    </Text>

                    <View style={{paddingHorizontal: 8}}>
                      <TouchableOpacity
                        onPress={() => dispatch(removeAllInstance(x))}
                        style={{
                          padding: 3,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}>
                        <Icon name="delete-outline" size={30} color="red" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <View>
              <Text
                style={{
                  color: '#222',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                No Favourites
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Checkout')}
          style={{
            backgroundColor: '#0D986A',
            width: 50,
            margin: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            paddingHorizontal: 15,
            paddingVertical: 10,
            width: 'auto',
          }}>
          <Icon name="logout" size={18} color="white" />
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              marginLeft: 5,
              fontWeight: 'bold',
            }}>
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Cart;

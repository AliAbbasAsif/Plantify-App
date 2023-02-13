import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeAllInstance} from '../Store/favouritesslice';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Fravouite() {
  const favouritesslice = useSelector(state => state.favourite);
  console.log(favouritesslice, 'ffff');
  const dispatch = useDispatch();
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
            Favourites
          </Text>
        </View>
        <View>
          {favouritesslice && favouritesslice.length > 0 ? (
            [...new Set(favouritesslice)].map((x, i) => (
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
                No Favourites
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
export default Fravouite;

import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../Store/cartSlice';
import { addFavourite } from '../Store/favouritesslice';

function Product({navigation, route}) {
  console.log(route.params);
  let data = route.params;
  let dispatch = useDispatch();
  const selector = useSelector(state => state.cart);
  console.log(selector, 'Redux');
  const totalPrice = selector
    .map(x => parseInt(x.price))
    .reduce((partialSum, a) => partialSum + a, 0);
  console.log(totalPrice);
  let [SimilarData, SetSimilarData] = useState('');
  let getData = () => {
    axios
      // .get('http://192.168.100.5:5000/api/similar/plants', {
      //   headers: {Authorization: `Bearer ${selector}`},
      // })
      .get(
        `http://192.168.100.5:5000/api/similar/plants?category=${data.category}`,
      )
      .then(response => {
        console.log(response.data.plants, 'response');
        SetSimilarData(response.data.plants);
      })
      .catch(err => {
        console.log('data not found', err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <ScrollView>
        <View>
          <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
            <Image
              source={{
                uri: 'https://www.plantifyhome.com/uploads/b/a2cb72cdbbaea69b27a68536ed0bccb81966cbb1a7d821779b646a0768b56040/logo_1663824610.png',
              }}
              style={{width: 80, height: 80, resizeMode: 'contain'}}
            />
          </View>
          <View>
            <View style={{paddingHorizontal: 20}}>
              <Text style={{color: 'black', fontSize: 15}}>
                {data.category}
              </Text>
              <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
                {data.name}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, paddingTop: 20}}>
                  <Text
                    style={{color: 'grey', fontSize: 17, fontWeight: '600'}}>
                    Price
                  </Text>
                  <Text style={{color: 'black', fontSize: 15, paddingTop: 5}}>
                    {data.price}
                  </Text>
                  {data.size ? (
                    <View>
                      <Text
                        style={{
                          color: 'grey',
                          fontSize: 17,
                          fontWeight: '600',
                          paddingTop: 30,
                        }}>
                        Size
                      </Text>
                      <Text
                        style={{color: 'black', fontSize: 15, paddingTop: 5}}>
                        {data.size}
                      </Text>
                    </View>
                  ) : data.weight ? (
                    <View>
                      <Text
                        style={{
                          color: 'grey',
                          fontSize: 17,
                          fontWeight: '600',
                          paddingTop: 30,
                        }}>
                        Weight
                      </Text>
                      <Text
                        style={{color: 'black', fontSize: 15, paddingTop: 5}}>
                        {data.weight}
                      </Text>
                    </View>
                  ) : null}

                  <View style={{paddingTop: 40,flexDirection:'row'}}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#0D986A',
                        borderRadius: 25,
                        padding: 10,
                      }}
                      onPress={() => dispatch(add(data))}>
                      <Icon name="shopping-cart" size={25} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#0D986A',
                        borderRadius: 25,
                        padding: 10,
                      }}
                      onPress={() => dispatch(addFavourite(data))}>
                      <Icon name="favorite" size={25} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </View>
                <Image
                  source={{uri: `${data.image}`}}
                  style={{
                    width: 500,
                    height: 200,
                    resizeMode: 'contain',
                    flex: 3,
                  }}
                />
              </View>
              <View style={{paddingTop: 25}}>
                {data.overview ? (
                  <View>
                    <Text
                      style={{color: 'black', fontWeight: '800', fontSize: 18}}>
                      Owerview
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        paddingTop: 20,
                        paddingHorizontal: 30,
                      }}>
                      <Text style={{flex: 1, color: 'black', fontSize: 16}}>
                        {data.overview.water}
                      </Text>
                      <Text style={{flex: 1, color: 'black', fontSize: 16}}>
                        {data.overview.light}
                      </Text>
                      <Text style={{flex: 1, color: 'black', fontSize: 16}}>
                        {data.overview.fertilizer}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingTop: 6,
                        paddingHorizontal: 30,
                      }}>
                      <Text style={{flex: 1, color: 'grey', fontSize: 16}}>
                        Water
                      </Text>
                      <Text style={{flex: 1, color: 'grey', fontSize: 16}}>
                        Light
                      </Text>
                      <Text style={{flex: 1, color: 'grey', fontSize: 16}}>
                        Fertilizers
                      </Text>
                    </View>
                  </View>
                ) : data.sub ? (
                  <View>
                    <Text
                      style={{color: 'black', fontWeight: '800', fontSize: 18}}>
                      Owerview
                    </Text>

                    <View
                      style={{
                        // flexDirection: 'row',
                        paddingTop: 20,
                        paddingHorizontal: 30,
                      }}>
                      <Text style={{flex: 1, color: 'black', fontSize: 14}}>
                        Germination: {data.sub.germination}
                      </Text>
                      <Text style={{flex: 1, color: 'black', fontSize: 14}}>
                        Maturity: {data.sub.maturity}
                      </Text>
                      <Text style={{flex: 1, color: 'black', fontSize: 14}}>
                        Sowingdept: {data.sub.Sowingdepts}
                      </Text>
                      <Text style={{flex: 1, color: 'black', fontSize: 14}}>
                        Idealconditions: {data.sub.idealconditions}
                      </Text>
                    </View>
                  </View>
                ) : null}

                <View style={{paddingTop: 10}}>
                  {data.plant_bio ? (
                    <View>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontWeight: '600',
                        }}>
                        PlantBio
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontWeight: '600',
                        }}>
                        {data.plant_bio}
                      </Text>
                    </View>
                  ) : data.seed_bio ? (
                    <View>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontWeight: '600',
                        }}>
                        SeedBio
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontWeight: '600',
                        }}>
                        {data.seed_bio}
                      </Text>
                    </View>
                  ) : data.description ? (
                    <View>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontWeight: '600',
                        }}>
                        Description
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontWeight: '600',
                        }}>
                        {data.description}
                      </Text>
                    </View>
                  ) : null}
                </View>
                <View style={{paddingTop: 10}}>
                  {data.plant_bio ? (
                    <View>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontWeight: '600',
                        }}>
                        Similar
                      </Text>
                      <ScrollView horizontal>
                        <View>
                          {SimilarData && SimilarData.length > 0 ? (
                            <View style={{flexDirection: 'row'}}>
                              {SimilarData.map((item, index) => (
                                <View style={{width: '15%'}} key={index}>
                                  <TouchableOpacity
                                    onPress={() =>
                                      navigation.navigate('Product', item)
                                    }>
                                    <View style={Styles.imagecontainer}>
                                      <Image
                                        source={{uri: `${item.image}`}}
                                        style={Styles.image}
                                      />
                                    </View>
                                    <Text
                                      style={{color: 'black', fontSize: 16}}>
                                      Name {item.name}
                                    </Text>
                                    <Text
                                      style={{color: 'black', fontSize: 16}}>
                                      Price {item.price}
                                    </Text>
                                  </TouchableOpacity>
                                </View>
                              ))}
                            </View>
                          ) : null}
                        </View>
                      </ScrollView>
                    </View>
                  ) : null}
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
      <View style={{backgroundColor: '#0D986A', padding: 15}}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="shopping-cart"
              size={20}
              color="#fff"
              style={{flex: 1}}
            />
            <Text
              style={{flex: 1, color: '#fff', fontSize: 16, fontWeight: '800'}}>
              View{selector.length}items
            </Text>
            <Text
              style={{flex: 1, color: '#fff', fontSize: 18, fontWeight: '800'}}>
              ${totalPrice}
            </Text>
          </View>
      </View>
        </TouchableOpacity>
    </>
  );
}
const Styles = StyleSheet.create({
  imagecontainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '50%',
    height: undefined,
    aspectRatio: 1,
  },
});
export default Product;

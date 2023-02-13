import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';
import CSTextField from '../Components/CSTextField';
import Plants from './Plants';
import PlantCare from './PlantCare';
import Seeds from './Seeds';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../CustomStyling/Bootstrap';
import {useSelector} from 'react-redux';
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#0D986A',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    style={{
      backgroundColor: '#fff',
    }}
    renderLabel={({route, focused}) => (
      <Text
        style={{
          color: focused ? '#0D986A' : 'black',
          fontSize: 14,
        }}>
        {route.title}
      </Text>
    )}
  />
);

export default function Home({navigation}) {
  const selector = useSelector(state => state.cart);
  console.log(selector, 'Redux');
  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <Plants navigation={navigation} />;
      case 'second':
        return <PlantCare navigation={navigation} />;
      case 'third':
        return <Seeds navigation={navigation} />;
      default:
        return null;
    }
  };
  const favouritesslice = useSelector(state => state.favourite);
  console.log(favouritesslice,'ffff')
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Plants'},
    {key: 'second', title: 'PlantCare'},
    {key: 'third', title: 'Seeds'},
  ]);
  const layout = useWindowDimensions();

  return (
    <>
      <View
        style={{
          height: '100%',
          // width: '100%',
          backgroundColor: 'white',
          padding: 15,
        }}>
        <View style={{paddingVertical: 10, flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <Image
              source={{
                uri: 'https://www.plantifyhome.com/uploads/b/a2cb72cdbbaea69b27a68536ed0bccb81966cbb1a7d821779b646a0768b56040/logo_1663824610.png',
              }}
              style={{width: 80, height: 80, resizeMode: 'contain'}}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('fravouitepage')}>
              <Text style={styles.badge}>{favouritesslice.length}</Text>
              <Icon name="favorite" size={35} color="#0D986A" />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Text style={styles.badge}>{selector.length}</Text>
              <Icon name="shopping-cart" size={35} color="#0D986A" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{backgroundColor: 'pink', borderRadius: 25}}>
          <View style={{padding: 20}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 23,
                    fontWeight: '800',
                    // flex: 1,
                    alignItems: 'center',
                  }}>
                  Theres a Plant for everyone
                </Text>
                <Text style={{color: 'black', fontSize: 20}}>
                  Get your first plant
                </Text>
              </View>

              <Image
                source={require('../Images/p.png')}
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: 'contain',
                  flex: 1,
                }}
              />
            </View>
          </View>
        </View>

        <View style={{paddingVertical: 11}}>
          <CSTextField
            placeholder="Search....."
            // onChangeText={e => setModel({...model, firstname: e})}
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
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          initialLayout={{width: layout.width}}
        />
      </View>
    </>
  );
}

// const Styles = StyleSheet.create({});

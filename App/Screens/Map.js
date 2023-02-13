import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';

function Map() {

  const [lang, setlang] = useState('-345678');
  const [long, setlong] = useState('2345678');
  // const [start,setstart] = useState({});
  Geolocation.getCurrentPosition(info => {
    console.log(info.coords);
    // setstart(info.coords.latitude,info.coords.longitude);
    setlang(info.coords.latitude);
    setlong(info.coords.longitude);
  });
  // console.log('12',start);
  // let destination = {
  //   langitude: 24.811158845254425,
  //   longitude: 67.05885736731295,
  // };
  return (
    <>
      <View>
        {/* <Icon name="rocket" size={30} color="#900" /> */}
        <View>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            userInterfaceStyle="dark"
            style={{
              height: 500,
              width: 400,
            }}
            region={{
              latitude: lang,
              longitude: long,
              latitudeDelta: 0.009,
              longitudeDelta: 0.0009,
            }}>
            <Marker
              coordinate={{latitude: lang, longitude: long}}
              title="test description"
              pinColor="red"
              description="test description"></Marker>
            {/* <Marker
              coordinate={{destination}}
              title="test description"
              pinColor="blue"
              description="test description"></Marker> */}
          </MapView>
        </View>
      </View>
    </>
  );
}

export default Map;
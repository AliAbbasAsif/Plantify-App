import React from 'react';
import {View} from 'react-native';
import AppRouter from './Config/AppRouter';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import store from './Store/store';

// import Icon from 'react-native-vector-icons/MaterialIcons';

function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppRouter />
      </PaperProvider>
    </Provider>
    // <View>{/* <Icon name="rocket" size={30} color="#900" /> */}
    //   
    // </View>
  );
}

export default App;

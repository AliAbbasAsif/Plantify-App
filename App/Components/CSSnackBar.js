import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {Snackbar } from 'react-native-paper';

const CSSnackbar = (props) => {
    const {label,visible} = props;
//   const [visible, setVisible] = React.useState(false);

//   const onToggleSnackBar = () => setVisible(!visible);

//   const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        >
       {label}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default CSSnackbar;
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
  SafeAreaView } from 'react-native';
import { Images, Profiles } from './App/Themes';

var { height, width } = Dimensions.get('window');

export default class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.nav}>
        <Image
          style= {{width: width * 0.2, height: 35}}
          resizeMode = 'contain'
          source = {{uri: 'https://icons-for-free.com/iconfiles/png/512/gear+preferences+settings+icon-1320166911584226160.png'}}
        />
        <Image
          style = {{width: width * 0.5, height: 30}}
          resizeMode = 'contain'
          source = {Images.logo}
        />
        <Image
          style= {{width: width * 0.2, height: 35}}
          resizeMode = 'contain'
          source = {{uri: 'https://i.dlpng.com/static/png/497750_preview.png'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: Platform.OS === 'ios' ? 44 : 56,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  }
});

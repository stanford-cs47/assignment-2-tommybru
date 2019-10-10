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
          style= {{width: '10%', height: '75%', tintColor: '#C5C5C5'}}
          resizeMode = 'contain'
          source = {{uri: 'https://icons-for-free.com/iconfiles/png/512/gear+preferences+settings+icon-1320166911584226160.png'}}
        />
        <Image
          style = {{width: '70%', height: '70%'}}
          resizeMode = 'contain'
          source = {Images.logo}
        />
        <Image
          style= {{width: '10%', height: '80%', tintColor: '#C5C5C5'}}
          resizeMode = 'contain'
          source = {{uri: 'https://i.dlpng.com/static/png/497750_preview.png'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 44 : 56,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  }
});

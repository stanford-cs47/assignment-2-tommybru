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

export default class Bottoms extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.bottoms}>
        <View style={styles.buttons1}>
          <Image
            style = {{width: '70%', height: '70%'}}
            resizeMode = 'contain'
            source = {Images.rewind}
          />
        </View>
        <View style={styles.buttons2}>
          <Image
            style= {{width: '60%', height: '60%'}}
            resizeMode = 'contain'
            source = {Images.nope}
          />
        </View>
        <View style={styles.buttons1}>
          <Image
            style= {{width: width * 0.1, height: 30}}
            resizeMode = 'contain'
            source = {Images.boost}
          />
        </View>
        <View style={styles.buttons2}>
          <Image
            style= {{width: width * 0.2, height: 35}}
            resizeMode = 'contain'
            source = {Images.like}
          />
        </View>
        <View style={styles.buttons1}>
          <Image
            style= {{width: width * 0.1, height: 30}}
            resizeMode = 'contain'
            source = {Images.superLike}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottoms: {
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons1: {
    width: width * 0.1,
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.05,
    backgroundColor: 'white',
  },
  buttons2: {
    width: width * 0.15,
    height: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.75,
    backgroundColor: 'white',
  }
});

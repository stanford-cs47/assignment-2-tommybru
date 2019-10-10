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
        <Image
          style= {{width: width * 0.1, height: 35}}
          resizeMode = 'contain'
          source = {Images.rewind}
        />
        <Image
          style= {{width: width * 0.2, height: 35}}
          resizeMode = 'contain'
          source = {Images.nope}
        />
        <Image
          style= {{width: width * 0.1, height: 35}}
          resizeMode = 'contain'
          source = {Images.boost}
        />
        <Image
          style= {{width: width * 0.2, height: 35}}
          resizeMode = 'contain'
          source = {Images.like}
        />
        <Image
          style= {{width: width * 0.1, height: 35}}
          resizeMode = 'contain'
          source = {Images.superLike}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottoms: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  }
});

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
import NavBar from './NavBar';
import Profile from './Profile';
import Bottoms from './Bottoms';

var { height, width } = Dimensions.get('window');

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavBar/>
        <Profile/>
        <Bottoms/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3efef',
  },
});

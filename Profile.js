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

export default class Profile extends React.Component {
  constructor() {
    super();

    var curPofile = Profiles.random();
    this.state = {
      profileImage: curPofile.image,
      name: curPofile.name,
      age: curPofile.age,
      occupation: curPofile.occupation
    };


  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <View>
            <Image source = {this.state.profileImage}/>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.profileText1}>
              {this.state.name},
              <Text
                style={styles.profileText2}> {this.state.age}
              </Text>
            </Text>
            <Text style={styles.profileText2}>
              {this.state.occupation}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f3efef',
  },
  profile: {
    borderColor: '#C5C5C5',
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileText1: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  profileText2: {
    fontWeight: 'normal',
    fontSize: 30,
  },
  textBox: {
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});

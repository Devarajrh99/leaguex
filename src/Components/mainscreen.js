import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import Games from '../Constants/constants';
import Header from './Header';

const MainScreen = ({ navigation }) => {

  const handleGamePress = (game) => {
    navigation.navigate('GameDetails', { game });
  };

  const renderJobItem = ({ item }) => {
    if (!item) {
      return null;
    }

    const gameImage = item.gameImage || '';

    return (
      <View style={[styles.card, styles.elevation]}>
        <TouchableOpacity onPress={() => handleGamePress(item)}>
          <ImageBackground source={gameImage} style={styles.gameImage} resizeMode="cover">
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text01}>+</Text>
            </TouchableOpacity>
            </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header />
          <Text style={styles.texthead01}>GREAT GAMES</Text>
          <Text style={styles.texthead02}>Coming Soon</Text>

          <FlatList scrollEnabled={false}
            data={Games}
            keyExtractor={(item) => item?.gameId?.toString()}
            renderItem={renderJobItem} />

        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: 'black',
    padding: 5,
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
  },
  elevation: {
    shadowColor: 'black',
    elevation: 3,
  },
  texthead01: {
    color: '#000000',
    fontSize: 32,
    alignSelf : 'center'
  },
  texthead02: {
    color: '#000000',
    fontSize: 25,
    alignSelf : 'center',
    color : '#808080'
  },
  gameImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  button : {
    backgroundColor : '#00BFFF',
    width : '10%',
    height : '8%',
    borderRadius : 100,
    alignItems : 'center',
    position : 'absolute',
    bottom : '5%',
    right : '5%',
  },
  text01 : {
    color : '#ffffff',
    fontSize : 30,
    alignItems : 'center'
  }
});

export default MainScreen;
import React from 'react';
import { StyleSheet, View, Dimensions, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RideDetailsComponent from '../components/RideDetailsComponent';
import EmergencyComponents from '../components/EmergencyComponents';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Props } from '../navigation/Navigation';

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const CurruntRideScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<Props>>()
  const currentPosition = {
    latitude: 23.022505,
    longitude: 72.571365,
  };

  const carIcon = require('../assets/icons/Car.png');

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsCompass={true}
      >
        <Marker coordinate={currentPosition}>
          <View style={styles.marker}>
            <Image source={carIcon} style={styles.carIcon} />
          </View>
        </Marker>
      </MapView>

      <View style={styles.headerCon}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="arrowleft" size={24} />

        </TouchableOpacity>
        <Text style={styles.headerText}>Current Ride</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <RideDetailsComponent />

      </ScrollView>
      <View style={styles.bottomContainer}>
        <EmergencyComponents />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    width: 50,
    height: 50,
  },
  carIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  headerCon: {
    position: 'absolute',
    top: windowHeight * 0.02,
    left: windowWidth * 0.05,
    right: windowWidth * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 2,
    padding: 10,
    borderRadius: 10,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    paddingTop: windowHeight * 0.15,
    paddingHorizontal: windowWidth * 0.05,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: windowWidth,
    // padding: 10,
    zIndex: 2,
  },
});

export default CurruntRideScreen;

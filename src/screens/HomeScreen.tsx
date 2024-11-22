import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Props } from '../navigation/Navigation';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<Props>>()

  return (
    <View style={styles.container}>
      <Button title='Back To Currunt Ride Screen' onPress={() => navigation.navigate("CurruntRide")} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});

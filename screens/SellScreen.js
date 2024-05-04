import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const SellScreen = ({ navigation }) => {
  const navigateToDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <Text>SellScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SellScreen;

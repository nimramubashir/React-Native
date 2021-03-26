import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';

const App = (props) => {
  return (
    <View style={styles.container}>
      <View style= { styles.logoContainer }>
        <Text style = { styles.logoText }>
          Newzzz
        </Text>
        <Text style = { styles.logoDescription }>
          Get your doze of daily news!
        </Text>
        
      </View>
    </View>
  );
}

export default App

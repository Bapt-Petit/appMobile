import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loading = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" style={styles.plasment1} />
    <ActivityIndicator size="small" style={styles.plasment2} color="#0000ff" />
    <ActivityIndicator size="large" style={styles.plasment3} color="#00ff00" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   marginTop:150,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  plasment1:{
    marginBottom: 100,
  },
  plasment2:{
    marginTop: 100,
    marginLeft: 100,
  },
  plasment3:{
    marginTop: 300,
    marginRight: 100,
  }
});

export default Loading;
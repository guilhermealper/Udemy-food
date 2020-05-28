import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearcBar from '../components/SearchBar';
import SearchBar from '../components/SearchBar';

const SearchScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <SearchBar/>
        <Text>SearchScreen</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  export default SearchScreen;
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
      <View style={styles.back}>
        <Feather 
          name="search"
          style={styles.iconStyle} />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="Search"
          value={term}          
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
          />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    back:{
      backgroundColor: "#f0eeee",
      borderRadius:5,
      height: 50,
      marginHorizontal: 15,
      flexDirection:"row",
      marginTop: 10,
    },
    inputStyle:{
      flex:1,
      fontSize: 18
    },
    iconStyle:{
      fontSize:35,
      alignSelf:"center",
      marginHorizontal: 10
    }

  });

  export default SearchBar;
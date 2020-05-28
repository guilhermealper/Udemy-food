import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');


  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log("SUBMITTED")}/>
      <Text>SearchScreen {term}</Text>
    </View>
  );
  }
  
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff'
    }
  });

  export default SearchScreen;
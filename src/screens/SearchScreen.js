import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  
  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}/>
      {errorMessage ? <Text>{errorMessage}</Text> : null}  
      <Text>Results size: {results.length}</Text>
      <ResultsList header="Cost Effective"/>
      <ResultsList header="Bit Pricer"/>
      <ResultsList header='Big Spender'/>
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
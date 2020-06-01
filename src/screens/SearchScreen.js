import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  
  const filterByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}/>
      {errorMessage ? <Text>{errorMessage}</Text> : null}  
      <Text>Results size: {results.length}</Text>
      <ScrollView>
      <ResultsList results={filterByPrice('$')} header="Cost Effective"/>
      <ResultsList results={filterByPrice('$$')} header="Bit Pricer"/>
      <ResultsList results={filterByPrice('$$$')} header='Big Spender'/>
      </ScrollView>
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
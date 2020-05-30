import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');


  const searchApi = async() => {
    try{
      const response = await yelp.get('/search', {
        params:{
          limit:50,
          term,
          location:'san jose'
        }
      });
      setResults(response.data.businesses);
    }catch (err){
      setErrorMessage('Something went wrong')
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}/>
      {errorMessage ? <Text>{errorMessage}</Text> : null}  
      <Text>Results size: {results.length}</Text>
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
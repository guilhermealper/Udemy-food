import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({header, results}) => {
    return(
        <View style={styles.container} > 
            <Text style = {styles.headerSty}>{header}</Text>
            <FlatList
                horizontal = {true}
                data={results}
                keyExtractor={(results) => results.id}
                renderItem={({item}) =>{
                    return <ResultsDetail result={item}/>
                }}
                showsHorizontalScrollIndicator={false}
                
            />
        </View>
    )
};

const styles = StyleSheet.create({
    headerSty:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 10,
    }
});
export default ResultsList;
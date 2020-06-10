import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from '@react-navigation/compat';

const ResultsList = ({ header, results, navigation }) => {
    if(!results.length){
        return null;
    } 

    return (
        <View style={styles.container}>
            <Text style={styles.headerSty}>{header}</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={(results) => results.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Results Show', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    headerSty: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10,
    }
});
export default withNavigation(ResultsList);
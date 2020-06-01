import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import ResultsList from './ResultsList';

const ResultsDetail = ({result}) => {
    return(
        <View style={styles.container}>
            <Image 
            style={styles.imgSty}
            source={{uri:result.image_url}}/>
            <Text style={styles.nameSty}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imgSty:{
        width: 200,
        height: 200,
        borderRadius: 4,
        marginBottom: 5
    },
    nameSty:{
        fontSize:14,
        fontWeight: 'bold'
    },
    container:{
        marginLeft: 15,
    }
});
export default ResultsDetail;
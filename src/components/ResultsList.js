import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ResultsList = ({header}) => {
    return(
        <View>

            <Text style = {styles.headerSty}>{header}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    headerSty:{
        fontSize: 18,
        fontWeight: 'bold'
    }
});
export default ResultsList;
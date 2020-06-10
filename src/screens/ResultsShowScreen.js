import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';


const ResultsShowScreen = ({ route, navigation }) => {
    const [resultRes, setResultRes] = useState(null);
    const { id } = route.params;

    console.log(resultRes);
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResultRes(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!resultRes) {
        return null;
    }

    return (
        <View>
            <Text>{resultRes.name}</Text>
            <FlatList
                data={resultRes.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image
                            style={styles.imgSty}
                            source={{ uri: item }} />
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    imgSty: {
        height: 200,
        width: 200
    }
});

export default ResultsShowScreen;
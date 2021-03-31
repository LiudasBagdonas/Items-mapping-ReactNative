import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button } from 'react-native';


function MovieBox({ title, image, description, id, lastChild }) {

    return (
        <View style={lastChild ? styles.lastChild : styles.imageBoxMargins}>
            <ImageBackground source={{ uri: image }} style={styles.image} />
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description} numberOfLines={2} ellipsizeMode='tail'>{description}</Text>
                <Button style={styles.button} color='#ff0000' title='Watch'></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 300,
        width: "100%",
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: '#ff0000'
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    },
    imageBoxMargins: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 20

    },
    lastChild: {
        margin: 20,
        paddingBottom: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        marginVertical: 15
    },
    description: {
        color: '#999',
        marginBottom: 15
    }
});
export default MovieBox;
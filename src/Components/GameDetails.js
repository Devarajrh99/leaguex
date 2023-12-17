import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from './Header';


const GameDetails = ({ route, navigation }) => {
    const { game } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header />
                <ImageBackground source={game.gameImage} style={styles.gameImage}>
                    <View style={styles.adjust}>
                        <TouchableOpacity onPress={() => navigation.navigate("main")}>
                            <View style={styles.adjust01} >
                                <Image source={require('../Images/left.png')} style={styles.image01} />
                                <Text style={styles.text}>Back</Text>
                            </View>
                        </TouchableOpacity>
                        <Image source={require('../Images/game.jpeg')} style={styles.image} />
                    </View>
                    <View style={styles.adjust02}>
                        <Text style={styles.text02}>18</Text>
                    <Text style={styles.text03}>Release day</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text01}>Pre - Order Now</Text>
                    </TouchableOpacity>
                </ImageBackground>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 120,
    },
    adjust: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '5%',
    },
    adjust01: {
        flexDirection: 'row',
    },
    adjust02 : {
        flexDirection : 'column',
        justifyContent : 'flex-end',
        position: 'relative',
        right : '10%',
        top : '60%',
    },
    text: {
        color: "#ffffff",
        fontSize: 25,
        margin: 10,
    },
    text01: {
        color: "#000000",
        fontSize: 25,
        margin: 10,
        alignSelf: 'center',
    },
    text02: {
        color: "#ffffff",
        fontSize: 50,
        alignSelf: 'flex-end',
        backgroundColor: '#FF4500',
        borderRadius: 5,
        paddingHorizontal : 3
    },
    text03 : {
        color: "#ffffff",
        fontSize: 10,
        alignSelf: 'flex-end',
        color: '#FF4500',
        borderRadius: 5,
        paddingHorizontal : 3
    },
    gameImage: {
        position : 'absolute',
        left : 0,
        right : 0,
        bottom : 10,
        width: '100%',
        height: '100%',
    },
    image: {
        borderRadius: 200,
        width: '15%',
        height: '100%',
        position : 'absolute',
        right : '10%'
    },
    image01 : {
        borderRadius: 40,
        width: '20%',
        height: 30,
        margin : 10,
    },
    button: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#00BFFF',
        marginHorizontal: '8%',
        marginVertical : '3%',
        borderRadius: 10,
    },
});

export default GameDetails;
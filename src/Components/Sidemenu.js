import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal, TouchableWithoutFeedback, Animated } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const animatedValue = new Animated.Value(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: isMenuOpen ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [isMenuOpen]);

    const opacity = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
    });

    const menuTranslateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-300, 0],
    });

    return (
        <View style={styles.container}>
                <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
                    <Image source={require('../Images/3_bars.png')} style={styles.image01} />
                </TouchableOpacity>

            <Modal visible={isMenuOpen} transparent animationType="fade">
                <TouchableWithoutFeedback onPress={toggleMenu}>
                    <Animated.View style={[styles.overlay, { opacity }]} />
                </TouchableWithoutFeedback>

                <Animated.View style={[styles.sideMenu, { transform: [{ translateX: menuTranslateX }] }]}>
                    <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
                        <Text style={styles.text}>Close</Text>
                    </TouchableOpacity>

                    <Text style={styles.text}>Home</Text>
                    <Text style={styles.text}>Game List</Text>
                    <Text style={styles.text}>Free Games</Text>
                    <Text style={styles.text}>Premium Games Games</Text>
                    <Text style={styles.text}>Logout</Text>

                </Animated.View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: '5%'
    },
    menuButton: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
    },
    overlay: {
        flex: 1,
        backgroundColor: '#000000',
    },
    sideMenu: {
        position: 'absolute',
        left: 0,
        width: '50%',
        height: '100%',
        backgroundColor: '#ffffff',
        padding: 16,
    },
    closeButton: {
        marginBottom: 10,
        padding: 8,
    },
    text: {
        color: '#000000',
        marginBottom: '5%',
        marginLeft: '5%',
    },
    image01 : {
        width : '25%',
        height : 30,
    }
});

export default ProfileScreen;

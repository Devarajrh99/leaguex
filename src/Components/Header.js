import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

import SideMenu from './Sidemenu';

const windowWidth = Dimensions.get('window').width;

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.adjust}>
                <SideMenu />
                <Image style={styles.logo} source={require('../Images/logo.jpeg')} />
                <Image style={styles.image} source={require('../Images/cart.jpg')} />
                <Image style={styles.image} source={require('../Images/search.png')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: windowWidth,
        flexDirection: 'row',
        justifyContent : 'space-between'
    },
    adjust: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        margin: '5%',
        width: '10%',
        height: '40%',
    },
    image: {
        marginHorizontal: '5%',
        marginVertical: '5%',
        width: '10%',
        height: '40%',
    },
    searchIcon: {
        marginRight: 10,
    },
})


export default Header;
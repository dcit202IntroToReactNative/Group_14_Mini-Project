import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

const DoctorCard = ({name, position, profilePicture}) => {
    return (
        <View style={styles.container}>
            <Image source={profilePicture} style={styles.profilePicture} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.position}>{position}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 10,
        padding: 16,
    },
    
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    
    textContainer: {
        flex: 1,
    },
    
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    
    position: {
        fontSize: 16,
        color: '#555',
    },
});

export default DoctorCard;

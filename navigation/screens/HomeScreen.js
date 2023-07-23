import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/healthbg.png')}
                style={styles.backgroundImage}
                resizeMode='cover'
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.hospitalName}>Welcome to ~Clinics</Text>
                    <Text style={styles.achievementTitle}>Achievements</Text>
                    <Text style={styles.achievementText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla eu elit et diam aliquet consectetur.
                    </Text>
                    <Text style={styles.goalTitle}>Goals</Text>
                    <Text style={styles.goalText}>
                        Suspendisse potenti. Proin lacinia metus sed sapien
                        gravida, vel facilisis purus facilisis.
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Add a semi-transparent black overlay on the background image
        padding: 20,
        borderRadius: 10,
        maxWidth: 350,
    },
    hospitalName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 10,
        textAlign: 'center',
    },
    achievementTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 8,
    },
    achievementText: {
        fontSize: 16,
        color: '#FFF',
        marginBottom: 16,
    },
    goalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 8,
    },
    goalText: {
        fontSize: 16,
        color: '#FFF',
    },
});

export default HomeScreen;

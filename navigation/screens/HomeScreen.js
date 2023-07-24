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
                    <Text style={styles.hospitalName}>
                        Welcome to{' '}
                        <Text style={styles.headColor}>~Clinics</Text>{' '}
                            
                    </Text>
                    <Text style={styles.achievementTitle}>Achievements</Text>
                    <Text style={styles.achievementText}>
                        **"Top-Rated Hospital: Exceptional Patient Care Award Winner"**
                        Recognized for its unparalleled commitment to patient well-being, cutting-edge medical advancements,
                        and outstanding satisfaction rates. Congratulations to [Hospital Name] 
                        for setting a new standard of excellence in healthcare.
                            
                    </Text>
                    <Text style={styles.goalTitle}>Goals</Text>
                    <Text style={styles.goalText}>
                        **"To Reduce Hospital-Acquired Infections by 30% and Enhance Patient Safety through Continuous Quality Improvement."**.
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    headColor: {
        color: '#039dfc',
    },
    container: {
        flex: 1,
    },
    
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    contentContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
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

import React from 'react';
import {View, Text, StyleSheet, Button, Linking} from 'react-native';

const ContactScreen = () => {
    const phoneNumber = '+233434567890'; // Replace with the actual phone number
    const emailAddress = 'dynamicinnovators@example.com'; // Replace with the actual email address

    const handleCall = () => {
        Linking.openURL(`tel:${phoneNumber}`);
    };

    const handleEmail = () => {
        Linking.openURL(`mailto:${emailAddress}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.messageText}>
                Thank you for choosing Clinics!
            </Text>
            <Text style={styles.messageText1}>
                In case of emergencies or urgent medical assistance, we strongly
                advise you to call our emergency helpline immediately for
                immediate support.
            </Text>
            <Button title='Call Hospital' onPress={handleCall} />
            <Button title='Send Email' onPress={handleEmail} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF', // Replace with your background image or color
        padding: 16,
    },
    messageText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    messageText1: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
        padding: 10,
    },
});

export default ContactScreen;

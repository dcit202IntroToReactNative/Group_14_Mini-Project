import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose any other icon set supported by react-native-vector-icons

const ServicesScreen = () => {
    const services = [
        {name: 'Emergency Care', icon: 'medkit'},
        {name: 'Inpatient Care', icon: 'hospital-o'},
        {name: 'Outpatient Care', icon: 'ambulance'},
        {name: 'Surgery', icon: 'scalpel'},
        {name: 'Diagnostic Services', icon: 'stethoscope'},
        {name: 'Maternity and Neonatal Care', icon: 'heartbeat'},
        {name: 'Rehabilitation Services', icon: 'wheelchair'},
        {name: 'Mental Health Services', icon: 'user-md'},
        {name: 'Specialized Medical Services', icon: 'plus-square'},
        {name: 'Pharmacy Services', icon: 'medkit'},
        {name: 'Palliative Care and Hospice Services', icon: 'bed'},
    ];

    return (
        <ScrollView style={styles.container}>
            {services.map((service, index) => (
                <View key={index} style={styles.serviceContainer}>
                    <Icon
                        name={service.icon}
                        size={24}
                        color='#FFF'
                        style={styles.icon}
                    />
                    <Text style={styles.serviceText}>{service.name}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FFF', // Replace with your desired background color
    },
    serviceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'blue', // Blue background color for each service
        borderRadius: 10, // Border radius for the container
        marginBottom: 10,
        padding: 16,
    },
    icon: {
        marginRight: 10,
    },
    serviceText: {
        color: '#FFF', // White text color
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ServicesScreen;

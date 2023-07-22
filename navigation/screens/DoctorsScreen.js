import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import DoctorCard from './DoctorCard';

const doctorsData = [
    {
        id: '1',
        name: 'Dr. Daniel Kissiedu',
        position: 'Cardiologist',
        profilePicture: require('../../assets/doctor1.png'),
    },
    {
        id: '2',
        name: 'Dr. Felix Ashong',
        position: 'Pediatrician',
        profilePicture: require('../../assets/doctor2.jpeg'),
    },
    {
        id: '3',
        name: 'Dr. Samuel Agyei',
        position: 'Dermatologist',
        profilePicture: require('../../assets/doctor3.jpeg'),
    },
];

const DoctorsScreen = () => {
    const renderDoctorCard = ({item}) => (
        <DoctorCard
            name={item.name}
            position={item.position}
            profilePicture={item.profilePicture}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={doctorsData}
                renderItem={renderDoctorCard}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F5F5F5',
    },
});

export default DoctorsScreen;

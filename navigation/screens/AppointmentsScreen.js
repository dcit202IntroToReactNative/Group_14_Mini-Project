import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-modern-datepicker';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    Button,
    Alert,
    ToastAndroid,
    Platform,
} from 'react-native';

const AppointmentsScreen = () => {
    const [doctorName, setDoctorName] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [patientName, setPatientName] = useState('');

    const submitAppointment = () => {
        if (
            patientName.trim() === '' ||
            doctorName.trim() === '' ||
            email.trim() === '' ||
            phoneNumber.trim() === ''
        ) {
            if (Platform.OS === 'android') {
                ToastAndroid.show(
                    'All fields are required!',
                    ToastAndroid.SHORT,
                );
            } else {
                Alert.alert('Appointment Submission', 'Failed ⚠', [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
            }
        } else {
            if (Platform.OS === 'android') {
                ToastAndroid.show(
                    'Appointment submitted successfully',
                    ToastAndroid.SHORT,
                );
            } else {
                Alert.alert('Appointment Submission', 'Success 👍', [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
            }
            clearForm();
        }
    };

    const clearForm = () => {
        setDoctorName('');
        setEmail('');
        setPhoneNumber('');
        setPatientName('');
    };

    return (
        <View style={{padding: 12, backgroundColor: '#FFF'}}>
            <ScrollView>
                <Text
                    style={{fontSize: 15, fontWeight: 'bold', marginBottom: 8}}
                >
                    Your name
                </Text>
                <TextInput
                    value={patientName}
                    onChangeText={setPatientName}
                    placeholder='Your name'
                    style={{
                        borderWidth: 1,
                        borderColor: '#039dfc',
                        minHeight: 48,
                        marginBottom: 8,
                        borderRadius: 10,
                        paddingHorizontal: 12,
                    }}
                />
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginBottom: 8,
                    }}
                >
                    Select doctor
                </Text>
                <Picker
                    selectedValue={doctorName}
                    onValueChange={(itemValue) => setDoctorName(itemValue)}
                    style={{
                        borderWidth: 1,
                        borderColor: '#039dfc',
                        marginBottom: 8,
                        borderRadius: 10,
                        padding: 8,
                    }}
                >
                    <Picker.Item
                        label='Dr. Daniel Kissiedu'
                        value='Dr. Daniel Kissiedu'
                    />
                    <Picker.Item
                        label='Dr. Felix Ashong'
                        value='Dr. Felix Ashong'
                    />
                    <Picker.Item
                        label='Dr. Bright Quaye'
                        value='Dr. Bright Quaye'
                    />
                    <Picker.Item
                        label='Dr. Samuel Osei Boakye Junior'
                        value='Dr. Samuel Osei Boakye Junior'
                    />
                    <Picker.Item
                        label='Dr. Randy Adu-Ameyaw'
                        value='Dr. Randy Adu-Ameyaw'
                    />
                    <Picker.Item
                        label='Dr. Martin Amoah'
                        value='Dr. Martin Amoah'
                    />
                </Picker>
                <Text
                    style={{fontSize: 15, fontWeight: 'bold', marginBottom: 8}}
                >
                    Date & Time
                </Text>
                <DatePicker
                    onSelectedChange={(date) => setSelectedDate(date)}
                />
                <Text
                    style={{fontSize: 15, fontWeight: 'bold', marginBottom: 8}}
                >
                    Email
                </Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Email'
                    keyboardType='email-address'
                    style={{
                        borderWidth: 1,
                        borderColor: '#039dfc',
                        minHeight: 50,
                        marginBottom: 8,
                        borderRadius: 10,
                        paddingHorizontal: 12,
                    }}
                />
                <Text
                    style={{fontSize: 15, fontWeight: 'bold', marginBottom: 8}}
                >
                    Phone Number
                </Text>
                <TextInput
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholder='Phone'
                    keyboardType='numeric'
                    style={{
                        borderWidth: 1,
                        borderColor: '#039dfc',
                        minHeight: 50,
                        marginBottom: 28,
                        borderRadius: 10,
                        paddingHorizontal: 12,
                    }}
                />
                <Button title='Submit' onPress={submitAppointment} />
            </ScrollView>
        </View>
    );
};

export default AppointmentsScreen;

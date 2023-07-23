import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-modern-datepicker';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    Button,
    ToastAndroid,
} from 'react-native';

const AppointmentsScreen = () => {
    const [doctorName, setDoctorName] = useState('');
    const [time, setTime] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [patientName, setPatientName] = useState('');

    const submitAppointment = () => {
        if (
            patientName.trim() === '' ||
            doctorName.trim() === '' ||
            time.trim() === '' ||
            email.trim() === '' ||
            phoneNumber.trim() === ''
        ) {
            ToastAndroid.show('All fields are required!', ToastAndroid.SHORT);
        } else {
            ToastAndroid.show(
                'Appointment submitted successfully',
                ToastAndroid.SHORT,
            );
            clearForm();
        }
    };

    const clearForm = () => {
        setDoctorName('');
        setTime('');
        setDate('');
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
                        borderColor: '#5D4037',
                        minHeight: 48,
                        marginBottom: 8,
                        paddingHorizontal: 12,
                    }}
                />
                <Text
                    style={{fontSize: 15, fontWeight: 'bold', marginBottom: 8}}
                >
                    Select doctor
                </Text>
                <Picker
                    selectedValue={doctorName}
                    onValueChange={(itemValue) => setDoctorName(itemValue)}
                    style={{
                        borderWidth: 1,
                        borderColor: '#5D4037',
                        marginBottom: 8,
                    }}
                >
                    <Picker.Item label='Doctor 1' value='Doctor 1' />
                    <Picker.Item label='Doctor 2' value='Doctor 2' />
                    <Picker.Item label='Doctor 3' value='Doctor 3' />
                    {/* Add more items based on your requirements */}
                </Picker>
                <Text
                    style={{fontSize: 15, fontWeight: 'bold', marginBottom: 8}}
                >
                    Time
                </Text>
                <Text
                    style={{fontSize: 15, fontWeight: 'bold', marginBottom: 8}}
                >
                    Date
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
                        borderColor: '#808080',
                        marginBottom: 8,
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
                        borderColor: '#5D4037',
                        minHeight: 50,
                        marginBottom: 28,
                        paddingHorizontal: 12,
                    }}
                />
                <Button title='Submit' onPress={submitAppointment} />
            </ScrollView>
        </View>
    );
};

export default AppointmentsScreen;

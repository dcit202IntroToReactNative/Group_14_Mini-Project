import React from 'react';
import {View, Text, Button} from 'react-native';
import {Appbar, Drawer, DrawerItem, Divider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const DrawerContent = ({navigation}) => (
    <View style={{flex: 1}}>
        <Drawer.Section>
            <Drawer.Item
                label='Home'
                onPress={() => navigation.navigate('Home')}
            />
            <Drawer.Item
                label='Services'
                onPress={() => navigation.navigate('Services')}
            />
            <Drawer.Item
                label='Appointments'
                onPress={() => navigation.navigate('Appointments')}
            />
            <Drawer.Item
                label='Doctors'
                onPress={() => navigation.navigate('Doctors')}
            />
            <Drawer.Item
                label='Contact'
                onPress={() => navigation.navigate('Contact')}
            />
        </Drawer.Section>
    </View>
);

const DrawerNavigator = createDrawerNavigator();

const MainActivity = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator.Navigator
                drawerContent={(props) => <DrawerContent {...props} />}
            >
                <DrawerNavigator.Screen name='Home' component={HomeScreen} />
                <DrawerNavigator.Screen
                    name='Services'
                    component={ServicesScreen}
                />
                <DrawerNavigator.Screen
                    name='Appointments'
                    component={AppointmentsScreen}
                />
                <DrawerNavigator.Screen
                    name='Doctors'
                    component={DoctorsScreen}
                />
                <DrawerNavigator.Screen
                    name='Contact'
                    component={ContactScreen}
                />
            </DrawerNavigator.Navigator>
        </NavigationContainer>
    );
};

export default MainActivity;

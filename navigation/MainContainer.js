import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import DoctorsScreen from './screens/DoctorsScreen';
import ServicesScreen from './screens/ServicesScreen';
import ContactScreen from './screens/ContactScreen';
import AppointmentsScreen from './screens/AppointmentsScreen';

//Screen names
const homeName = 'Home';
const doctorsName = 'Doctors';
const servicesName = 'Services';
const contactName = 'Contact';
const appointmentsName = 'Appointments';

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === doctorsName) {
                            iconName = focused ? 'people' : 'people-outline';
                        } else if (rn === servicesName) {
                            iconName = focused ? 'medkit' : 'medkit-outline';
                        } else if (rn === contactName) {
                            iconName = focused ? 'call' : 'call-outline';
                        } else if (rn === appointmentsName) {
                            iconName = focused
                                ? 'calendar'
                                : 'calendar-outline';
                        }

                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: {paddingBottom: 10, fontSize: 10},
                    style: {padding: 10, height: 70},
                }}
            >
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={doctorsName} component={DoctorsScreen} />
                <Tab.Screen name={servicesName} component={ServicesScreen} />
                <Tab.Screen name={contactName} component={ContactScreen} />
                <Tab.Screen
                    name={appointmentsName}
                    component={AppointmentsScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;

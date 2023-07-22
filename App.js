import {StyleSheet, Text, View} from 'react-native';
import MainActivity from './components/MainActivity';

export default function App() {
    return <MainActivity />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

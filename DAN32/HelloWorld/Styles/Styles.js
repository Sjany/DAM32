import { ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dfe6e9', // color corregido
    },
    title: {
        color: '#2d3436',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center', // corregido
        textTransform: 'uppercase', // corregido
        letterSpacing: 2,
        textShadowColor: '#0000', // color corregido
        textShadowOffset: { width: 2, height: 2 }, // corregido
        paddingBottom: 15, // corregido
    },
    box: {
        backgroundColor: 'red',
        width: '100%',
        height: 100, // corregido
        justifyContent: 'flex-end',
    },
    boxImage: {
        backgroundColor: 'blue',
        width: '100%',
        height: '100%', // corregido
        justifyContent: 'flex-start',
    }
});

export default styles;

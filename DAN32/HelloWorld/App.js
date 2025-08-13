 import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './Styles/Styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/ssa.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>
        Mi nombre es Sjany Tienda Avila, tengo 21 años, soy del estado de Hidalgo, actualmente estudio en las mañanas y trabajo en las tardes,
        me gusta jugar LOL y flamear personas.
      </Text>
    </View>
  );
}

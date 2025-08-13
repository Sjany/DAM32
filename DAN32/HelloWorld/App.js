import { StyleSheet, Text, View, Image } from 'react-native';

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
        me gusta jugar LOL y flamear personas
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f4f7', // color de fondo más suave
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100, // hace la imagen circular si es cuadrada
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333', // texto oscuro sobre fondo claro
    textAlign: 'center', // centrado
    lineHeight: 28, // espacio entre líneas
    backgroundColor: 'rgba(255,255,255,0.6)', // fondo semi-transparente
    padding: 10,
    borderRadius: 10,
  },
});


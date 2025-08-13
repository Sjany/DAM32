import { ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f4f7', 
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100, 
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333', 
    textAlign: 'center', 
    lineHeight: 28, 
    backgroundColor: 'rgba(255,255,255,0.6)',
    padding: 10,
    borderRadius: 10,
  },
});

export default styles;

import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76BCAA',
  },
  wrapper: {
    flex: 1,
  },
  form: {
    alignItems: 'center',
    marginTop: 50,
  },
  inputName: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 200,
    padding: 5,
    marginBottom: '5%',
    borderWidth: 1,
    borderColor: '#565755',
  },
  button: {
    width: Dimensions.get('window').width * 0.88,
    height: Dimensions.get('window').height * 0.07,
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  text_label: {
    color: '#fefefe',
    fontSize: 15,
  },
});

export default styles;

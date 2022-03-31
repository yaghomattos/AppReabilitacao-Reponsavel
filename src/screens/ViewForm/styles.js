import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#76BCAA',
  },
  container: {
    flex: 1,
    paddingBottom: 50,
    justifyContent: 'center',
  },
  form: {
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 15,
  },
  label: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  button: {
    width: Dimensions.get('window').width * 0.88,
    height: Dimensions.get('window').height * 0.07,
    marginTop: 20,
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

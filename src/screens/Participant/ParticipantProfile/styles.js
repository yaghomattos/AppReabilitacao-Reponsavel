import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#3E9ACD',
  },
  background: {
    flex: 1,
    paddingTop: 15,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
  },
  form: {
    width: '100%',
    maxWidth: 350,
    paddingTop: 5,
    fontSize: 18,
  },
  input: {
    width: 350,
    fontSize: 18,
  },
  button: {
    width: 180,
    height: 60,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: '9.5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#384955',
  },
  text_label: {
    color: '#fff',
    fontSize: 15,
  },
});

export default styles;

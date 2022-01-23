import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: 100,
    justifyContent: 'center',
    backgroundColor: '#3E9ACD',
  },
  form: {
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 45,
    paddingHorizontal: 20,
    marginBottom: '10%',
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#384955',
  },
  text_label: {
    color: '#fff',
    fontSize: 15,
  },
});

export default styles;

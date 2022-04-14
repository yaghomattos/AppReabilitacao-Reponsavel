import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76BCAA',
  },
  form: {
    flex: 1,
    paddingTop: Dimensions.get('window').height * 0.017,
    alignItems: 'center',
  },
  inputBox: {
    width: Dimensions.get('window').width * 0.88,
    marginBottom: 8,
    borderBottomWidth: 1,
  },
  label: {
    paddingTop: 5,
    fontSize: 12,
  },
  input: {
    width: Dimensions.get('window').width * 0.88,
    fontSize: 14,
  },
  pickerBox: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.88,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  picker_label: {
    fontSize: 12,
  },
  picker: {
    width: 150,
    marginRight: Dimensions.get('window').width * 0.3,
  },
  button: {
    width: Dimensions.get('window').width * 0.88,
    height: Dimensions.get('window').height * 0.07,
    marginTop: 15,
    marginBottom: Dimensions.get('window').height * 0.059,
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

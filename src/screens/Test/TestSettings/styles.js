import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#76BCAA',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle_true: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle_false: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#546F7A',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  form2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input_true: {
    width: 30,
    height: 30,
    borderBottomWidth: 1,
    fontSize: 12,
    textAlign: 'center',
    borderColor: '#000',
    color: '#000',
  },
  input_false: {
    width: 30,
    height: 30,
    borderBottomWidth: 1,
    fontSize: 12,
    textAlign: 'center',
    borderColor: '#546F7A',
    color: '#546F7A',
  },
  inputReps_true: {
    width: 40,
    height: 30,
    borderBottomWidth: 1,
    fontSize: 12,
    textAlign: 'center',
    borderColor: '#000',
    color: '#000',
  },
  inputReps_false: {
    width: 40,
    height: 30,
    borderBottomWidth: 1,
    fontSize: 12,
    textAlign: 'center',
    borderColor: '#546F7A',
    color: '#546F7A',
  },
  wrapperCheckbox: {
    marginTop: Dimensions.get('window').height * 0.047,
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  text_checkbox: {
    color: '#000',
    fontSize: 12,
    marginTop: 8,
  },
  pickerBox: {
    marginTop: 8,
  },
  picker: {
    width: Dimensions.get('screen').width * 0.8,
  },
  button: {
    width: Dimensions.get('window').width * 0.51,
    height: Dimensions.get('window').height * 0.07,
    marginTop: Dimensions.get('window').height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  button_off: {
    width: Dimensions.get('window').width * 0.51,
    height: Dimensions.get('window').height * 0.07,
    marginTop: Dimensions.get('window').height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#546F7A',
  },
  button_save: {
    width: Dimensions.get('window').width * 0.88,
    height: Dimensions.get('window').height * 0.07,
    marginTop: Dimensions.get('window').height * 0.023,
    marginBottom: Dimensions.get('window').height * 0.023,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  text_label: {
    color: '#fefefe',
    fontSize: 14,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  container: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
  form: {
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    width: 30,
    height: 30,
    marginBottom: 10,
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: '#F4F4F4',
    color: '#FFFFFF',
    fontSize: 18,
  },
  inputReps: {
    width: 90,
    height: 30,
    marginBottom: 10,
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: '#F4F4F4',
    color: '#FFFFFF',
    fontSize: 18,
  },
  inputText: {
    color: '#fff',
    fontSize: 28,
    paddingBottom: 5,
  },
  wrapperCheckbox: {
    marginTop: 0,
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  text_checkbox: {
    color: '#fff',
    fontSize: 15,
    marginTop: 8,
  },
  button: {
    width: 100,
    height: 50,
    marginTop: 30,
    borderRadius: 10,
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

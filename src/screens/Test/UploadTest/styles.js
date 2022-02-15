import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  scrollView: {
    height: '100%',
  },
  background: {
    height: 650,
    paddingTop: 30,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: 250,
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
  },
  dualInput: {
    width: 250,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  miniInput: {
    width: 110,
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
  },
  preview: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 60,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#384955',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 60,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#384955',
  },
  text_button: {
    color: '#fff',
    fontSize: 15,
  },
  upload: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 60,
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: '#386f3f',
  },
});

export default styles;

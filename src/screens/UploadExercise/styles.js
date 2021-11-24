import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  header: {
    alignItems: 'center',
    height: 130,
  },
  backView: {
    width: '100%',
    paddingStart: 20,
    margin: 30,
  },
  back: {
    color: '#fff',
  },
  header_text: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: '10%',
    paddingTop: '4%',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
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
    height: 52,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
  },
  preview: {
    flexDirection: 'row',
    width: '80%',
    marginTop: 10,
    justifyContent: 'space-evenly',
  },
  image: {
    backgroundColor: '#b7b',
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 60,
    marginTop: '4%',
    borderRadius: 10,
    backgroundColor: '#384955',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#384955',
  },
  text_button: {
    color: '#fff',
    fontSize: 15,
  },
  send: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 60,
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: '#386f3f',
  },
});

export default styles;

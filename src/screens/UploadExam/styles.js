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
    width: '100%',
    marginTop: 10,
    justifyContent: 'space-evenly',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 60,
    marginTop: '10%',
    borderRadius: 10,
    backgroundColor: '#384955',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 60,
    borderRadius: 10,
    marginBottom: 30,
    backgroundColor: '#384955',
  },
  text_label: {
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

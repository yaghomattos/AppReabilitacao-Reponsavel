import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  header: {
    justifyContent: 'space-evenly',
    height: '20%',
  },
  back: {
    paddingLeft: 20,
    color: '#fff',
  },
  header_text: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: '10%',
    fontWeight: 'bold',
  },
  background: {
    height: '100%',
    paddingTop: 15,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
  },
  form: {
    width: '100%',
    maxWidth: 350,
    paddingTop: 10,
    fontSize: 18,
  },
  input: {
    width: 350,
    marginBottom: 10,
    fontSize: 18,
  },
});

export default styles;

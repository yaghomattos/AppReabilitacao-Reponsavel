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
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
  },
  buttons: {
    width: '100%',
    height: 200,
    marginTop: '30%',
  },
});

export default styles;

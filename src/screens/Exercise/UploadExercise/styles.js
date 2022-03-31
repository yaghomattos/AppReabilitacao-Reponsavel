import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76BCAA',
  },
  background: {
    flex: 1,
    marginTop: Dimensions.get('window').height * 0.047,
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#000',
  },
  input: {
    width: Dimensions.get('window').width * 0.88,
    height: Dimensions.get('window').height * 0.073,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#565755',
  },
  preview: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 168,
    height: 100,
    marginTop: 20,
    backgroundColor: '#fefefe',
  },
  text_select: {
    color: '#000',
    marginLeft: 5,
  },
  upload: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.88,
    height: Dimensions.get('window').height * 0.07,
    marginTop: 30,
    marginBottom: Dimensions.get('window').height * 0.18,
    backgroundColor: '#000',
  },
  text_button: {
    color: '#fefefe',
    fontSize: 14,
    paddingLeft: 10,
  },
});

export default styles;

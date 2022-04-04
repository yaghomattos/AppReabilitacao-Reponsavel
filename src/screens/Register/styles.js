import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76BCAA',
  },
  scrollview: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 125,
    height: 125,
  },
  name: {
    marginTop: Dimensions.get('window').height * 0.03,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  form: {
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.05,
  },
  input: {
    width: Dimensions.get('window').width * 0.88,
    height: Dimensions.get('window').height * 0.08,
    paddingHorizontal: 20,
    marginBottom: Dimensions.get('window').height * 0.0165,
    backgroundColor: '#76BCAA',
    borderColor: '#565755',
    borderWidth: 1,
  },
  button: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.68,
    height: Dimensions.get('window').height * 0.08,
    marginTop: Dimensions.get('window').height * 0.063,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  text_label: {
    color: '#fefefe',
    fontSize: 15,
    paddingLeft: 10,
  },
  footer_text: {
    paddingTop: Dimensions.get('window').height * 0.0142,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 15,
    color: '#000',
    marginBottom: Dimensions.get('window').height * 0.06,
  },
  footer_link: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default styles;

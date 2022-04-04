import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  form: {
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.109,
  },
  input: {
    width: Dimensions.get('window').width * 0.88,
    height: Dimensions.get('window').height * 0.08,
    paddingHorizontal: 20,
    marginBottom: Dimensions.get('window').height * 0.0165,
    borderWidth: 1,
    backgroundColor: '#76BCAA',
    borderColor: '#565755',
  },
  button: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.68,
    height: Dimensions.get('window').height * 0.08,
    marginTop: Dimensions.get('window').height * 0.092,
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
  },
  footer_link: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  footer_recovery: {
    paddingTop: 0.015,
    marginBottom: Dimensions.get('window').height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    color: '#000',
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#76BCAA',
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
    marginTop: 25,
    color: '#222222',
    fontSize: 20,
    fontWeight: 'bold',
  },
  form: {
    width: 280,
    alignItems: 'center',
    marginTop: '15%',
  },
  input: {
    width: 342,
    height: 65,
    paddingHorizontal: 20,
    marginBottom: 14,
    backgroundColor: '#76BCAA',
    borderColor: '#565755',
    borderWidth: 1,
  },
  button: {
    flexDirection: 'row',
    width: 180,
    height: 60,
    marginTop: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222',
  },
  text_label: {
    color: '#fefefe',
    fontSize: 15,
    paddingLeft: 10,
  },
  footer_text: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 15,
    color: '#222222',
  },
  footer_link: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
  },
});

export default styles;

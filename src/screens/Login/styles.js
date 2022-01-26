import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    backgroundColor: '#0065A4',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0065A4',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 30,
    backgroundColor: '#384955',
  },
  form: {
    width: 280,
    alignItems: 'center',
    marginTop: '15%',
  },
  input: {
    width: 250,
    height: 52,
    paddingHorizontal: 20,
    marginBottom: 30,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#384955',
  },
  text_label: {
    color: '#fff',
    fontSize: 15,
  },
  footer_text: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 15,
    color: '#C4C4C4',
  },
  footer_link: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer_recovery: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
    color: '#fff',
  },
});

export default styles;

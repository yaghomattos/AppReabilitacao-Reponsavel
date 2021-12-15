import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  header: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backView: {
    flexDirection: 'row',
    width: '100%',
    margin: 30,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  icon: {
    color: '#fff',
  },
  header_text: {
    color: '#fff',
    fontSize: 18,
    paddingTop: '10%',
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
    paddingTop: 5,
    fontSize: 18,
  },
  input: {
    width: 350,
    marginBottom: 10,
    fontSize: 18,
  },
  button: {
    width: 180,
    height: 60,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#384955',
  },
  text_label: {
    color: '#fff',
    fontSize: 15,
  },
});

export default styles;

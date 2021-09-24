import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3E9ACD',
    alignItems: 'center',
    height: "20%",
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
  container: {
    flex: 1,
    paddingBottom: 50,
    justifyContent: 'center',
    backgroundColor: '#3E9ACD',
  },
  form: {
    alignItems: 'center',
  },
  input: {
    width: "80%",
    height: 45,
    paddingHorizontal: 20,
    marginBottom: "5%",
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
  },
  button: {
    width: 180,
    height: 60,
    borderRadius: 10,
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
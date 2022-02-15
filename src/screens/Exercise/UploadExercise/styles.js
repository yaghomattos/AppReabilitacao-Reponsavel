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
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 60,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#384955',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 60,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#384955',
  },
  text_button: {
    color: '#fff',
    fontSize: 15,
  },
  upload: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 60,
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: '#386f3f',
  },
});

export default styles;

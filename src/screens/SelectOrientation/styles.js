import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#3E9ACD',
  },
  header: {
    alignItems: 'center',
    height: '20%',
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
  viewList: {
    flex: 1,
    paddingTop: 20,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  item: {
    width: 350,
    height: 140,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6f6f6f',
  },
  itemTitle: {
    fontSize: 18,
    color: '#fff',
  },
  extra: {
    height: '25%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  picker: {
    marginVertical: 20,
    width: 260,
    borderWidth: 1,
    color: '#6f6f6f',
  },
  warning: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DE726A',
  },
  button: {
    width: 100,
    height: 50,
    marginTop: 10,
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

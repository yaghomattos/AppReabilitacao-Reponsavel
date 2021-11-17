import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  header: {
    justifyContent: 'center',
    height: '25%',
  },
  header_text: {
    color: '#f0f0f0',
    fontSize: 18,
    paddingLeft: '10%',
  },
  header_text_bold: {
    color: '#fff',
    fontWeight: 'bold',
  },
  background: {
    height: '100%',
    backgroundColor: '#f5f5f5',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
});

export default styles;

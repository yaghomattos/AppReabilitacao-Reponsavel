import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
});

export default styles;

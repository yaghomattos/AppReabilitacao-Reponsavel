import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backView: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    margin: 30,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  icon: {
    color: '#000',
  },
  header_text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;

import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.41,
    height: Dimensions.get('window').width * 0.33,
    borderRadius: 5,
    backgroundColor: '#fefefe',
  },
  button_label: {
    color: '#000',
    fontSize: 12,
    fontWeight: '700',
  },
});

export default styles;

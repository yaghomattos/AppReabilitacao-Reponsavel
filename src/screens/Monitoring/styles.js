import { Dimensions, StyleSheet } from 'react-native';

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
  highlight: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  date: {
    color: '#000',
    fontSize: 18,
  },
  divider: {
    height: 0.8,
  },
  today: {
    backgroundColor: '#fff',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingTop: '4%',
    paddingBottom: '4%',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapper: {
    backgroundColor: '#fff',
    height: '100%',
  },
  formBox: {
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  subTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  formContainer: {
    height: 180,
    paddingTop: 5,
    marginBottom: 20,
    borderRadius: 4,
    backgroundColor: '#C4C4C4',
  },
  description: {
    fontSize: 16,
    paddingLeft: '2%',
    paddingRight: '2%',
    color: '#000',
  },
  date: {
    justifyContent: 'center',
  },
  textDate: {
    fontSize: 13,
    color: '#000',
  },
});

export default styles;

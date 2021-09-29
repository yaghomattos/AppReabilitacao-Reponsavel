import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '8%',
    paddingBottom: '8%',
  },
  back: {
    paddingLeft: '6%',
    color: '#fff',
  },
  date: {
    marginRight: '36%',
    color: '#fff',
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
  exerciseBox: {
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingBottom: '30%',
    paddingHorizontal: 20,
  },
  subTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  exerciseContainer: {
    height: 70,
    paddingTop: 5,
    marginBottom: 20,
    borderRadius: 4,
    backgroundColor: '#C4C4C4',
  },
  description: {
    fontSize: 16,
    paddingLeft: '5%',
    paddingRight: '4%',
    color: '#000',
  },
  feedback: {
    height: 30,
    paddingTop: '1%',
    paddingLeft: '5%',
    marginBottom: 30,
    borderRadius: 4,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#C4C4C4',
  },
});

export default styles;

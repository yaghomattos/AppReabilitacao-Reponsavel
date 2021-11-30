import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    paddingBottom: '2%',
    backgroundColor: '#3E9ACD',
  },
  headerNavigator: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  icon: {
    color: '#fff',
  },
  avatarContainer: {
    paddingBottom: '2%',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#fff',
  },
  person: {
    paddingLeft: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    paddingTop: 4,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  viewCircle: {
    width: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 14,
  },
  circleMic: {
    width: 42,
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  circleFile: {
    width: 42,
    height: 42,
    borderRadius: 10,
    marginRight: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  sendingContainer: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

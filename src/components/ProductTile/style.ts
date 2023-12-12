import {StyleSheet, Platform} from 'react-native';
const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: Platform.OS === 'ios' ? 10 : 10,
    shadowColor: 'gray',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 5,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    flex: 0.3,
    borderRadius: 50,
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  flex2: {
    flex: 0.7,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
    alignSelf: 'center',
  },
  description: {
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
    color: '#000',
    alignSelf: 'center',
  },
});
export default styles;

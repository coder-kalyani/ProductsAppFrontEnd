import { hp } from './../../utils/windowSize';
import {StyleSheet, Platform} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EEC9',
  },
  card: {
    padding: 20,
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
    marginTop: hp(10),
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    borderRadius: 60,
    width: 120,
    height: 120,
    alignItems: 'center',
  },
  flex1: {
    flex: 0.4,
  },
  flex2: {
    flex: 0.6,
  },
  title: {
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    color: '#000',
    alignSelf: 'center',
  },
  titles: {
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
    color: '#000',
    alignSelf: 'center',
  },
  description: {
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
    color: '#000',
    alignSelf: 'center',
  },
  detailsCard: {
    padding: 10,
  },
});
export default styles;

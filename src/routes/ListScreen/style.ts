import {StyleSheet} from 'react-native';
import {hp} from '../../utils/windowSize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EEC9',
  },
  title: {
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
    color: '#000',
  },
  noTitle: {
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
    color: 'red',
    alignSelf: 'center',
  },
  loaderStyle: {
    zIndex: 1,
    marginVertical: hp(50),
  },
  input:{
    padding: 10,
    paddingLeft: 20,
    borderRadius: 10,
    borderWidth: 0.3,
    marginHorizontal: 20,
    marginTop: 30,
  }
});
export default styles;

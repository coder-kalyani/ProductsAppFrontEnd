import {hp} from './../../utils/windowSize';
import {StyleSheet, Platform} from 'react-native';
export const styles = StyleSheet.create({
  row: {
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? hp(7) : hp(2),
  },
  svg: {
    marginLeft: 16,
    marginTop: 10,
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#000',
    marginLeft: 20,
    marginTop: 8,
    alignSelf: 'center',
  },
  backArrow: {
    paddingVertical: 10,
  },
});

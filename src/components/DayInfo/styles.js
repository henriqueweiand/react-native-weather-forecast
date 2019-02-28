import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  city: {
    color: colors.black,
    fontSize: 22,
  },

  container: {
    alignItems: 'center',
    flexDirection: 'column',
  },

  temperature: {
    color: colors.black,
    fontSize: 62,
  },

  time: {
    color: colors.black,
    fontSize: 16,
  },
});

export default styles;

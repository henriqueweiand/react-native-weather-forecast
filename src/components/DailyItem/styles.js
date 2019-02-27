import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },

  time: {
    fontSize: 15,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  temperature: {
    fontSize: 15,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;

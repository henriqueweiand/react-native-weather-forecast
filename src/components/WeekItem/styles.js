import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  boxTemperature: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },

  day: {
    color: colors.black,
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
  },

  temperature: {
    color: colors.black,
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 15,
    textAlign: 'right',
  },
});

export default styles;

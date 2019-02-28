import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: colors.lighter,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.basePadding,
    paddingBottom: 5,
  },

  temperature: {
    color: colors.black,
    fontSize: 26,
    fontWeight: 'bold',
  },

  title: {
    color: colors.black,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;

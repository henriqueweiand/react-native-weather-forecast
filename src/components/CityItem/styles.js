import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    flexDirection: 'row',
    alignItems: 'center',
  },

  info: {
    flex: 1,
  },

  title: {
    fontSize: 15,
    color: colors.white,
    fontWeight: 'bold',
  },

  country: {
    fontSize: 14,
    color: colors.dark,
    marginTop: 3,
  },

  loading: {
    marginRight: 2,
  },
});

export default styles;

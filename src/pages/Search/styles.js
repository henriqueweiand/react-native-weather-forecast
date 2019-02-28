import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  form: {
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    paddingBottom: metrics.basePadding,
  },

  searchInput: {
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    height: 42,
    color: colors.white,
  },

  loading: {
    marginTop: metrics.basePadding,
  },

  labelHelp: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    marginBottom: metrics.baseMargin,
    marginHorizontal: metrics.basePadding,
    padding: 5,
  },

  textLabel: {
    flex: 1,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: metrics.basePadding,
  },

  listItem: {
    flexDirection: 'row',
  },
});

export default styles;

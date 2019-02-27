import { createStackNavigator, createAppContainer } from 'react-navigation';
import { colors } from '~/styles';

import Main from '~/pages/Main';
import Search from '~/pages/Search';

const Routes = createStackNavigator(
  {
    Search: { screen: Search },
    Main: { screen: Main },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.secundary,
        borderBottomWidth: 0,
      },
      headerTintColor: colors.white,
      headerBackTitle: null,
    },
  },
);

export default createAppContainer(Routes);

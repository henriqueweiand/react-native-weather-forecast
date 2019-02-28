import { createStackNavigator, createAppContainer } from 'react-navigation';
import { colors } from '~/styles';

import Search from '~/pages/Search';
import Main from '~/pages/Main';

const Routes = createStackNavigator(
  {
    Main: { screen: Main },
    Search: { screen: Search },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTintColor: colors.black,
      headerBackTitle: null,
    },
  },
);

export default createAppContainer(Routes);

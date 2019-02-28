import { createStackNavigator, createAppContainer } from 'react-navigation';
import { colors } from '~/styles';

import Search from '~/pages/Search';
import Main from '~/pages/Main';

const Routes = createStackNavigator(
  {
    Search: { screen: Search },
    Main: { screen: Main },
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

import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';

import { Text, TouchableOpacity } from 'react-native';
import { icons } from '~/config/utils';
import styles from './styles';

const DayInfo = ({ data, navigation }) => (
  <TouchableOpacity
    onPress={() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Search' })],
      });
      navigation.dispatch(resetAction);
    }}
    style={styles.container}
  >
    <Text style={styles.city}>{data.city.name}</Text>
    <Text style={styles.time}>{icons[parseInt(data.weather[0].icon.substr(0, 2), 10)].label}</Text>
    <Text style={styles.temperature}>{`${parseInt(data.main.temp, 10)}°`}</Text>
  </TouchableOpacity>
);

export default DayInfo;

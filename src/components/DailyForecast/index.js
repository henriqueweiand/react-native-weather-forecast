import React from 'react';

import { View, Text, FlatList } from 'react-native';
import DailyItem from '~/components/DailyItem';
// import styles from './styles';

const DayInfo = ({ data, ...props }) => (
  <FlatList
    {...props}
    horizontal
    data={data}
    keyExtractor={dataItem => String(dataItem.dt_txt)}
    renderItem={({ item }) => <DailyItem data={item} />}
  />
);

export default DayInfo;

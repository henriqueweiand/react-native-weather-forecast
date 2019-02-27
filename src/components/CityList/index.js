import React from 'react';
// import PropTypes from 'prop-types';

import { FlatList } from 'react-native';
import CityItem from '~/components/CityItem';

const CityList = ({ data, ...props }) => (
  <FlatList
    {...props}
    data={data}
    keyExtractor={dataItem => String(dataItem.id)}
    renderItem={({ item }) => (
      <CityItem onPress={() => props.navigation.navigate('Main', { city: item })} data={item} />
    )}
  />
);

export default CityList;

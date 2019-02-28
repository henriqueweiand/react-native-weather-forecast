import React from 'react';
import PropTypes from 'prop-types';

import { FlatList } from 'react-native';
import CityItem from '~/components/CityItem';

const CityList = ({ data, navigation }) => (
  <FlatList
    data={data}
    keyExtractor={dataItem => String(dataItem.id)}
    renderItem={({ item }) => (
      <CityItem onPress={() => navigation.navigate('Main', { city: item })} data={item} />
    )}
  />
);

CityList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default CityList;

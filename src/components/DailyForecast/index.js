import React from 'react';
import PropTypes from 'prop-types';

import { FlatList } from 'react-native';
import DailyItem from '~/components/DailyItem';

const DayInfo = ({ data }) => (
  <FlatList
    horizontal
    data={data}
    keyExtractor={dataItem => String(dataItem.dt_txt)}
    renderItem={({ item }) => <DailyItem data={item} />}
  />
);

DayInfo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dt_txt: PropTypes.string,
    }),
  ).isRequired,
};

export default DayInfo;

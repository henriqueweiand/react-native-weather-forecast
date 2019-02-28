import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Flag from 'react-native-flags';

import { TouchableOpacity, Temperature, Title } from './styles';

const CityItem = ({ data, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Flag code={data.sys.country.toUpperCase()} size={32} />
      <Title>{data.name}</Title>
    </View>
    <Temperature>{`${parseInt(data.main.temp, 10)}°`}</Temperature>
  </TouchableOpacity>
);

CityItem.propTypes = {
  data: PropTypes.shape({
    sys: PropTypes.shape({
      country: PropTypes.string,
    }),
    main: PropTypes.shape({
      temp: PropTypes.number,
    }),
    name: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CityItem;

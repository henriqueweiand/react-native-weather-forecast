import React from 'react';
import PropTypes from 'prop-types';
import Flag from 'react-native-flags';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const CityItem = ({ data, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View>
      <Flag code={data.sys.country.toUpperCase()} size={32} />
      <Text style={styles.title}>{data.name}</Text>
    </View>
    <Text style={styles.temperature}>{`${parseInt(data.main.temp, 10)}°`}</Text>
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

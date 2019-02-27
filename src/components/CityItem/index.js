import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const CityItem = ({ data, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.info}>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.country}>{data.sys.country}</Text>
    </View>
  </TouchableOpacity>
);

export default CityItem;

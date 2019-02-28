import React from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

const ExtraInfo = ({ data }) => (
  <View style={styles.container}>
    <View style={styles.listItem}>
      <Text style={styles.label}>Humindade</Text>
      <Text style={styles.value}>{data.main.humidity}</Text>
    </View>

    <View style={styles.listItem}>
      <Text style={styles.label}>Vento</Text>
      <Text style={styles.value}>{data.wind.speed}</Text>
    </View>

    <View style={styles.listItem}>
      <Text style={styles.label}>Pressão</Text>
      <Text style={styles.value}>{data.main.pressure}</Text>
    </View>
  </View>
);

export default ExtraInfo;

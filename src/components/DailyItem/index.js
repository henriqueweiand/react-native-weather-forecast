import React from 'react';

import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';

import { icons } from '~/config/utils';
import { Container, Time, Temperature } from './styles';

const DayItem = ({ data }) => (
  <Container>
    <Time>{moment(data.dt_txt).format('HH')}</Time>
    <Feather
      name={icons[parseInt(data.weather[0].icon.substr(0, 2), 10)].icon}
      size={30}
      color="#000"
    />
    <Temperature>{`${parseInt(data.main.temp_max, 10)}°`}</Temperature>
  </Container>
);

DayItem.propTypes = {
  data: PropTypes.shape({
    main: PropTypes.shape({
      temp_max: PropTypes.number,
    }),
    dt_txt: PropTypes.string,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default DayItem;

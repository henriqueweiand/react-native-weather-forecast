import React, { Component } from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as weekForecastActions } from '~/store/ducks/weekForecast';
import WeekForecast from '~/components/WeekForecast';
import DailyForecast from '~/components/DailyForecast';
import DayInfo from '~/components/DayInfo';

import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView, HeaderRight } from './styles';

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Previsão',
    headerRight: (
      <HeaderRight onPress={() => navigation.navigate('Search')}>
        <Feather name="refresh-ccw" size={18} color="#000" />
      </HeaderRight>
    ),
  });

  static propTypes = {
    weekForecastRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({}),
      }),
    }).isRequired,
    weekForecast: PropTypes.shape({
      current: PropTypes.shape({}),
      data: PropTypes.shape({}),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const { weekForecastRequest } = this.props;
    // const { city } = this.props.navigation.state.params;
    // weekForecastRequest(city.id);
    weekForecastRequest(3468879);
  }

  render() {
    const { navigation, weekForecast: { data, loading, current } } = this.props;
    // const { city } = this.props.navigation.state.params;
    const city = { name: 'Brusque' };

    return (
      <SafeAreaView loading={loading}>
        <StatusBar barStyle="dark-content" />

        {loading && city ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <View>
            <DayInfo navigation={navigation} data={{ ...current, city }} />
            <DailyForecast data={current.weekForecast} />
            <WeekForecast data={Object.values(data)} />
          </View>
        ) }
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  weekForecast: state.weekForecast,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...weekForecastActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

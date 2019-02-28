import React, { Component, Fragment } from 'react';
import { ActivityIndicator, SafeAreaView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as weekForecastActions } from '~/store/ducks/weekForecast';
import WeekForecast from '~/components/WeekForecast';
import DailyForecast from '~/components/DailyForecast';
import DayInfo from '~/components/DayInfo';
import ExtraInfo from '~/components/ExtraInfo';

import styles from './styles';

class Main extends Component {
  static navigationOptions = {
    header: null,
  };

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
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />

        {loading && city ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <Fragment>
            <DayInfo navigation={navigation} data={{ ...current, city }} />
            <DailyForecast data={current.weekForecast} />
            <WeekForecast data={Object.values(data)} />
            {/* <ExtraInfo data={current} /> */}
          </Fragment>
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

import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActivityIndicator, SafeAreaView, StatusBar } from 'react-native';

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

  componentDidMount() {
    const { city } = this.props.navigation.state.params;
    this.props.weekForecastRequest(city.id);
  }

  render() {
    const { data, loading, current } = this.props.weekForecast;
    const { city } = this.props.navigation.state.params;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />

        {loading && city ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <Fragment>
            <DayInfo navigation={this.props.navigation} data={{ ...current, city }} />
            <DailyForecast data={current.weekForecast} />
            <WeekForecast data={Object.values(data)} />
            <ExtraInfo data={current} />
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

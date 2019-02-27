import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SearchActions } from '~/store/ducks/search';

import { View, TextInput, ActivityIndicator } from 'react-native';
import CityList from '~/components/CityList';

import styles from './styles';

class Search extends Component {
  static navigationOptions = {
    title: 'Buscar',
  };

  constructor(props) {
    super(props);
    const { searchRequest } = props;

    this.searchRequest = debounce(searchRequest, 500);
  }

  state = {
    searchInput: 'Osório',
  };

  search = (searchInput) => {
    this.setState({ searchInput });

    this.searchRequest(searchInput);
  }

  render() {
    const { navigation, search: { data, loading } } = this.props;
    const { searchInput } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.searchInput}
            autoCorrect={false}
            autoFocus
            autoCapitalize="none"
            placeholder="Busque pela cidade"
            placeholderTextColor="#666"
            underlineColorAndroid="transparent"
            value={searchInput}
            onChangeText={this.search}
          />
        </View>

        { loading
          && <ActivityIndicator size="small" color="#999" style={styles.loading} /> }

        <CityList data={data} navigation={navigation} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => bindActionCreators(SearchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);

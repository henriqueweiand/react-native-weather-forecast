import React, { Component } from 'react';
import {
  View, Text, TextInput, ActivityIndicator, SafeAreaView, StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

import { debounce } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import { Creators as SearchActions } from '~/store/ducks/search';
import CityList from '~/components/CityList';

import styles from './styles';

class Search extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    searchRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({}).isRequired,
    search: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({})),
      loading: PropTypes.bool,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    const { searchRequest } = props;

    this.searchRequest = debounce(searchRequest, 500);
  }

  state = {
    searchInput: '',
  };

  search = (searchInput) => {
    this.setState({ searchInput });
    this.searchRequest(searchInput);
  }

  render() {
    const { navigation, search: { data, loading } } = this.props;
    const { searchInput } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
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

        <View style={styles.labelHelp}>
          <EvilIcons name="location" size={30} color="#000" />
          <Text style={styles.textLabel}>
            Informe o nome completo da cidade que deseja encontrar.
          </Text>
        </View>

        { loading
          && <ActivityIndicator size="small" color="#999" style={styles.loading} /> }

        <CityList data={data} navigation={navigation} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => bindActionCreators(SearchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);

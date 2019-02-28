import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { debounce } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import { Creators as SearchActions } from '~/store/ducks/search';
import CityList from '~/components/CityList';

import {
  Form, SafeAreaView, SearchInput, TextLabel, LabelHelp, Loading,
} from './styles';

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
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <Form>
          <SearchInput
            autoCorrect={false}
            autoFocus
            autoCapitalize="none"
            placeholder="Busque pela cidade"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
            value={searchInput}
            onChangeText={this.search}
          />
        </Form>

        <LabelHelp>
          <EvilIcons name="location" size={30} color="#000" />
          <TextLabel>Informe o nome completo da cidade que deseja encontrar.</TextLabel>
        </LabelHelp>

        { loading
          && <Loading size="small" color="#999" /> }

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

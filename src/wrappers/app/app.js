import React, { Fragment } from 'react';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Router from './router';

import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

import GlobalStyle from '../../styles/global';

const App = (props) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <Router {...props} />
    </Fragment>
  </ThemeProvider>
);

const mapStateToProps = state => ({
	...state
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
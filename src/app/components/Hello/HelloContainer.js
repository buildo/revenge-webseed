import React from 'react';
import Hello from './Hello';
import t from 'tcomb';
import containerFactory from 'react-container';
import allQueries from 'queries';
import allCommands from 'commands';
import loading from 'react-avenger/loading';
import LoadingSpinner from 'buildo-react-components/src/loading-spinner';
import 'buildo-react-components/src/loading-spinner/style.scss';

const container = containerFactory({ allQueries, allCommands });

const loadingDecorator = loading({
  wrapper: <div style={{ textAlign: 'center', position: 'relative', minHeight: 100 }} />,
  loader: <LoadingSpinner size='medium' />
});

const HelloContainer = container(Hello, {
  connect: { formal: t.maybe(t.Boolean) },
  queries: ['user'],
  commands: ['doRefreshUser'],
  loadingDecorator,
  mapProps: ({ transition, formal = false, user, doRefreshUser }) => ({
    toggle: () => {
      transition({ formal: !formal });
    },
    formal,
    user,
    onRefreshClick: () => doRefreshUser(),
    onLogoutClick: () => {
      transition({ view: 'login' });
    }
  })
});

export default HelloContainer;

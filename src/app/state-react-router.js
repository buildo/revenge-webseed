import routes from './routes';
import _isViewActive from 'state-react-router/isViewActive';
import routerDiff from 'state-react-router/routerDiff';

const routerStateKey = 'view';

// insert here any parameter that you don't want to serialize in the URL
const ignoreParams = [ routerStateKey ];

export const {
  makeOnBrowserChange,
  makeSyncToBrowser
} = routerDiff({
  routerStateKey,
  ignoreParams
});

export const isViewActive = _isViewActive(routes);

export { cacheQueryValues } from 'buildo-react-container';
export { ConnectContextTypes } from 'buildo-state/lib/connect';
import declareQueries from './declareQueries';
export { declareQueries };
export { QueriesContextTypes } from './declareQueries';
import declareCommands from './declareCommands';
export { declareCommands };
export { CommandsContextTypes } from './declareCommands';

import makeSwitchView from '../components/SwitchView';
import { View } from 'model-ts';
export const SwitchView = makeSwitchView<View>('view');
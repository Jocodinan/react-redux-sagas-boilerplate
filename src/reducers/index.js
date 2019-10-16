
import { combineReducers } from 'redux';
import { generalStates } from './general';
import { externalData } from './external';

export default (data) => {
  const external = externalData(data);
  return combineReducers({
    generalStates,
    external
  });
}
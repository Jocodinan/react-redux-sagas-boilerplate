import { fromJS } from 'immutable';

export function externalData(data) {
  return function externalDataReducer(state = fromJS(data), action) {
    switch (action.type) {
      default:
        return state;
    }
  }
}
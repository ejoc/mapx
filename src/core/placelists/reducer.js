import { List, Record } from 'immutable';

import {
  SIGN_OUT_SUCCESS
} from 'src/core/auth';

import {
  CREATE_PLACELIST_SUCCESS,
  DELETE_PLACELIST_SUCCESS,
  FILTER_PLACELISTS,
  LOAD_PLACELISTS_SUCCESS,
  UPDATE_PLACELIST_SUCCESS
} from './action-types';


export const PlaceListsState = new Record({
  deleted: null,
  filter: '',
  list: new List(),
  previous: null
});


export function placeListsReducer(state = new PlaceListsState(), {payload, type}) {
  switch (type) {
    case CREATE_PLACELIST_SUCCESS:
      return state.merge({
        deleted: null,
        previous: null,
        list: state.deleted && state.deleted.key === payload.key ?
              state.previous :
              state.list.unshift(payload)
      });

    case DELETE_PLACELIST_SUCCESS:
      return state.merge({
        deleted: payload,
        previous: state.list,
        list: state.list.filter(task => task.key !== payload.key)
      });

    case FILTER_PLACELISTS:
      return state.set('filter', payload.filterType || '');

    case LOAD_PLACELISTS_SUCCESS:
      return state.set('list', new List(payload.reverse()));

    case UPDATE_PLACELIST_SUCCESS:
      return state.merge({
        deleted: null,
        previous: null,
        list: state.list.map(task => {
          return task.key === payload.key ? payload : task;
        })
      });

    case SIGN_OUT_SUCCESS:
      return new PlaceListsState();

    default:
      return state;
  }
}

import { getDeletedPlaceList } from './selectors';
import { placeList } from './place-list';
import {
  CREATE_PLACELIST_ERROR,
  CREATE_PLACELIST_SUCCESS,
  DELETE_PLACELIST_ERROR,
  DELETE_PLACELIST_SUCCESS,
  FILTER_PLACELISTS,
  LOAD_PLACELISTS_SUCCESS,
  UNDELETE_PLACELIST_ERROR,
  UNLOAD_PLACELISTS_SUCCESS,
  UPDATE_PLACELIST_ERROR,
  UPDATE_PLACELIST_SUCCESS
} from './action-types';


export function createPlaceList(title) {
  return dispatch => {
    placeList.push({completed: false, title})
      .catch(error => dispatch(createPlaceListError(error)));
  };
}

export function createPlaceListError(error) {
  return {
    type: CREATE_PLACELIST_ERROR,
    payload: error
  };
}

export function createPlaceListSuccess(placeList) {
  return {
    type: CREATE_PLACELIST_SUCCESS,
    payload: placeList
  };
}

export function deletePlaceList(placeList) {
  return dispatch => {
    placeList.remove(placeList.key)
      .catch(error => dispatch(deletePlaceListError(error)));
  };
}

export function deletePlaceListError(error) {
  return {
    type: DELETE_PLACELIST_ERROR,
    payload: error
  };
}

export function deletePlaceListSuccess(placeList) {
  return {
    type: DELETE_PLACELIST_SUCCESS,
    payload: placeList
  };
}

export function undeletePlaceList() {
  return (dispatch, getState) => {
    const placeList = getDeletedPlaceList(getState());
    if (placeList) {
      placeList.set(placeList.key, {completed: placeList.completed, title: placeList.title})
        .catch(error => dispatch(undeletePlaceListError(error)));
    }
  };
}

export function undeletePlaceListError(error) {
  return {
    type: UNDELETE_PLACELIST_ERROR,
    payload: error
  };
}

export function updatePlaceListError(error) {
  return {
    type: UPDATE_PLACELIST_ERROR,
    payload: error
  };
}

export function updatePlaceList(placeList, changes) {
  return dispatch => {
    placeList.update(placeList.key, changes)
      .catch(error => dispatch(updatePlaceListError(error)));
  };
}

export function updatePlaceListSuccess(placeList) {
  return {
    type: UPDATE_PLACELIST_SUCCESS,
    payload: placeList
  };
}

export function loadPlaceListsSuccess(placeLists) {
  return {
    type: LOAD_PLACELISTS_SUCCESS,
    payload: placeLists
  };
}

export function filterPlaceLists(filterType) {
  return {
    type: FILTER_PLACELISTS,
    payload: {filterType}
  };
}

export function loadPlaceLists() {
  return (dispatch, getState) => {
    const { auth } = getState();
    placeList.path = `place-lists/${auth.id}`;
    placeList.subscribe(dispatch);
  };
}

export function unloadPlaceLists() {
  placeList.unsubscribe();
  return {
    type: UNLOAD_PLACELISTS_SUCCESS
  };
}

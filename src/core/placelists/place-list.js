import { FirebaseList } from 'src/core/firebase';
import * as placeListActions from './actions';
import { List } from './list';


export const placeList = new FirebaseList({
  onAdd: placeListActions.createPlaceListSuccess,
  onChange: placeListActions.updatePlaceListSuccess,
  onLoad: placeListActions.loadPlaceListsSuccess,
  onRemove: placeListActions.deletePlaceListSuccess
}, List);

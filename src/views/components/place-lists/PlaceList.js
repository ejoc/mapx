import React, { PropTypes } from 'react';
import { List } from 'immutable';


function PlaceList({placeLists}) {
  let placeListItems = placeLists.map((list, index) => {
    return (
      <li key={index}>
        {list.title}
      </li>
    );
  });

  return (
    <div className="task-list">
      {placeListItems}
    </div>
  );
}

PlaceList.propTypes = {
  // deletePlaceList: PropTypes.func.isRequired,
  placeLists: PropTypes.instanceOf(List).isRequired
  // updatePlaceList: PropTypes.func.isRequired
};

export default PlaceList;

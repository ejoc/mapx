import { List } from 'immutable';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getNotification, notificationActions } from 'src/core/notification';
import { placeListsActions } from 'src/core/placelists';
import Notification from '../../components/notification';
import PlaceListForm from '../../components/place-lists/Form';
import PlaceList from '../../components/place-lists/PlaceList';


export class PlaceLists extends Component {
  static propTypes = {
    createPlaceList: PropTypes.func.isRequired,
    deletePlaceList: PropTypes.func.isRequired,
    dismissNotification: PropTypes.func.isRequired,
    filterPlaceLists: PropTypes.func.isRequired,
    loadPlaceLists: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    notification: PropTypes.object.isRequired,
    placeLists: PropTypes.instanceOf(List).isRequired,
    undeletePlaceList: PropTypes.func.isRequired,
    unloadPlaceLists: PropTypes.func.isRequired,
    updatePlaceList: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.loadPlaceLists();
  }

  componentWillUnmount() {
    this.props.unloadPlaceLists();
  }

  renderNotification() {
    const { notification } = this.props;
    return (
      <Notification
        action={this.props.undeletePlaceList}
        actionLabel={notification.actionLabel}
        dismiss={this.props.dismissNotification}
        display={notification.display}
        message={notification.message}
      />
    );
  }

  render() {
    return (
      <div className="g-row">
        <div className="g-col">
          <PlaceListForm createPlaceList={this.props.createPlaceList} />
        </div>

        <div className="g-col">
          <PlaceList
            deletePlaceList={this.props.deletePlaceList}
            placeLists={this.props.placeLists}
            updatePlaceList={this.props.updatePlaceList}
          />
        </div>

        {this.props.notification.display ? this.renderNotification() : null}
      </div>
    );
  }
}


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = createSelector(
  getNotification,
  (notification, placeLists) => ({
    notification,
    placeLists
  })
);

const mapDispatchToProps = Object.assign(
  {},
  placeListsActions,
  notificationActions
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceLists);

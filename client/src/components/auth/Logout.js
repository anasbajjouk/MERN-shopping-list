import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authAction';
import { NavLink } from 'reactstrap';

export class Logout extends Component {
  render() {
    return (
      <Fragment>
        <NavLink onClick={this.props.logout} href="#">
          Logout
        </NavLink>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  null,
  { logout },
)(Logout);

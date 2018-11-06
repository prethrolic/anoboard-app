import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../scss/sidemenu.scss';

library.add(faHome);
library.add(faBell);
library.add(faEnvelope);

const createMenu = (menulist) => {
  const iconStyle = {
    display: 'inline-block',
    padding: '0 0 0 15px',
    margin: '0',
    textAlign: 'center',
  }

  const labelStyle = {
    display: 'inline-block',
  }
  var menu = [];
  for(let i=0; i< menulist.length; i++){
    menu.push(
      <Link to={menulist[i].url} style={{textDecoration: "none"}}>
        <Row className="sidebar-button">
          <Col xs={2} style={iconStyle}><FontAwesomeIcon icon={menulist[i].icon} /></Col>
          <Col xs={10} style={labelStyle}>{menulist[i].label}</Col>
        </Row>
      </Link>
    );
  }
  return (
    menu
  );
}


const createSubMenu = (grouplist) => {
  var submenu = [];
  for(let i=0; i<grouplist.length; i++){
    const groupUrl = '/groups/' + grouplist[i].replace(" ","-");
    submenu.push(
      <Link to={groupUrl} style={{textDecoration: "none"}}>
        <Row className="sub-menu-button">
          # {grouplist[i]}
        </Row>
      </Link>
    );
  }
  return (
    submenu
  );
}

class Sidemenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      grouplist: this.props.user.grouplist
    }
  }
  render() {
    const menulist = [
      {icon: "home", label: "myboard", url: "/"},
      {icon: "bell", label: "notifications", url: "/notifications"},
      {icon: "envelope", label: "messages", url: "/messages"}
    ];

    return(
      <Router>
        <Col md={2} id="sidebar">
            <Row className="justify-content-md-center">
              <Col xs={8} className="sidebar-logo">logo</Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col xs={8} className="horizontal-line"></Col>
            </Row>
            {createMenu(menulist)}
            <Row className="justify-content-md-center">
              <Col xs={8} className="horizontal-line"></Col>
            </Row>
            <Row className="sub-menu">GROUPS</Row>
            {createSubMenu(this.state.grouplist)}
            <Row className="show-more">show more..</Row>
        </Col>
      </Router>
    );
  }
}

export default Sidemenu;

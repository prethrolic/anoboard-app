import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Board from './board.js';
import Profile from './profile.js';
import Trophy from './trophy.js';
import '../scss/userboard.scss';

class FullBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      board: this.props.board,
    };
  }
  render(){
    return(
      <div>
        <Row>
          <Col xs={12} md={6}><Profile user={this.state.currentUser}/></Col>
          <Col xs={12} md={6}>
            <Col className="wrap" id="trophy" style={{padding: '0'}}><Trophy /></Col>
          </Col>
        </Row>
        <Row><Board board={this.state.board}/></Row>
      </div>
    );
  }
}

export default FullBoard;

import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const teams = teamsData.teams;

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Header() {
  return (
    <div>
      <h1>Welcome to the list of college teams</h1>
      <p>
        This website just lists college teams. It does nothing else. It might as
        well be a word doc.
      </p>
    </div>
  );
}
class TeamCard extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div className="card">
        <p className="team-school">{oneTeam.school}</p>
        <p className="team-name">{oneTeam.name}</p>
        <p className="team-location">
          {oneTeam.city}, {oneTeam.state}
        </p>
      </div>
    );
  }
}
function TeamsList() {
  return (
    <Row>
      {teams.map((team, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={4}>
          <TeamCard {...team} />
        </Col>
      ))}
    </Row>
  );
}
function App() {
  return (
    <div className="App">
      <Header />
      <TeamsList />
    </div>
  );
}

export default App;

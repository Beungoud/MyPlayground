import React, { Component } from "react";
import { Icon, Header, Image, Container } from "semantic-ui-react";

const MenuHeader = () => {
  return (
    <Container
      style={{
        height: 100
      }}
    >
      <Header
        as="h1"
        content="My Playground"
        // inverted
        style={{
          fontSize: "2em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: "1.5em"
        }}
      />{" "}
    </Container>
  );
};

class AppHeader extends Component {
  render() {
    return <MenuHeader />;
    // <Switch>
    //   <Route path="/createSession" component={header} />{" "}
    //   <Route path="/sessionList" component={header} />{" "}
    //   <Route path="/joinSession" component={header} />{" "}
    //   <Route path="/session/:session_id" component={header} />{" "}
    // </Switch>
  }
}

export default AppHeader;

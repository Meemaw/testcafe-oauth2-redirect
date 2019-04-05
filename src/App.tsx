import React from "react";

const initialState = Object.freeze({ loggedIn: false, tokenChecked: false });

type State = typeof initialState;

class App extends React.Component {
  readonly state: State = initialState;

  componentDidMount() {
    const authorization = JSON.parse(localStorage.getItem("app") || "{}");

    if (authorization.expires_in) {
      const now = new Date().valueOf();
      const expiration = authorization.expires_in;
      if (now < expiration) {
        this.setState({ loggedIn: true, tokenChecked: true });
        return;
      } else {
        localStorage.removeItem("app");
      }
    }
    this.setState({ tokenChecked: true });
  }

  render() {
    const { loggedIn, tokenChecked } = this.state;
    if (!tokenChecked) {
      return <div>Checking token</div>;
    }

    if (tokenChecked && !loggedIn) {
      window.location.assign(
        "https://test.sentinel-hub.com/oauth/auth?client_id=6a5f92a1-06e4-4e77-aab7-0281b3b69012&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FoauthCallback.html&scope=&response_type=token&state="
      );
      return <div />;
    }
    return loggedIn ? <div>Logged in</div> : <div>Not logged in</div>;
  }
}

export default App;

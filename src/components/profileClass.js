import React from "react";
class Profile extends React.Component {
  render() {
    return (
      <>
        {" "}
        <h1>satya prakash</h1>
        <h1>{this.props.name}</h1>
        {console.log(this.props)};
        
      </>
    );
  }
}

export default Profile;

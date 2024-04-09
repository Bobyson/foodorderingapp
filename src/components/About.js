import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent component did mount");
  }

  render() {
    // console.log("Parent Rneder");

    return (
      <div>
        <h1>About</h1>
        <UserClass
          name={"Bobyson Laishram (class)"}
          location={"Imphal class"}
        />
      </div>
    );
  }
}

export default About;

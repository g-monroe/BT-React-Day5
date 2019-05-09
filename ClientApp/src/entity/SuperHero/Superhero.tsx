import React from "react";

interface ISuperheroProps {
  id: number;
}

interface ISuperheroState {}

class Superhero extends React.Component<ISuperheroProps, ISuperheroState> {
  static defaultProps = {
    id: 0
  };

  render() {
    return <div>Fill this in...</div>;
  }
}

export default Superhero;

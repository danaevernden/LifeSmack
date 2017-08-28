import React from 'react';

type Props = {
  name: String,
  image: String
}

const styles={
  goalItem: {
    marginBottom: '5px'
  },
};

class GoalName extends React.Component{
    props: Props

    render () {
        const {
          name,
          image
        } = this.props;


        const goalItems =
          <div>
              <div>{name}</div>
              <div><img src={image} /></div>
          </div>
        ;
    return (
      <h2 style={styles.goalItem}>{goalItems} </h2>
    )
  }
}

export default GoalName;

import React from 'react';
import { green500, grey500 } from 'material-ui/styles/colors';
import Chip from 'material-ui/Chip';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';


type Props = {
  category_id_1: Number,
  category_id_2: Number,
  category_id_3: Number
}


const styles={
  inlineBlock2: {
    display:'inline-block'
  },
  chipStyle: {
  margin: 4},
  wrapper: {
    flexWrap: 'wrap',
    marginBottom: '20px',
    marginLeft: '20%',
    marginRight: '20%',
    maxWidth: '600px'
  },
}

class CategoryItems extends React.Component {
  props: Props

  constructor(props){
    super(props)
    this.state= {
      value: this.props.category_id_2,
      category2_value: this.props.category_id_2,
      category1_value: this.props.category_id_1,
      category3_value: this.props.category_id_3

    }
  }


  handleChange = (event, index, category1_value) => this.setState({category1_value})
  handleChange2 = (event, index, category2_value) => this.setState({category2_value})
  openComment(task_id) {
    if(null == task_id) {
    this.setState({commentOpen: null})
  }
    this.setState({commentOpen: task_id})
  }

  render() {

    const {
      category_id_1,
      category_id_2,
      category_id_3
    } = this.props;



    const categoryItem =
      <div>
          <div>
            <div style={styles.inlineBlock2}>
              <Chip style={styles.chipStyle} backgroundColor={green500}>Difficulty</Chip>
            </div>
            <div style={styles.inlineBlock2}>
              <SelectField value={this.state.category2_value} onChange={this.handleChange2}
              >
                    <MenuItem value={6} primaryText="low" />
                    <MenuItem value={7} primaryText="medium" />
                    <MenuItem value={8} primaryText="high" />
              </SelectField>
            </div>
          </div>
          <div>
            <div style={styles.inlineBlock2}>
              <Chip style={styles.chipStyle} backgroundColor={green500}>Project Task Type</Chip>
            </div>
            <div style={styles.inlineBlock2}>
              <SelectField value={this.state.category1_value}  onChange={this.handleChange}
              >
                    <MenuItem value={2} primaryText="UI" />
                    <MenuItem value={3} primaryText="Back End" />
                    <MenuItem value={4} primaryText="User Testing" />
              </SelectField>
            </div>
          </div>
          <div>
            <div style={styles.inlineBlock2}>
              <Chip style={styles.chipStyle} backgroundColor={green500}>Task Type</Chip>
            </div>
            <div style={styles.inlineBlock2}>
              <SelectField value={this.state.category3_value}  onChange={this.handleChange}
              >
                    <MenuItem value={12} primaryText="task" />
                    <MenuItem value={13} primaryText="supplemental" />
              </SelectField>
            </div>
          </div>
      </div>
    ;

    return (
      <div>
          {categoryItem}
      </div>
    )
  }
}

export default CategoryItems;

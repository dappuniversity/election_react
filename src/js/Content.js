import React from 'react'
import Table from './Table'
import Form from './Form'

class Content extends React.Component {
  render() {
    return (
      <div>
        <Table candidates={this.props.candidates} />
        <hr/>
        <Form candidates={this.props.candidates} castVote={this.props.castVote} />
        <p>Your account: {this.props.account}</p>
      </div>
    )
  }
}

export default Content

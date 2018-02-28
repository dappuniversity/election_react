import React from 'react'
import Form from './Form'

class Content extends React.Component {
  render() {
    return (
      <div id='content'>
        <table class='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody >
            {this.props.candidates.map((candidate) => {
              return(
                <tr>
                  <th>{candidate.id.toNumber()}</th>
                  <td>{candidate.name}</td>
                  <td>{candidate.voteCount.toNumber()}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <hr/>
        <Form candidates={this.props.candidates} castVote={this.props.castVote} />
        <p>Your account: {this.props.account}</p>
      </div>
    )
  }
}

export default Content

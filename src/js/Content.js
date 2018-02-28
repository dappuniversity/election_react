import React from 'react'

class Content extends React.Component {
  render() {
    return (
      <div id='content'>
        <table class='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Votes</th>
            </tr>
          </thead>
          <tbody id='candidatesResults'>
            { this.props.candidates.map((candidate) => {
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
        <form onSubmit='App.castVote(); return false;'>
          <div class='form-group'>
            <label for='candidatesSelect'>Select Candidate</label>
            <select class='form-control' id='candidatesSelect'>
            </select>
          </div>
          <button type='submit' class='btn btn-primary'>Vote</button>
          <hr />
        </form>
        <p id='accountAddress' class='text-center'>Your account: {this.props.account}</p>
      </div>
    );
  }
}

export default Content;

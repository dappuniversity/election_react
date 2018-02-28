import React from 'react'

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
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.castVote(this.candidateId.value)
        }}>
          <div class='form-group'>
            <label for='candidatesSelect'>Select Candidate</label>
            <select ref={(input) => this.candidateId = input} class='form-control'>
              {this.props.candidates.map((candidate) => {
                return <option value={candidate.id}>{candidate.name}</option>
              })}
            </select>
          </div>
          <button type='submit' class='btn btn-primary'>Vote</button>
          <hr />
        </form>
        <p class='text-center'>Your account: {this.props.account}</p>
      </div>
    );
  }
}

export default Content;

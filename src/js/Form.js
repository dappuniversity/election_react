import React from 'react'

class from extends React.Component {
  render() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        this.props.castVote(this.candidateId.value)
      }}>
        <div class='form-group'>
          <label>Select Candidate</label>
          <select ref={(input) => this.candidateId = input} class='form-control'>
            {this.props.candidates.map((candidate) => {
              return <option value={candidate.id}>{candidate.name}</option>
            })}
          </select>
        </div>
        <button type='submit' class='btn btn-primary'>Vote</button>
        <hr />
      </form>
    )
  }
}

export default from

import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'
import Election from '../../build/contracts/Election.json'
import Content from './Content'
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      electionInstance: null,
      account: '0x0',
      hasVoted: false,
      candidates: [],
    }

    if (typeof web3 != 'undefined') {
      this.web3Provider = web3.currentProvider
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
    }

    this.web3 = new Web3(this.web3Provider)

    this.election = TruffleContract(Election)
    this.election.setProvider(this.web3Provider)
  }

  componentWillMount(){
    this.updateState()
    this.listenToEvents()
  }

  listenToEvents() {
  }

  updateState() {
    this.web3.eth.getCoinbase((err, account) => {
      this.setState({ account, loading: false })
      this.election.deployed().then((electionInstance) => {
        this.setState({ electionInstance })
        electionInstance.candidatesCount().then((candidatesCount) => {
          for (var i = 1; i <= candidatesCount; i++) {
            electionInstance.candidates(i).then((candidate) => {
              const candidates = [...this.state.candidates]
              candidates.push({
                id: candidate[0],
                name: candidate[1],
                voteCount: candidate[2]
              });
              this.setState({ candidates: candidates })
            });
          }
        })
      })
    })
  }

  render() {
    return (
      <div class='row'>
        <div class='col-lg-12 text-center' >
          <h1 class='text-center'>Election Results</h1>
          <br/>
          { this.state.loading
            ? <p class='text-center'>Loading...</p>
            : <Content account={this.state.account} candidates={this.state.candidates} />
          }
        </div>
      </div>
    )
  }
}

ReactDOM.render(
   <App />,
   document.querySelector('#root')
)

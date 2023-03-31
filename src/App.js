import React from 'react';
import shortid from 'shortid';
import { Container, Row, Col } from "reactstrap"

import MainContent from './components/main-content';
import Sidebar from './components/sidebar';
import POLLs from './data/polls';

class App extends React.Component {

    state = {
        polls: [],
        selectedPoll: {},
        searchTerm: "",
    }

    // Using Life Cycle Method
    componentDidMount() {
        this.setState({polls: POLLs})
    }

    // Create New Poll
    createPoll = poll => {
        poll.id = shortid.generate()
        poll.createdAt = new Date()
        poll.totalVote = 0
        poll.opinion = []
        this.setState({
            polls: this.state.polls.concat(poll)
        })
    }

    // Update Poll
    updatePoll = updatedPoll => {
        const polls = [...this.state.polls]
        const poll = polls.find(p => p.id === updatedPoll.id)
        poll.title = updatedPoll.title
        poll.description = updatedPoll.description
        poll.options = updatedPoll.options

        this.setState({polls})
    }

    // Delete Poll
    deletePoll = pollId => {
        const polls = this.state.polls.filter(poll => poll.id !== pollId)
        this.setState({polls, selectPoll: {}})
    }

    // Select Poll
    selectPoll = pollId => {
        const poll = this.state.polls.find(poll => poll.id === pollId)
        this.setState({selectedPoll: poll})
    }

    handleSearch = searchTerm => {

    }

    render() {
        return (
            <Container className='my-5'>
                <Row>
                    <Col md={4}>
                        < Sidebar
                            polls={this.state.polls}
                            selectPoll={this.selectPoll}
                            handleSearch={this.handleSearch}
                            searchTerm={this.state.searchTerm}
                        />
                    </Col>
                    <Col md={8}>
                        < MainContent />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App

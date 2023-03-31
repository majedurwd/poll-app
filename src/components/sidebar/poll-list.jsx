import React from "react";
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from "reactstrap"

const PollList = props => {
    if (props.length === 0) {
        return <h2>There is no poll!</h2>
    }

    return (
        <ListGroup>
            {props.polls.map(poll => (
                <ListGroupItem
                    key={poll.id}
                    onClick={() => props.selectPoll(poll.id)}
                    style={{cursor: "pointer"}}
                >
                    {poll.title.length > 30 ? `${poll.title.substr(0, 30)}...` : poll.title}
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}
PollList.propTypes = {
    polls: PropTypes.array.isRequired,
    selectPoll: PropTypes.func.isRequired
}

export default PollList
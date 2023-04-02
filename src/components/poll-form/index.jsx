import React from 'react';
import shortid from 'shortid';

const defaultOption = [
	{
		id: shortid.generate(),
		value: '',
		vote: 0,
	},
	{
		id: shortid.generate(),
		value: '',
		vote: 0,
	},
	{
		id: shortid.generate(),
		value: '',
		vote: 0,
	},
];

class PollForm extends React.Component {
	state = {
		title: '',
        description: '',
        options: defaultOption
    };
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOptionChange = (event, index) => {
        const options = [...this.state.options]
        options[index] = event.target.value
        this.setState({options})
    }

    createOption = () => {
        const { options } = this.state
        if (options.length < 5) {
            options.push({
                id: shortid.generate(),
                value: "",
                vote: 0
            })
            this.setState({options})
        } else {
            alert("You can create max 5 options")
        }
    }

    deleteOption = index => {
        const { options } = this.state
        if (options.length > 2) {
            options.splice(index, 1)
            this.setState({ options })
        } else {
            alert("You mast have at least two options")
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    validate = () => {
        const errors = {}
        const { title, description, options } = this.state
        if (!title) {
            errors.title = "Please provide a tile!"
        } else if (title.length < 20) {
            errors.title = "Title too short!"
        } else if (title.length > 100) {
            errors.title = "Title too long!"
        }

        if (!description) {
            errors.description = "Please provide a description!"
        } else if (description.length > 500) {
            errors.description = "Description too long!"
        } 
    }
}

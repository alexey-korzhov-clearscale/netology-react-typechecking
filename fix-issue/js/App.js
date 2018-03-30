'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 'user@gmail.com',
            first_name: 'Alexey',
            last_name: 'Korzhov',
            age: 29,
            nickname: 'anonimizer_me',
            is_married: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(this.state);
        alert('Profile has been updated');
    }

    onChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="row">
                <Form {...this.state} handleChange={this.onChange} handleSubmit={this.onSubmit} />
            </div>
        );
    }
};

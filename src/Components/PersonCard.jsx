import React, {Component} from "react";

class MyNewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agePlus: this.props.age
        };
    }

    eatDukGuk = () => {
        this.setState({ agePlus: this.state.agePlus +1 });
    }

    render() {

        return (
            <div>
                <h3>{this.props.lastName}, {this.props.firstName}</h3>
                <h6>Age: {this.state.agePlus}</h6>
                <h6>Hair Color: {this.props.hairColor}</h6>
                <button onClick={ this.eatDukGuk}> Eat some DukGuk </button>
            </div>
        )
    }
}

export default MyNewComponent;
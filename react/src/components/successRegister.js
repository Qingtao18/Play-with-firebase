import React, { Component } from 'react';


class SuccessRegister extends Component{
    constructor(props) {
        super(props);

        this.state = {
            items:[]
        };

        this.firebaseRef = this.props.db.database().ref("userDB");
    }
    componentWillUnmount() {
        this.firebaseRef.off();
    }

    render() {
        const records = this.state.items.map(items =>
            <tr key={items.name}>
                <td>{items.name}</td>
                <td>{items.password}</td>
            </tr>
        );

        return (
            <div>
                <p> There are totally {records.length} users </p>
            </div>
        );
    }
}
export default SuccessRegister;
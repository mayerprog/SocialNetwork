import React from "react";

class ProfileStatus extends React.Component {
    state = {
        toggle: false,
        status: this.props.status
    }
    acivateToggle = () => {
        this.setState({
            toggle: true
        })
    }
    deActivateToggle = () => {
        this.setState({
            toggle: false
        })
        this.props.updateStatus(this.state.status)
    }


    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
 
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.toggle &&
                <div><span onDoubleClick={this.acivateToggle}
                >{this.props.status || "----"}</span></div>
                }
                {this.state.toggle &&
                <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateToggle}
                value={this.state.status}/></div>
                }
            </div>
        );
    }

};

export default ProfileStatus;
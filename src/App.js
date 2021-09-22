import React from "react";
import { increment, decrement, reset, login, logout } from "./actions";
import { connect } from "react-redux";

class App extends React.Component {
    renderLoginStatus = () => {
        if (this.props.userLoggedIn) {
            return "Logged In";
        }
        return "Logged Out";
    };

    render() {
        return (
            <React.Fragment>
                <button
                    onClick={() => {
                        this.props.increment();
                    }}
                >
                    +
                </button>
                <button
                    onClick={() => {
                        this.props.decrement();
                    }}
                >
                    -
                </button>
                <button
                    onClick={() => {
                        this.props.reset();
                    }}
                >
                    =
                </button>
                <button
                    onClick={() => {
                        this.props.login();
                    }}
                >
                    Log In
                </button>
                <button
                    onClick={() => {
                        this.props.logout();
                    }}
                >
                    Log Out
                </button>
                <p>{this.props.counter}</p>
                <p>{this.renderLoginStatus()}</p>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        userLoggedIn: state.login,
    };
};

export default connect(mapStateToProps, {
    increment,
    decrement,
    reset,
    login,
    logout,
})(App);

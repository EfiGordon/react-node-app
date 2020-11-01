import React, { Component } from 'react';
import { connect } from 'react-redux';
class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login with Google</a></li>
                )
            default:
                return (<li><a href="/api/logout">Logout</a></li>)
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper  orange darken-3">
                    <a href="#" className="left"><span className="brand-logo">App Name</span></a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(Header);
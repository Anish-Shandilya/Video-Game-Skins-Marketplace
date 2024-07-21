import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    const centerText = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4em', // 4 times the original size
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif', // Replace with your preferred rounded font
    color: '#f0f0f0', // Cloudy white color
    };

    const accountStyle = {
    fontSize: '0.85em', // Half the original size
    marginLeft: 'auto',
    fontFamily: 'Arial', 
    color: '#f0f0f0', // Cloudy white color
    };

    const navbarStyle = {
    background: 'linear-gradient(to right, #555555, #000000)', // Gradient from grey to black
    fontFamily: 'sans-serif', 
    };

    return (
    <nav className="navbar navbar-dark fixed-top" style={navbarStyle}>
        <div className="navbar-brand">
        <span style={centerText}>
            Video Game Skins Marketplace
        </span>
        {this.props.account && (
            <span style={accountStyle}>
            Current Address : {this.props.account}
            </span>
        )}
        </div>
    </nav>
    );
  }
}

export default Navbar;

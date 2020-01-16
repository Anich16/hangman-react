import React, { Component } from 'react';

const styles = {
    character: {
        fill: 'none',
        stroke: 'black',
        strokeWidth: 3,
    },
    post: {
        fill: 'none',
        stroke: 'black',
        strokeWidth: 10,
    },
};

class Hangman extends Component {
    render() {
        return (
            <svg width="500" height="550">
                <polyline points="400,500 100,500 150,500 150,100 320,100 320,150"
                          style={styles.post} />
                {this.renderBody()}
                {this.renderLeftArm()}
                {this.renderRightArm()}
                {this.renderLeftLeg()}
                {this.renderRightLeg()}
                {this.renderHead()}
            </svg>
        );
    }

    renderHead() {
        return  this.props.retries <= 4 ?
            <circle cx="320" cy="190" r="40" fill="black" /> :
            null;
    }

    renderBody() {
        return this.props.retries <= 4 ?
            <line x1="320" y1="190" x2="320" y2="360" style={styles.character} /> :
            null;
    }

    renderLeftArm() {
        return this.props.retries <= 3 ?
            <line x1="320" y1="260" x2="250" y2="230" style={styles.character} /> :
            null;
    }

    renderRightArm() {
        return this.props.retries <= 2 ?
            <line x1="320" y1="260" x2="390" y2="230" style={styles.character} /> :
            null;
    }

    renderLeftLeg() {
        return this.props.retries <= 1 ?
            <line x1="320" y1="360" x2="250" y2="450" style={styles.character} /> :
            null;
    }

    renderRightLeg() {
        return  this.props.retries <= 0 ?
            <line x1="320" y1="360" x2="390" y2="450" style={styles.character} /> :
            null;
    }
}

export default Hangman;
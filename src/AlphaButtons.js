import React, { Component } from 'react';

class AlphaButtons extends Component
{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e)
    {
        this.props.onClick(e);
    }

    render()
    {
        return (
            <div className="AlphaButtons">
                {
                    "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
                        <button
                            key={ltr}
                            value={ltr}
                            onClick={this.handleClick}
                            disabled={this.props.guessed.has(ltr)}
                        >
                            {ltr}
                        </button>
                    ))
                }
            </div>
        );
    }
}

export default AlphaButtons;

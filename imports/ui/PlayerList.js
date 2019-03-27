import React from 'react'
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import Player from './Player'

export default class PlayerList extends React.Component{
    renderPlayers(){
        if (this.props.players.length === 0) {
            return (
                <div className="item">
                    <p className="item__message item__message--empty">Please add your first player</p>
                </div>
            )
        } else {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player}/>;
            });
        }
    }
    render() {
        return (
            <div>
                <FlipMove maintainContainerHeight={true}> 
                    {this.renderPlayers()} 
                </FlipMove>
            </div>
        );
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}
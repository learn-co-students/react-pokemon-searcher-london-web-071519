import React from 'react';
import {Card} from 'semantic-ui-react';

class PokemonCard extends React.Component {
	state = {clicked: false};
	handleClick = () => this.setState({clicked: !this.state.clicked});
	render() {
		const {name, sprites, hp} = this.props.info;
		return (
			<Card>
				<div>
					<div className="image" onClick={this.handleClick}>
						<img
							src={
								this.state.clicked
									? sprites.back
									: sprites.front
							}
							alt={name}
						/>
					</div>
					<div className="content">
						<div className="header">{name}</div>
					</div>
					<div className="extra content">
						<span>
							<i className="icon heartbeat red" />
							{hp} hp
						</span>
					</div>
				</div>
			</Card>
		);
	}
}

export default PokemonCard;

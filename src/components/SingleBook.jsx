import Card from 'react-bootstrap/Card';

import { Col } from 'react-bootstrap';
import { Component } from 'react';
class SingleBook extends Component {
	state = {
		selected: false,
	};

	render() {
		return (
			<Col md={3} key={this.props.book.asin} className='my-2'>
				<Card
					className={
						this.state.selected ? 'border border-warning border-4 h-100' : 'border-none h-100'
					}
					onClick={() => {
						this.setState({ selected: !this.state.selected });
					}}>
					<Card.Img variant='top' src={this.props.book.img} height={400} />
					<Card.Body className='justify-content-between d-flex flex-column'>
						<Card.Title>{this.props.book.title}</Card.Title>
						<Card.Text>{this.props.book.category}</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		);
	}
}

export default SingleBook;

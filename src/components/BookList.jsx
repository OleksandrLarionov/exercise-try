import { Component } from 'react';
import SingleBook from './SingleBook';
import { Container, Row, Form, Col } from 'react-bootstrap';

class BookList extends Component {
	state = {
		bookTitle: '',
	};
	render() {
		return (
			<Container>
				<Row className='justify-content-center'>
					<Col md={6} className='my-4'>
						<Form.Group>
							<Form.Control
								type='text'
								placeholder='Cerca un libro...'
								value={this.state.bookTitle}
								onChange={(e) => {
									this.setState({
										bookTitle: e.target.value,
									});
								}}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					{this.props.genre
						.filter((book) =>
							book.title.toLowerCase().includes(this.state.bookTitle.toLowerCase())
						)
						.map((oneBook) => {
							return <SingleBook book={oneBook} />;
						})}
				</Row>
			</Container>
		);
	}
}

export default BookList;

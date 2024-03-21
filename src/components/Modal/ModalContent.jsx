import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import './modal.css';


const ModalContent = ({setModalOpen,modalOpen,closeModal}) => {
    return (
        <div className="card-container">
            <Card className='my-5'>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button onClick={closeModal} variant="primary">Close</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ModalContent
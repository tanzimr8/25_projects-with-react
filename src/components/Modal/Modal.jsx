import React, { useState } from 'react'
import ModalContent from './ModalContent'
const Modal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <section>
            <h2>Modal Popup</h2>
            <h3>Tanzim Rahman</h3>
            <button onClick={() => {
                setModalOpen(!modalOpen)
            }}>View Details</button>
            {modalOpen && <ModalContent />}
        </section>
    )
}

export default Modal
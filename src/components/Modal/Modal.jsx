import React, { useState } from 'react'
import ModalContent from './ModalContent'
const Modal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = ()=>{
        setModalOpen(false);
    }
    return (
        <>
        <section className={modalOpen ? 'blurred':''}>
            <h2>Modal Popup</h2>
            <h3>Tanzim Rahman</h3>
            <button onClick={() => {
                setModalOpen(!modalOpen)
            }}>{!modalOpen ? 'View Details' : 'Hide Details'}</button>
            
        </section>
        {modalOpen && <ModalContent setModalOpen={setModalOpen} modalOpen={modalOpen} closeModal={closeModal}/>}
        </>
    )
}

export default Modal
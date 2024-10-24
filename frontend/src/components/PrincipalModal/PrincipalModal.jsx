import { useState } from 'react'
import './PrincipalModal'

import Modal from 'react-modal'

const PrincipalModal = () => {

    const [popup,setPopup] = useState(false)

    function openModal () {
        setPopup(true)
    }

    function closeModal () {
        setPopup(false)
    }

    return(
        <div>
            <Modal/>
        </div>
    )
}

export default PrincipalModal
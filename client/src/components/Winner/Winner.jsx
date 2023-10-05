import React, {useState, useRef } from 'react'
import Modal from 'react-modal';
import source from "../../assets/source.gif";

const Winner = ({ opene, winn, cresult}) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const subtitleRef = useRef();

    function afterOpenModal() {
        if (subtitleRef.current) {
            subtitleRef.current.style.color = '#f00';
        }
    }

    const startagain = () => {
        localStorage.setItem("start", false);
        localStorage.setItem("n1", 0);
        localStorage.setItem("n2", 0);
        localStorage.setItem("n3", 0);
        localStorage.setItem("n4", 0);
        window.location.reload();
    }

    React.useEffect(() => {
        setIsOpen(opene)

    }, [opene]);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: "black",
    
        },
    };

    function closeModal() {
        setIsOpen(false);
        cresult(false);
        startagain();
    }
    return (
        <>
            <div className='z-[101]  bg-black p-auto m-auto flex relative'>
                <Modal
                    ariaHideApp={false}
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Winner"
                >
                    <button onClick={closeModal} className='mx-auto text-center flex text-xl text-red-500 font-bold '>Player {winn} Won</button>
                    <div className={``}>
                        <img src={source} />
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Winner;
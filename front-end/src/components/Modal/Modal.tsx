import "./Modal.scss"

/* Modal takes button object array as prop. This is to allow for multiple buttons on the modal.   */
type ModalProps = {
    title: string;
    buttons: React.ReactNode[];
}


const Modal = ({title, buttons} : ModalProps) => {

    return (
        <div className="modal" >
            <h2 className="modal__title" >{title}</h2>
            <div className="modal__buttons"> 
                {buttons.map((button) => (button))}
            </div>
        </div>
    );
};

export default Modal;

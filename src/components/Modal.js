import Button from "./Button"

const Modal = ({onClick, onConfirm}) => {

    function onCancelHandler(){
        onClick();
    }

  return (
    <div className='modal'>
        <p>Are you sure ?</p>
        <Button color="grey" text='Cancel' onClick={onCancelHandler}/>
        <Button color='red' text='Confirm' onClick={onConfirm} />
    </div>
  )
}

export default Modal

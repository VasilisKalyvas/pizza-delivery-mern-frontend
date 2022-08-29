import {React, useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../actions/cartActions';

const Item = ({pizza}) => {

    const dispatch = useDispatch()
    const [quantity, SetQuantity] = useState(1);
    const [varient, SetVarient] = useState('small');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const AddToCart = () => {
        dispatch(addToCart(pizza, quantity, varient))
    }
    

  return (<>
    <div key={pizza._id} className='shadow-lg p-4 mb-5 bg-white rounded'>
        <h1>{pizza.name}</h1>
        <div onClick={handleShow}>
            <img src={pizza.image} alt='' className='img-fluid' style={{cursor: 'pointer', height: '200px', width: '200px'}}/>
        </div>
        <div className='flex-container'>
            <div className='w-100 m-2'>
                <p>Varients</p>
                <select className='form-control' value={varient} onChange={((e) => {SetVarient(e.target.value)})}>
                    {pizza.varients.map(varient => {
                        return <option value={varient}>{varient}</option>
                    })}
                </select>
            </div>
            <div className='w-100 m-2' key={pizza._id}>
                <p>Quantity</p>
                <select className='form-control' value={quantity} onChange={((e) => {SetQuantity(e.target.value)})}>
                    {[...Array(10).keys()].map((x , i) => {
                        return <option value={i+1}>{i+1}</option>
                    })}
                </select>
            </div>
        </div>
        <div className='flex-container'>
            <div className='w-100' style={{marginTop: '40px'}}>
                <h1 className='mt-2'> Price: {pizza.prices[0][varient] * quantity} $</h1>
            </div>
            <div className='w-100' style={{marginTop: '40px'}}> 
                <button className='btn' onClick={AddToCart}>Add Item <FaShoppingCart/></button>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{pizza.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={pizza.image} alt='' className='img-fluid' style={{height: '300px', width: '300px'}}/>
                <p>{pizza.description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    </div>
    </>
  )
}

export default Item
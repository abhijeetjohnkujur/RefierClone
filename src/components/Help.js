import {Container,Row,Col,Form} from 'react-bootstrap';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

function Help() {
    const [value, setValue] = useState()
    return (

        <Container fluid className='border border-red shadow-sm w-75 bg-white'>
            <Row className='mt-4'>
            <Col md={12} style={{color:'#008080'}} className='h5 fw-bold'>Confused?</Col>    
            <Col md={12} style={{color:'#008080'}} className='h5 fw-bold'>We can help you</Col>    
            </Row>  <hr />
            <Row>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='position-relative' style={{fontWeight:'500',fontSize:'14px'}}>FULL NAME<FontAwesomeIcon icon={faAsterisk} color='red' className="fa-xs h-25 position-absolute top-0 start-100 translate-middle"/></Form.Label>
                <Form.Control type="text" placeholder="John Doe"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='position-relative' style={{fontWeight:'500',fontSize:'14px'}}>Email<FontAwesomeIcon icon={faAsterisk} color='red' className="fa-xs h-25 position-absolute top-0 start-100 translate-middle"/></Form.Label>
                <Form.Control type="text" placeholder="Email" />
            </Form.Group>
            
            </Form>
            </Row>
            <Row>
                <Col md={12} className='h6'>Mobile number</Col>
            <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}/>
            </Row>
            <Row className='my-4 d-flex justify-content-center'>
                <button type="submit" className='bg-dark text-white w-75 p-2 rounded'>Submit</button>
            </Row>
        </Container>
    );
}

export default Help;
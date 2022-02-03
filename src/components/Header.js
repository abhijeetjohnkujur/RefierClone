import {Row,Col,Container,Button,Modal,Form} from 'react-bootstrap';
import '../styles/header.css';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const messageToast = () => {
    toast.success("Login successful!",{
        position: "top-center",
        autoClose: false,
    });
 }
function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <Container fluid className='bg-white'>
                <Row className='py-5'>
                    <Col xs={5}className='logos ps-5 h1'>Refier</Col>
                    <Col xs={4}className='d-flex justify-content-between align-items-center px-5'>

                        <div className='h5'>About Us</div>
                        <div className='dropdowns'>
                        <button className='links h5'>Marketplace</button>
                        <div className='dropdown-menus'>

                           <div className='h6 drop-items px-4 py-4'>Marketplace</div>
                           <div className='h6 drop-items px-4 py-4'>Cohort</div>
                           <div className='h6 drop-items px-4 py-4'>Courses</div>
                           <div className='h6 drop-items px-4 py-4'>Webinar</div>

                        </div>
                        </div>
                        <div className='h5'>Jobs</div>
                        
                        
                    </Col>
                    <Col xs={3}className='d-flex justify-content-around align-items-center'>
                       
                       <div><button className='h5 border border-dark rounded py-2 px-5' onClick={handleShow}>Login</button></div>
                       <div className='dropdowns'>
                        <button className='links h5 bg-dark text-white py-2 px-5 rounded'>Register</button>
                        <div className='dropdown-menus'>

                           <div className='h6 drop-items px-4 py-4'>As a Student</div>
                           <div className='h6 drop-items px-4 py-4'>As a Enterprise</div>
                       

                        </div>
                        </div>

                    </Col>
                </Row>
            </Container>
            
                <Modal show={show} onHide={handleClose} className='rounded'>
                    <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={12} className='d-flex justify-content-center px-5'><div className='w-100 border d-flex justify-content-center py-2 rounded border border-dark'><img src="https://img.icons8.com/fluency/48/000000/google-logo.png" alt="Google Logo" width="30px" className='me-2'/>Sign in with Google</div></Col>
                        </Row>
                        <Row className='px-5 mt-2'>
                            <Col sm={1} className='text-muted'>
                                OR
                            </Col>
                            <Col sm={10}>
                                <hr />
                            </Col>
                        </Row>
                        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
      <Row className='mt-3'>
          <Col sm={12} >
             
              <Form.Label className='me-2 position-relative'>Email address <FontAwesomeIcon icon={faAsterisk} color='red' className="fa-xs h-25 position-absolute top-0 start-100 translate-middle"/></Form.Label>
            
          </Col>
      </Row>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Row>
          <Col sm={12} >
             
              <Form.Label className='me-2 position-relative'>Password <FontAwesomeIcon icon={faAsterisk} color='red' className="fa-xs h-25 position-absolute top-0 start-100 translate-middle"/></Form.Label>
            
          </Col>
      </Row>
    <Form.Control type="password" placeholder="Must be atleast 8 characters" />
  </Form.Group>
  <Row className='py-4'>
      <Col sm={12} className='text-primary' style={{letterSpacing: '0.5px',fontSize: '14px',fontWeight: '600'}}>Forgot Password?</Col>
  </Row>
  <Row>
      <Col sm={12} className='d-flex justify-content-center'>
          <Button variant="dark" type="submit" className='w-75 py-2 fs-5' onClick={messageToast}>
            Login
        </Button>
        </Col>
  </Row>
  
</Form>
        <Row className='my-3'>
            <Col sm={12} className='d-flex justify-content-center'><div>New to Refiers?Register as<button className='text-primary'>Student</button>/<button className='text-primary'>Enterprise</button></div></Col>
        </Row>
                    </Modal.Body>
                    
            </Modal>
            <ToastContainer />
        </>
    );
}

export default Header;
import {Container,Row,Col,Form} from 'react-bootstrap';
import '../styles/filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
function Filter(){
    return(
       <Container fluid className='border border-red rounded p-4 shadow-sm w-75 bg-white'>
           <Row>
               <Col md={12} className='mt-2 d-flex'>
                   <div><FontAwesomeIcon icon={faSlidersH}/></div>
                    <div className='h6 ms-2'>Filters</div>
               </Col>
           </Row>
           <Row className='mt-4'>
               <Col md={12} className=''>
                <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select>
                <option className='text-red'>eg- Sales, Marketing</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Select>
                <option>Delhi,Mumbai</option>
                </Form.Select>
                </Form.Group>
               </Col>
               
           </Row>
                <Col md={12} className='d-flex d-flex justify-content-between align-items-center'>
                    <div className='h6'>Work from Home</div>
                    <div>
                    <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                    </label>
                    </div>
                </Col>
           <Row className='mt-3'>
           <Col md={12} className='d-flex d-flex justify-content-between align-items-center'>
                    <div className='h6'>Only internships</div>
                    <div>
                    <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                    </label>
                    </div>
                </Col>
           </Row>
           <Row className='mt-3'>
               <Col md={12} className='d-flex justify-content-between align-items-center'>
                    <div className='h6'>Desired Minimum Monthly Pay</div>
                    <div className='h6'>1L</div>
               </Col>
           </Row>
           <Row>
               <Col md={12}> 
               <div className="slidecontainer">
                <input type="range" min="1" max="100" value="50" className="sliders w-100" id="myRange" />
                </div>
               </Col>
           </Row>
       </Container>
    );
}

export default Filter;
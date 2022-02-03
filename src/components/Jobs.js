import {Container,Row,Col } from 'react-bootstrap';
import jl from '../images/jobLogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Jobs(props) {

    return (

        <Container className='shadow p-4 mb-5 bg-white'>
            <Row>
                <Col md={10}>
                    <div className='h6'>{props.title}</div>
                    <div className='mt-3 h6 text-black-50 fw-light fs-5'>{props.comp}</div>
                </Col>
                <Col md={2}>
                <img src={jl} alt="jobLogo" className='w-75'/>
                </Col>
            </Row>
            <hr/>
            <Row className='mt-2'>
                <Col md={4} className='d-flex align-items-center text-break'>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <div className='ms-2'>{props.loc}</div>
                </Col>
                <Col md={8} className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faBriefcase} />
                    <div className='ms-2'>{props.exp}</div>
                    <span className='ms-2'>Experience</span>
                </Col>
                
            </Row>
            <Row className='mt-3'>
                <Col md={12}>
                    {props.descs}
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col md={8} className='d-flex justify-content-between'>
                    <div className='d-flex'>
                    <div className=' rounded-pill px-4 py-2 bg-light border'>{props.place}</div>
                    <div className=' rounded-pill px-4 py-2 bg-light border ms-3'>{props.jt}</div>
                    </div>
                    
                </Col>
                <Col md={4} className=' d-flex align-items-center justify-content-center'>
                    <button className='w-50 px-2 py-2 rounded-pill shadow text-white fw-bold' style={{background:'#008080'}}>Apply Now</button>
                </Col>
            </Row>
        </Container>
    );
}

export default Jobs;
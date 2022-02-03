import Filter from './Filter';
import Jobs from './Jobs';
import Help from './Help';
import {Container, Row, Col} from 'react-bootstrap';
import {jobData} from '../data/jobData.js';


function Dashboard()
{
    return (
        <Container fluid className='mt-5'>
            <Row>
                <Col md={3} className=''>
                    <Filter />
                </Col>
                <Col md={6} className=''>
                    {
                        jobData.map((job,key) => {
                            console.log(key)
                            return(
                                <Jobs title={job.title} comp={job.company} loc={job.location} exp={job.experience} descs={job.desc} place={job.place} jt={job.jobType} key={job}/>
                            )
                        })
                    }
                    
                    

                </Col>
                <Col md={3} className=''>
                    <Help />
                </Col>
            </Row>

           

            
        </Container>
    );
}

export default Dashboard;
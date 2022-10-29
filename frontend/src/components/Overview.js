import React,{Component,useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
//import cycles from '../data/cycles'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import {Routes, Route, useNavigate} from 'react-router-dom';
import MainLayout from './MainLayout';
import axios from 'axios';
import {format,parseISO} from 'date-fns';



function Cycle (props){

  const options = {   year: 'numeric', month: 'long', day: 'numeric' };
  


  return (
    <Card>
          <Card.Body> 
            <Row >
                <Col className="col-6" >  <div className="cyclePeriod  ">
                          <div className="cycleItem"><h5 className="p-2 " >{ new Date(props.cycle.startDate).toLocaleDateString('us-EN', options)   } - {new Date(props.cycle.endDate).toLocaleDateString('us-EN', options)   }</h5>   </div>
                        </div>
                </Col>
                <Col  className="col-2"><div className="custom-Button mx-auto">  <Link to={"/edit/"+props.cycle._id}>Review</Link> </div></Col>
                <Col  className="col-2"><div className="custom-Button mx-auto"> 
                 <Link onClick={()=>{props.deleteCycle(props.cycle._id)}}to={"#"}>delete</Link> </div></Col>
                
                <Col className="col-2"><div className="custom-Button"> <Link to={"/update/"+props.cycle._id}>Update Cycle</Link> </div></Col>
            </Row>
          </Card.Body>
      </Card>

  )

  
}


const Overview = () => {

  const [cycles, setCycles] = useState([ ])


  const deleteCycle=(id)=>{

    axios.delete('http://localhost:5000/cycles/'+id)
    .then(res=>console.log(res.data));
    setCycles(cycles.filter(item=>item._id!==id))
  }
 

  useEffect(() => {
    const fetchData = async () =>{
    
      try {
        //const exercises= await axios.get('');

        const {data: response} = await axios.get('http://localhost:5000/cycles');

        
        setCycles(response);
        //console.log ("exercises+ "+ JSON.stringify(exercises))
      } catch (error) {
        console.error(error.message);
      }
   //   setLoading(false);
    }

    fetchData();
  }, [  ]);   


  const navigate = useNavigate();
  const navigateToCreate = () => {
    // 👇️ navigate to /contacts
    navigate('/create');
  };
 
  const cycleList = ()=>{
    if(cycles){
     
      return cycles.map(currentCycle=>{ 
       return <Cycle cycle={currentCycle}  deleteCycle={deleteCycle} startDate={currentCycle.startDate} endDate={currentCycle.endDate} key={currentCycle._id}/>})
    }
  }

  return (
    <Container  >
     <MainLayout title="Overview">
      {cycleList()}
      <Row >
          <Col className="d-flex justify-content-center">
            <Button onClick={navigateToCreate} className="align-self-center blackBigBtn"> Create Cycle </Button> </Col>
        </Row>
      </MainLayout>
  </Container>
  )
}

export default Overview
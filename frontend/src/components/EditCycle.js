import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import {   useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import UserTabs from './UserTabs'
import MainLayout from './MainLayout';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar'


const EditCycle = () => {

  const [cycle,setCycle] = useState([])

  let {id_cycle} = useParams()
  const options = {   year: 'numeric', month: 'long', day: 'numeric' };

useEffect(()=>{

        axios.get('http://localhost:5000/cycles/'+id_cycle)
          .then(response => {
 
           setCycle(response.data)
            console.log ("cycles set to : " +  cycle)
          })
          .catch(function (error) {{}
            console.log(error);
          })

   
    },[id_cycle])

 
    // const userList = ()=>{
    //   if(cycle.users){
    //     console.log("cycle list " +JSON.stringify(cycle))
    //     return cycle.users.map(currentUser=>{ 
    //      return <UserRow  goals={currentUser.goals}firstName={currentUser.firstName} key={currentUser._id} id={currentUser._id}/>})
    //   }
    // }

    const mainGoalList=()=>{
      
    }

  return (
    <Container >
      <MainLayout title= "Cycle Period " start_date={`${ new Date(cycle.startDate).toLocaleDateString('us-EN', options)  }`} 
      end_date ={` - ${new Date(cycle.endDate).toLocaleDateString('us-EN', options) }`}>
      <Accordion>
      
       { cycle.users && cycle.users.map((user,i)=>{
        return (
       
          <> 
         <Accordion.Item eventKey={i}>
           <Accordion.Header>{ user.firstName}</Accordion.Header>
               <Accordion.Body>
                {user.goals && user.goals.map((goal,j)=>{
                  return( 
                     <>
                    <Row>
                      <Col>
                        <p key={j} className="main-goal title"> {goal.mainGoal}</p>
                      </Col>
                      <Col>
                     
                           <ProgressBar  variant="success" now={60} label={"60%"} />
                      
                      </Col>
                  </Row>
                  <Row>
                    <Col>
                    <ListGroup>
                    {goal.subTasks && goal.subTasks.map((subTask,k)=>{
                    return(
                      <ListGroup.Item key={k}> {subTask} </ListGroup.Item>
                    )
                    })    
                    }  
                    </ListGroup>
                    </Col>
                  </Row>
                  </>     
                  )
                })}
               
              </Accordion.Body>
          </Accordion.Item >
          </>
            
        ) 
       })}

      </Accordion>  
      </MainLayout>
    </Container>
    
  )
}

export default EditCycle
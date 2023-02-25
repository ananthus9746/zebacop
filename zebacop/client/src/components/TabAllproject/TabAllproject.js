import React,{useEffect,useState} from 'react'
import Card from '../Card/Card'
import './TabAllproject.css'
import {geAlltProjects} from '../../APIs/UserApi'

function TabAllproject() {

const [loading, setLoading] = useState(false);
const [colData,setColData]=useState([])

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    await geAlltProjects().then((response) => {
      console.log("all project start ended projects..", response.data.projects);
      setColData(response.data.projects);
      setLoading(false);
    });
  };


  return (
    <div className='TabAllprojectWrapper'>


      {
        colData.map((obj)=>{
          console.log("obj..",obj)
          return( <Card obj={obj}/>)
        })
      }



    </div>
  )
}

export default TabAllproject
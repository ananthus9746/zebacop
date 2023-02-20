import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Table,Popconfirm,Button} from 'antd'
import { getProjects,UpdateStatus } from '../../APIs/UserApi'
import './TableDasboard.css'



function TableDashboard() {
  const[ gridData,setGridData]=useState([])
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    loadData()
  },[])

  const loadData=async()=>{
    setLoading(true)
    await getProjects().then((response)=>{
      console.log("projects..",response.data.projects)
      setGridData(response.data.projects)
      setLoading(false)
    })
  }

  const handleAccept=async(record)=>{
    console.log("record...",record._id);
    let projectId=record._id
    const accepted={
      projectId,
      status:"accepted"
    }
    await UpdateStatus(accepted).then((res)=>{
      
      console.log("accepted..",res)
    })

    // const dataSource=[...gridData]
    // const filtered=dataSource.filter((item)=>{
    //   console.log("item..",item)
    // })
  }

  
  const handleReject=async(record)=>{
    console.log("record...",record._id);
    let projectId=record._id
    const accepted={
      projectId,
      status:"rejected"
    }
    await UpdateStatus(accepted).then((res)=>{
      console.log("rejected..",res)
    })

    console.log("record...",record);
    const dataSource=[...gridData]
    const filtered=dataSource.filter((item)=>{
      // /project/:id
      console.log("item..",item)
    })

  }


  const columns = [
    {
      title: 'No.',
      key: 'index',
      render: (text, gridData,index) => index + 1,

    },
    {
      title: 'Date.',
      key: 'index',
      dataIndex:'createdAt'

    },
    {
      title: 'Project Name',
      dataIndex: 'projectName',
    },
    {
      title: 'Project about',
      dataIndex: 'ProjectType',
    },
    {
      title: 'Blockchain/Platform',
      dataIndex: 'blockchain',
    },
    {
      title: 'fundraising?',
      dataIndex: 'fund',
    },
    {
      title: 'Is your team Public or Anonymous?',
      dataIndex: 'publicOrAnonymous',
    },
    ,
 
     {

      title: 'Accept',
      render: (text, record) => (
        <Popconfirm  title="Are you sure want to Accept "  
         onConfirm={()=>handleAccept(record)}   
         placement="rightTop"
         okText="Yes"
        cancelText="No"
              >
        <Button type="primary" style={{ background: "green", borderColor: "" }}  Sucess onClick={()=> console.log(record)}>
          {"Accept"}
        </Button>

        </Popconfirm>
        
        ), 
      },
      {

        title: 'Reject',
        render: (text, record) => (
          <Popconfirm  title="Are you sure want to Accept "  
           onConfirm={()=>handleReject(record)}   
           placement="rightTop"
  
           okText="Yes" 
          cancelText="No"
                >
  
          <Button type="" style={{ backgroundColor: "red", borderColor: "",color:"white" }}  Sucess onClick={()=> console.log(record)}>
            {"Reject"}
          </Button>
          </Popconfirm>
          ), 
        },
  ];

  


  return (
    <div className='table_cover'>
    <Table
     columns={columns} dataSource={gridData}
    bordered
    loading={loading}
    />
    </div>
  )
}

export default TableDashboard
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Table} from 'antd'
import { getProjects } from '../../APIs/UserApi'
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



  const columns = [
    {
      title: 'No.',
      key: 'index',
      render: (text, gridData,index) => index + 1,

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
      title: 'Action',
      dataIndex: 'action',
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
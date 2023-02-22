import React, { useState } from "react";
import "./UpdateProjectForm.css";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { useForm } from "react-hook-form";
import {ProjectDateUpdate} from '../../APIs/UserApi'


import {  DatePicker, Input,Popconfirm } from "antd";
const { RangePicker } = DatePicker;

function UpdateProjectPage() {
  const [date, setDate] = useState([]);
  const [contactId, setContractId] = useState("");

  console.log("contract id..", contactId);

  const location = useLocation();
  const { project } = location.state;
  console.log("update data..", project._id);
  let projectId= project._id

  const handleSubmit = async() => {
    console.log("datas for update..",contactId,date)

    let datas={
        projectId,
        contactId,
        date,
        finalStatus:"cued"
    }

   await ProjectDateUpdate(datas).then(()=>{
    console.log("updated...startdate and end date..")
   })
   
  };

  return (
    <div className="UpdateProjectFormWrapper">
      <p>Date: {project.createdAt}</p>
      <div>
        <p>Project Name : {project.projectName}</p>
        <form>
          <p>Cotract Id:</p>
          
          <Input className="update_input"
          required
            placeholder="Contract id"
            onChange={(e) => {
              setContractId(e.target.value);
            }}
          />
          <br />
          <RangePicker
            onChange={(values) => {
              setDate(
                values.map((item) => {
                  return moment(item).format("DD-MM-YYYY");
                })
              );
            }}
          />
          <br />

          <Popconfirm
             title="Are you sure want submit "
             onConfirm={() => handleSubmit()}
             placement="rightTop"
             okText={<div className="ok_btn">Yes</div>}
             cancelText="No"
          >
          <button type="submit" className="submit_btn">Submit</button>

          </Popconfirm>
        </form>
      </div>
    </div>
  );
}

export default UpdateProjectPage;
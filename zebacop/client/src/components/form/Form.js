import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { submitForm } from "../../APIs/UserApi";
import Swal from "sweetalert2";
import axios from "axios";
import "./Form.css";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [contactId, setContractId] = useState("");

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("projectName", data.projectName);
    formData.append("ProjectType", data.ProjectType);
    formData.append("ProjectTypeother", data.ProjectTypeother);
    formData.append("introduction", data.introduction);
    formData.append("tokeynSymbol", data.tokeynSymbol);
    formData.append("blockchain", data.blockchain);
    formData.append("otherBlockchain", data.otherBlockchain);

    try {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to continue!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, continue!",
      }).then((result) => {
        if (result.isConfirmed) {

          axios.post("http://localhost:5000/admin/project", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          
          .then((response) => {
            console.log("form submitted", response.data);
          });
        } else {
          alert("Retry");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form_wrapper">
      <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Project name">Project name</label>
        <input
          className="form_input"
          name="projectName"
          type="text"
          placeholder="Project name"
          {...register("projectName", { required: true })}
        />
        {errors.projectName && (
          <span className="reqired-field">Project name required</span>
        )}
        <div className="form_inputs_container">
          <label htmlFor="Project name">What is your Project about</label>

          <div className="radio_container">
            <input
              type="radio"
              className="radio_btn"
              value="Gamefi"
              name="type"
              {...register("ProjectType", { required: true })}
            />{" "}
            GameFI
            <input
              type="radio"
              className="radio_btn"
              value="nft"
              name="type"
              {...register("ProjectType", { required: true })}
            />{" "}
            NFT
            <input
              type="radio"
              className="radio_btn"
              value="metaverse"
              name="type"
              {...register("ProjectType", { required: true })}
            />{" "}
            Metaverse
            <input
              type="radio"
              className="radio_btn"
              value="ProjectTypeother"
              name="type"
              {...register("ProjectType", { required: true })}
            />
            Other
          </div>

          <input
            className="input_other"
            type="text"
            name="ProjectTypeother"
            {...register("ProjectTypeother")}
          />

          {errors.ProjectType && (
            <span className="reqired-field">Select a project type</span>
          )}
        </div>
        <label>One Sentence Introduction</label>
        <input
          className="form_input"
          type="text"
          name="introduction"
          id=""
          {...register("introduction", { required: true })}
        />
        {errors.introduction && (
          <span className="reqired-field">Give some introduction</span>
        )}
        <label htmlFor="">Token Symbol / Ticker</label>
        <input
          className="form_input"
          type="text"
          name=""
          id="tokeynSymbol"
          {...register("tokeynSymbol", { required: true })}
        />
        {errors.tokeynSymbol && (
          <span className="reqired-field">Token symbol/Ticker required</span>
        )}
        <label htmlFor="">Discription about project</label>
        <textarea
          name="currentStatus"
          rows="4"
          cols="50"
          {...register("currentStatus", { required: true })}
        ></textarea>
        {errors.currentStatus && (
          <span className="reqired-field">Required</span>
        )}
        <label htmlFor="">Blockchain/Platform</label>
        <input
          type="radio"
          value="BinanceSmartChain"
          name="blockchain"
          {...register("blockchain", { required: true })}
        />{" "}
        Binance Smart Chain
        <input
          type="radio"
          value="Polygon"
          name="blockchain"
          {...register("blockchain", { required: true })}
        />{" "}
        Polygon
        <input
          type="radio"
          value="Avalanche"
          name="blockchain"
          {...register("blockchain", { required: true })}
        />{" "}
        Avalanche
        <input
          type="radio"
          value="Solana"
          name="blockchain"
          {...register("blockchain", { required: true })}
        />{" "}
        Solana
        <input
          type="radio"
          value="other"
          name="blockchain"
          {...register("blockchain", { required: true })}
        />
        Other
        <input
          className="input_other"
          type="text"
          name="otherBlockchain"
          {...register("otherBlockchain")}
        />
        {errors.blockchain && (
          <span className="reqired-field">Select a Platform</span>
        )}
        <label htmlFor="">Social media links</label>
        <input className="input_other" type="text" placeholder="Telegram" />
        <input className="input_other" type="email" placeholder="Email" />
        <input className="input_other" type="text" placeholder="Twitter" />
        <label htmlFor="">Project logo/Image</label>
        <input type="file" {...register("image")} />
        <button className="form_submit" type="">
          Apply
        </button>
      </form>
    </div>
  );
}

export default Form;

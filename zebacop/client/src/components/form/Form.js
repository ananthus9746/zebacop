import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { submitForm } from '../../APIs/UserApi'
import Swal from 'sweetalert2';


import './Form.css'




function Form() {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log("inside Onsubmit", data);

        // const formData = new FormData();
        // formData.append("file", data.file[0])
        // console.log("image appednde data..", formData)

        try {

            Swal.fire({
                title: 'Are you sure?',
                text: "Do you want to continue!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, continue!'
            }).then(async (result) => {
                if (result.isConfirmed) {

                    submitForm(data).then((res) => {
                        console.log("Ress..", res)
                        if (res.status === 200) {
                            Swal.fire(
                                'Submited!',
                                'success'
                            )
                            reset({
                                projectName: "",
                                ProjectType: "",
                                introduction: "",
                                discription: "",
                                tokeynSymbol: "",
                                fund: "",
                                publicOrAnonymous: "",
                                currentStatus: "",
                                blockchain: "",
                            });
                        }
                        else {
                            console.log("form else..")
                            alert("Something went wrong try again..")
                        }
                    })

                }
            })

        } catch (err) {
            console.log(err)
        }


    };

    return (
        <div className='form_wrapper'>
            <form className='form_container' onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="Project name">Project</label>
                <input className='form_input' name="projectName" type="text" placeholder='Project name'  {...register("projectName", { required: true })} />
                {errors.projectName && (
                    <span className="reqired-field">Project name required</span>
                )}
                <label htmlFor="Project name">What is your Project about
                </label>

                <input type="radio" value="Gamefi" name="type" {...register("ProjectType", { required: true })} /> GameFI
                <input type="radio" value="nft" name="type" {...register("ProjectType", { required: true })} /> NFT
                <input type="radio" value="metaverse" name="type" {...register("ProjectType", { required: true })} /> Metaverse

                <input type="radio" value="ProjectTypeother" name='type'  {...register("ProjectType", { required: true })} />Other

                <input className='input_other' type="text" name="ProjectTypeother" {...register("ProjectTypeother",)} />

                {errors.ProjectType && (
                    <span className="reqired-field">Select a project type</span>
                )}

        


                <label>One Sentence Introduction</label>
                <input className='form_input' type="text" name="introduction" id="" {...register("introduction", { required: true })} />
                {errors.introduction && (
                    <span className="reqired-field">Give some introduction</span>
                )}

                <label htmlFor="">Token Symbol / Ticker</label>
                <input className='form_input' type="text" name="" id="tokeynSymbol" {...register("tokeynSymbol", { required: true })} />
                {errors.tokeynSymbol && (
                    <span className="reqired-field">Token symbol/Ticker required</span>
                )}

                <label htmlFor="">Have you already started fundraising?</label>
                <input type="radio" value="yes" name="fund" {...register("fund", { required: true })} /> Yes
                <input type="radio" value="no" name="fund" {...register("fund", { required: true })} /> No
                {errors.fund && (
                    <span className="reqired-field">Yes/No required</span>
                )}

                <label htmlFor="">If Yes, how much?</label>
                <input className='form_input' type="text" name="yesHowMuch" id="" {...register("yesHowMuch")} />

                <label htmlFor="">Is your team Public or Anonymous?</label>
                <input type="radio" value="pubic" name="publicOrAnonymous" {...register("publicOrAnonymous", { required: true })} /> Public
                <input type="radio" value="anonymous" name="publicOrAnonymous" {...register("publicOrAnonymous", { required: true })} /> Anonymous
                {errors.publicOrAnonymous && (
                    <span className="reqired-field">Select a option public/anonymous</span>
                )}

                <label htmlFor="">Describe your Project's current state of development</label>
                <textarea name="currentStatus" rows="4" cols="50" {...register("currentStatus", { required: true })}></textarea>
                {errors.currentStatus && (
                    <span className="reqired-field">Required</span>
                )}


                <label htmlFor="">Blockchain/Platform</label>
                <input type="radio" value="BinanceSmartChain" name="blockchain" {...register("blockchain", { required: true })} /> Binance Smart Chain
                <input type="radio" value="Polygon" name="blockchain" {...register("blockchain", { required: true })} /> Polygon
                <input type="radio" value="Avalanche" name="blockchain" {...register("blockchain", { required: true })} /> Avalanche
                <input type="radio" value="Solana" name="blockchain" {...register("blockchain", { required: true })} /> Solana

                <input type="radio" value="other" name='blockchain'  {...register("blockchain", { required: true })} />Other

                <input className='input_other' type="text" name="otherBlockchain" {...register("otherBlockchain")} />

                {errors.blockchain && (
                    <span className="reqired-field">Select a Platform</span>
                )}

                {/* <label htmlFor="">Project logo or image</label>
                <input {...register("file")} type="file" /> */}


                <button className='form_submit' type=''>Apply</button>
            </form>
        </div>
    )
}

export default Form















{/* <input type="radio" name="reason" value="Fit Description" />Fit Description
                <input type="radio" name="reason" value="Suspicious Behavior" />Suspicious Behavior
                <input type="radio" name="reason" value="No Reason Given" />No Reason Given
 */}




{/* <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Password
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            City
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            State
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                    </div>
                </div>
            </form> */}
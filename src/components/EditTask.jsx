/* eslint-disable react/prop-types */
import { useState } from "react"
import {  notifyEdit,  useTasksDispatch } from "../utils/Utils"


const EditTask = ({task ,setShowEditTask}) => {
   
   const [data , setData] = useState({
      id:task.id,
      Title:task.Title,
      Description:task.Description,
      Tags:[...task.Tags],
      Priority:task.Priority,
      isfavourite:task.isfavourite
    })
    const dispatch =useTasksDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        if(data.Title==="" || data.Description==="" || data.Tags.length===0 || data.Priority===""){
            alert("Please fill all the fields")
        }
        else{
            setData({...data,isfavourite:false})
            
                dispatch({
                    type: 'UPDATE_TASK',
                    payload: data,
                });

                notifyEdit()
                setShowEditTask(false)
              
        }
    }
  return (
    <form
    onSubmit={handleSubmit}
      className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
    >
      <h2
        className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]"
      >
        Add New Task
      </h2>

      {/* <!-- inputs --> */}
      <div className="space-y-9 text-white lg:space-y-10">
        {/* <!-- title --> */}
        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="title">Title</label>
          <input
          defaultValue={task.Title}
          onChange={(e)=>setData({...data,Title:e.target.value})}
            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
            type="text"
            name="title"
            id="title"
            required
          />
        </div>
        {/* <!-- description --> */}
        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="description">Description</label>
          <textarea
            defaultValue={task.Description}
          onChange={(e)=>setData({...data,Description:e.target.value})}
            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
            type="text"
            name="description"
            id="description"
            required
          ></textarea>
        </div>
        {/* <!-- input group --> */}
        <div
          className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20"
        >
          {/* <!-- tags --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="tags">Tags</label>
            <input
            defaultValue={task.Tags}
            onChange={(e)=>setData({...data,Tags:e.target.value.split(",")})}
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="tags"
              id="tags"
              required
            />
          </div>
          {/* <!-- priority --> */}
          <div className="space-y-2 lg:space-y-3">

            <label htmlFor="priority">Priority</label>
            <select
           
            onChange={(e)=>setData({...data,Priority:e.target.value})}
              className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
              name="priority"
              id="priority"
              required
              selected={task.Priority}
              defaultValue={task.Priority}
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>
      {/* <!-- inputs ends --> */}
      <div className="mt-16 flex justify-center lg:mt-20">
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
        >
           Edit Task
        </button>
      </div>
    </form>
  )
}

export default EditTask
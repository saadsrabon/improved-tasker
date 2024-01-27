import { useState } from "react"
import { notify, useTasks, useTasksDispatch } from "../utils/Utils"
import SingleTask from "./SingleTask"
import TableHead from "./TableHead"
import AddTask from "./AddTask"
import EditTask from './EditTask';


const Items = () => {
    const [search, setsearch] =useState('')
	const [showAddTask, setShowAddTask] = useState(false)
   
	const tasks = useTasks()
    const dispatch = useTasksDispatch()
    const handleSearch = (e) => {
        e.preventDefault()
           setsearch(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setsearch(e.target.search.value)
       
    }

	const handleDeleteAll = () => {
		if (window.confirm("Are you sure you want to delete all tasks?")) {
			dispatch({
				type: "Delete_All",
			})
			notify()
		}
	
	}

	let content= []
	if(tasks.length>0){
		content = tasks.filter(task=>task.Title.toLowerCase().includes(search.toLocaleLowerCase())).map((task) => (
			<SingleTask key={task.id} task={task}/>
				))
	}
	
	else{
		content = <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
		<td colSpan="4" className="text-center">No Tasks Available ,Add some new tasks</td>
	</tr>
	}
  return (
    <div className=" relative rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<div className="mb-14 items-center justify-between sm:flex">
					<h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
					<div className="flex items-center space-x-5">
						<form onSubmit={handleSubmit}>
							<div className="flex">
								<div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
									<input name="search" value={search} onChange={handleSearch} type="search" id="search-dropdown"
										className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none" placeholder="Search Task"
										required />
									<button type="submit" className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4">
										<svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
											viewBox="0 0 20 20">
											<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
												d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
										</svg>
										<span className="sr-only">Search</span>
									</button>
								</div>
							</div>
						</form>
						<button onClick={()=>setShowAddTask(true)} className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold">Add Task</button>
						<button onClick={handleDeleteAll} className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">Delete All</button>
					</div>
				</div>
				<div className="overflow-auto">
					<table className="table-fixed overflow-auto xl:w-full">
						<TableHead/>
						<tbody>
                    {
						content.length>0?content:<tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
						<td colSpan="4" className="text-center">No such Task Found</td>
					</tr>

                    }
						</tbody>
					</table>
				</div>
             {showAddTask && <div style={{position:"absolute" ,top:"60%" ,left:"50%" ,transform:"translate(-50%,-50%)"}}> <AddTask setShowAddTask={setShowAddTask}/> </div>}
            
			
			</div>
  )
}

export default Items
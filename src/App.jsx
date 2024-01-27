

import HeroSection from './components/HeroSection'
import Items from './components/Items'
import Navbar from './components/Navbar'
import { TasksProvider } from './context/TaskContext'
function App() {
  
  return (
    <>
      {/* <!-- Navbar Starts --> */}
 <Navbar />
	<section className="mb-20" id="tasks">
		
		<div className="container">
           <HeroSection/>
		{/* <!-- Search Box Ends --> */}

		<TasksProvider>
			<Items/>
			</TasksProvider>
		</div>
	</section>
	{/* <!-- End Table --> */}

	{/* <!-- Footer --> */}
	<footer className="py-6 md:py-8">
		<div className="container mx-auto">
			<p className="text-center text-xs text-[#6A6A6A] lg:text-sm">
				Copyright ©2024 | All rights reserved by Learn with Sumit
			</p>
		</div>
	</footer>
    </>
  )
}

export default App

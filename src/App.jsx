import { Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobPage, { jobLoader } from './pages/JobPage';
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import NotFoundPage from './pages/NotFoundPage';

const addJob = (newJob) => {
  console.log('New job added:', newJob);
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path='/jobs/:id' element={<JobPage />}  loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)
  // createRoutesFromElements(
  //   <Route path="/" element={<App />}>
  //     <Route index element={<Home />} />
  //     <Route path="jobs" element={<ViewAllJobs />} />
  //   </Route>
  // )


const App = () => {
  const addJob = async (newJob) => {
  console.log('New job added:', newJob);
  const response = await fetch(('/api/jobs'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newJob)
  });
  return;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path='/jobs/:id' element={<JobPage />}  loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)

  return (
    <RouterProvider router={router} />
  )
}
// <>
//   <Navbar />
//   <Hero />
//   <HomeCards />
//   <JobListings />
//   <ViewAllJobs />
// </>

export default App
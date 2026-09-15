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
import EditJobPage from './pages/EditJobPage';

const App = () => {
  // Add Job
  const addJob = async (newJob) => {
    console.log('New job added:', newJob);
    const response = await fetch(('/api/jobs'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });

    if (!response.ok) {
      throw new Error(`Failed to add job: ${response.status}`);
    }

    return response.json();
  };

  // Delete Job
  const deleteJob = async (jobId) => {
    //const response = 
    await fetch((`/api/jobs/${jobId}`), {
      method: 'DELETE'
    });
    return;// response.json();
  }

  // Update Job
  const updateJob = async (job) => {
    const response = await fetch((`/api/jobs/${job.id}`), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });

    if (!response.ok) {
      throw new Error(`Failed to update job: ${response.status}`);
    }

    return response.json();
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route 
          path='/add-job' 
          element={<AddJobPage addJobSubmit={addJob} />} 
        />
        <Route 
          path='/edit-job/:id' 
          element={<EditJobPage updateJobSubmit={updateJob} />}  
          loader={jobLoader} 
        />
        <Route 
          path='/jobs/:id' 
          element={<JobPage deleteJob={deleteJob} />}  
          loader={jobLoader} 
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}
export default App
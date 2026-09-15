import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import JobListings from "../components/JobListings";

const JobsPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.message && location.state?.type) {
      if (location.state.type === 'success') {
        toast.success(location.state.message);
      } else if (location.state.type === 'error') {
        toast.error(location.state.message);
      } else {
        toast.info(location.state.message);
      }
    }
  }, [location.state]);

  return (
    <section className="bg-blue-50 px-4 py-6">
        <JobListings />
    </section>
  )
}

export default JobsPage
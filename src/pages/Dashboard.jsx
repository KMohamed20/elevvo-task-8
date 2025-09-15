import { useJobs } from '../context/JobContext'
import JobCard from '../components/JobCard'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const { jobs, exportJobs } = useJobs()

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Job Applications</h1>
        <div className="flex gap-3">
          <Link to="/add" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            + Add Job
          </Link>
          <button onClick={exportJobs} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Export
          </button>
        </div>
      </div>

      {jobs.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow">
          <p className="text-gray-500 text-lg">No applications yet. Add your first job!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Dashboard

import { Link } from 'react-router-dom'

const JobCard = ({ job }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Applied': return 'bg-gray-100 text-gray-800'
      case 'Interviewing': return 'bg-yellow-100 text-yellow-800'
      case 'Offer': return 'bg-green-100 text-green-800'
      case 'Rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Link to={`/job/${job.id}`} className="block">
      <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
        <h3 className="font-bold text-lg text-gray-800 mb-1">{job.title}</h3>
        <p className="text-gray-600 mb-3">{job.company}</p>
        <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(job.status)} mb-3`}>
          {job.status}
        </span>
        <p className="text-sm text-gray-500 mb-2">Applied: {new Date(job.appliedDate).toLocaleDateString()}</p>
        {job.notes && <p className="text-sm text-gray-400 line-clamp-2">"{job.notes}"</p>}
      </div>
    </Link>
  )
}

export default JobCard

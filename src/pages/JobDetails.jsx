import { useParams, useNavigate } from 'react-router-dom'
import { useJobs } from '../context/JobContext'

const JobDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { jobs, updateJob, deleteJob } = useJobs()

  const job = jobs.find(j => j.id === id)

  if (!job) {
    return <div className="p-6 text-center">Job not found.</div>
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      deleteJob(id)
      navigate('/')
    }
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    updateJob(id, {
      company: formData.get('company'),
      title: formData.get('title'),
      status: formData.get('status'),
      appliedDate: formData.get('appliedDate'),
      notes: formData.get('notes')
    })
    navigate('/')
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Job Details</h1>
      <form onSubmit={handleUpdate} className="max-w-2xl bg-white p-6 rounded-xl shadow">
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Company Name *</label>
          <input type="text" name="company" defaultValue={job.company} required className="w-full p-3 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Job Title *</label>
          <input type="text" name="title" defaultValue={job.title} required className="w-full p-3 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Status *</label>
          <select name="status" defaultValue={job.status} required className="w-full p-3 border border-gray-300 rounded">
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Applied Date *</label>
          <input type="date" name="appliedDate" defaultValue={job.appliedDate} required className="w-full p-3 border border-gray-300 rounded" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Notes</label>
          <textarea name="notes" defaultValue={job.notes} rows="4" className="w-full p-3 border border-gray-300 rounded"></textarea>
        </div>
        <div className="flex gap-4">
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Update
          </button>
          <button type="button" onClick={handleDelete} className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Delete
          </button>
          <button type="button" onClick={() => navigate('/')} className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition">
            Back
          </button>
        </div>
      </form>
    </div>
  )
}

export default JobDetails

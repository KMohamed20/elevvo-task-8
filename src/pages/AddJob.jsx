import { useNavigate } from 'react-router-dom'
import { useJobs } from '../context/JobContext'

const AddJob = () => {
  const navigate = useNavigate()
  const { addJob } = useJobs()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const job = {
      company: formData.get('company'),
      title: formData.get('title'),
      status: formData.get('status'),
      appliedDate: formData.get('appliedDate'),
      notes: formData.get('notes')
    }
    addJob(job)
    navigate('/')
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Job Application</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl bg-white p-6 rounded-xl shadow">
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Company Name *</label>
          <input type="text" name="company" required className="w-full p-3 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Job Title *</label>
          <input type="text" name="title" required className="w-full p-3 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Status *</label>
          <select name="status" required className="w-full p-3 border border-gray-300 rounded">
            <option value="">Select status</option>
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Applied Date *</label>
          <input type="date" name="appliedDate" required className="w-full p-3 border border-gray-300 rounded" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Notes (Optional)</label>
          <textarea name="notes" rows="4" className="w-full p-3 border border-gray-300 rounded"></textarea>
        </div>
        <div className="flex gap-4">
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Save Application
          </button>
          <button type="button" onClick={() => navigate('/')} className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddJob

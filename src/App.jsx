import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { JobProvider } from './context/JobContext'
import Dashboard from './pages/Dashboard'
import AddJob from './pages/AddJob'
import JobDetails from './pages/JobDetails'
import './App.css'

function App() {
  return (
    <JobProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddJob />} />
            <Route path="/job/:id" element={<JobDetails />} />
          </Routes>
        </div>
      </Router>
    </JobProvider>
  )
}

export default App

import React, { createContext, useContext, useState, useEffect } from 'react'

const JobContext = createContext()

export const useJobs = () => useContext(JobContext)

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem('jobs')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs))
  }, [jobs])

  const addJob = (job) => {
    setJobs([...jobs, { ...job, id: Date.now().toString() }])
  }

  const updateJob = (id, updatedFields) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, ...updatedFields } : job))
  }

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id))
  }

  const exportJobs = () => {
    const blob = new Blob([JSON.stringify(jobs, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'job-applications.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const importJobs = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result)
        if (Array.isArray(parsed)) {
          setJobs(parsed)
          alert('✅ Jobs imported successfully!')
        } else {
          alert('❌ Invalid file format.')
        }
      } catch (err) {
        alert('❌ Could not parse file.')
      }
    }
    reader.readAsText(file)
  }

  return (
    <JobContext.Provider value={{ jobs, addJob, updateJob, deleteJob, exportJobs, importJobs }}>
      {children}
    </JobContext.Provider>
  )
}

import { useState } from 'react'
import gitHubLogo from './assets/github-icon.svg'
import linkedinInLogo from './assets/linkedin-icon.svg'
import './App.css'

function App() {
  const gitHubUrl = import.meta.env.VITE_GITHUB_URL
  const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL

  return (
    <>
      <div>
        <a href={gitHubUrl} target="_blank">
          <img src={gitHubLogo} className="logo" alt="Vite logo" />
        </a>
        <a href={linkedInUrl} target="_blank">
          <img src={linkedinInLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Daniel J. Cox</h1>
      <div className="card">
       <h2>Coming Soon</h2>
      </div>
      <li>
        About
        </li>
      <li>
        Blog
        </li>
      <li>
        Recipes?
        </li>
    </>
  )
}

export default App

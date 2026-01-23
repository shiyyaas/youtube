import { useState } from 'react'
import './App.css'
import PageHeader from './layots/PageHeader'
import Sidebar from './layots/Sidebar'

function App() {

  return (
  <>
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className='flex'>
        <Sidebar />
        <div>main videos</div>
      </div>
    </div>
  </>
  )
}

export default App

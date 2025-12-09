import { useState } from 'react'
import './App.css'
import PageHeader from './layots/PageHeader'

function App() {

  return (
  <>
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className='flex'>
        <div>sidebaar</div>
        <div>main videos</div>
      </div>
    </div>
  </>
  )
}

export default App

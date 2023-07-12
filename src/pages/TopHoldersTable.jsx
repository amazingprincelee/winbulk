import React from 'react'
import Table from '../components/Table'

function TopHoldersTable() {
  return (
    <div className='container space-above'>
        <h1 className='text-center' style={{color:"white"}}>Welcome to Top Holders Table</h1>
        <div className='top-holder-table'>
        <Table />
        </div>
        
    </div>
  )
}

export default TopHoldersTable
import React from 'react'
import Table from '../components/Table'

function TopHoldersTable() {
  return (
    <div className='container space-above'>
        <h1 className='text-center' style={{color:"white"}}>Top Holders</h1>
        <p className='text-center fs-4 text-white'>Join and earn BNB from every sales</p>
        <div className='top-holder-table'>
        <Table />
        </div>
        
    </div>
  )
}

export default TopHoldersTable
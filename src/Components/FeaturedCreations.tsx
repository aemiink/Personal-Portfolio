import { Button } from '@mui/material'
import React from 'react'
import '../Assets/css/featured.css'

export default function FeaturedCreations() {
  return (
    <div className='FeaturedCreations'>
      <h1 className='FeCrTitle'> Featured Creations </h1>
      <div className='FeCrCategory'>
        <form className='FeCrCategoryForm' action="">
            <Button> All</Button>
            <Button> Branding </Button>
            <Button> UI/UX Design </Button>
            <Button> Web App </Button>
            <Button> Education </Button>
        </form>
      </div>
      <div className='FESearch'>
        <form action="">
            <input type="search" name='search' id='search' className='search' placeholder='Search Anything...' />
        </form>
      </div>
      
    </div>
  )
}

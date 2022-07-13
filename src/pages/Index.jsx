import React from 'react'


const packages = [
  'tailwindcss',
  'redux-toolkit',
  'react-redux',
  'react-router-dom',
  'react-icons',
  'react-helmet'
]



function Index() {
  return (
    <div>
      <div>
        <center>my Boilerplate</center>
        <center>the packages</center>
        <div>
          {
            packages.map((i,index)=>{return <span className='block p-1 my-3 mx-2 bg-[rgba(0,0,0,.5)] text-[#FFFF] rounded-lg'><code>{i}</code></span>})
          }
        </div>
      </div>
    </div>
  )
}

export default Index
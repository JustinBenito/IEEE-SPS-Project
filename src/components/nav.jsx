import React from 'react'

const Nav = React.forwardRef((props, ref) => {

  const onSpeaker = () => {
    console.log(ref)
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<>

<nav class="bg-white border-b-4 border-[#005197] dark:bg-gray-900">
  <div class="max-w-screen-xl gap-4 flex flex-row  items-center justify-center mx-auto p-4">
    <a href="https://www.ssn.edu.in/" class="flex items-center">
        <img src="https://www.ssn.edu.in/wp-content/uploads/2019/12/logo.jpg" class="w-18" alt="SSN Logo" />   
    </a>
    <div className='flex-col flex text-center'>
    <h1 className='md:text-5xl font-bold text-xl text-[#005197]'><span className='italic'>SSN</span>  College of Engineering</h1>
    <h1 className='md:text-xl font-bold text-sm'>Department of Electronics and Communication</h1>
    </div>
    <a href="https://signalprocessingsociety.org/community-involvement/seasonal-schools" class="flex items-center">
      <img src="https://signalprocessingsociety.org/sites/default/files/uploads/images/logos/sps_75anniv_logos/CMYK/SPS_75Years_Color_CMYK.jpg" class="md:h-24 h-14" alt="IEEE SPS Logo" />   
    </a>
  </div>
</nav>

<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <ul class="flex flex-row justify-between items-center w-full font-medium  text-sm">
            <li>
                <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
            </li>
            <li>
                <a onClick={onSpeaker} class="text-gray-900 dark:text-white hover:underline">Speakers</a>
            </li>
            <li>
                <a href="https://signalprocessingsociety.org/" class="text-gray-900 dark:text-white hover:underline">IEEE SPS</a>
            </li>
            <li>
                <a href="https://www.ssn.edu.in" class="text-gray-900 dark:text-white hover:underline">SSNCE</a>
            </li>
        </ul>
    </div>
</nav>

</>
  )
})

export default Nav
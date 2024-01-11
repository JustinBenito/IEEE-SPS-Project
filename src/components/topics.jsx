import React from 'react'

 const Topics = () => {
  return (
    <div className='text-center mt-5 border-gray-100 max-w-5xl mx-auto gap-2'
    >
    <h1 className='text-3xl p-4 font-bold border-b-2 mb-6'>Topics</h1>
    
    <div id="topics" className='flex flex-wrap justify-center m-2 gap-6'>
    
    <a 
      style={{
        background: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url('https://tryengineering.org/wp-content/uploads/bigstock-Blue-Neon-Audio-Sound-Voice-Wa-478617217-1024x410.jpg')`,
          backgroundSize: '100% 100%', 
        backgroundRepeat: 'no-repeat',
      }}
    class="hover:scale-110 transition-all ease-in-out justify-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="text-2xl tracking-tight text-white dark:text-white">Signal Processing in the past, <br></br> and an introduction <br></br> to the present.</h5>
</a>

<a 
      style={{
        background: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url('https://st2.depositphotos.com/1025323/10161/i/450/depositphotos_101612624-stock-photo-signal-processing-background.jpg')`,
          backgroundSize: '100% 100%', 
        backgroundRepeat: 'no-repeat',
      }}
class="hover:scale-110 transition-all ease-in-out block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="text-2xl tracking-tight text-white dark:text-white">Perspectives on the union of signal processing and machine learning.</h5>
</a>

<a 
      style={{
        background: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP4A3kGWSwlKob2hRKrUYdhcWhT-OHHE-Du73HbiLWHoE8glz236vzV5ZAi0IdVby4vDg&usqp=CAU')`,
          backgroundSize: '100% 100%', 
        backgroundRepeat: 'no-repeat',
      }}
class="hover:scale-110 transition-all ease-in-out block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="text-2xl tracking-tight text-white dark:text-white">Overview of signal processing and machine learning-based speech and audio applications.</h5>
</a>

<a 
      style={{
        background: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url('https://signalprocessingsociety.org/sites/default/files/styles/medium_blog/public/sensing_general.jpg?itok=01RCYqM5')`,
          backgroundSize: '120% 100%', 
        backgroundRepeat: 'no-repeat',
      }}
class="hover:scale-110 transition-all ease-in-out block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="text-2xl tracking-tight text-white dark:text-white"><br></br>The Future of Signal Processing</h5>
</a>

<a 
      style={{
        background: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url('https://img.pikbest.com/ai/illus_our/20230427/b8877a1ebd924c466b3046b2ea1e1bce.jpg!w700wp')`,
          backgroundSize: '120% 100%', 
        backgroundRepeat: 'no-repeat',
      }}
class="hover:scale-110 transition-all ease-in-out block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="text-2xl tracking-tight text-white dark:text-white">Hands-on session on feature engineering and machine learning for speech and audio applications</h5>
</a>



    {/* <h3 className='p-2'></h3>
    <h3>Perspectives on the union of signal processing and machine learning.</h3>
    <h3>Overview of signal processing and machine learning-based speech and audio applications.</h3><br></br>
    <h3>Scope of feature engineering, and the pitfalls of brute force machine learning</h3><br></br>
    <h3>Future of Signal Processing</h3>
    <h3>6. Hands-on session on feature engineering and machine learning for speech and audio applications</h3><br></br> */}

    </div>

    </div>
    
  )
}

export default Topics
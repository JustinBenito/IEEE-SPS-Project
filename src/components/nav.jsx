import React, { useState, useRef } from 'react';

const Nav = React.forwardRef((props, ref) => {
  const onSpeaker = () => {
    console.log(ref)
    // if (ref.current) {
    //   ref.current.scrollIntoView({ behavior: 'smooth' });
    // }
    const targetElement = document.getElementById('speaker');
    console.log(targetElement) // Replace 'targetComponent' with the actual ID of your target component
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // You can customize the scrolling behavior
    }
  
  };


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="bg-white border-b-4 border-[#005197] dark:bg-gray-900">
        <div className="max-w-screen-xl gap-4 flex flex-row  items-center justify-center mx-auto p-4">
          <a href="https://www.ssn.edu.in/" className="flex items-center">
            <img
              src="https://www.ssn.edu.in/wp-content/uploads/2019/12/logo.jpg"
              className="md:w-32 md:h-16 w-24"
              alt="SSN Logo"
            />
          </a>
          <div className="flex-col flex text-center">
            <h1 className="md:text-5xl font-bold text-xl text-[#005197]">
              Sri Sivasubramaniya Nadar <br />
              College of Engineering
            </h1>
            <h1 className="md:text-xl font-bold text-sm">
              Department of Electronics and Communication
            </h1>
          </div>
          <a href="https://signalprocessingsociety.org/community-involvement/seasonal-schools" className="flex items-center">
            <img
              src="https://signalprocessingsociety.org/sites/default/files/uploads/images/logos/sps_75anniv_logos/CMYK/SPS_75Years_Color_CMYK.jpg"
              className="md:h-24 md:w-28 w-14"
              alt="IEEE SPS Logo"
            />
          </a>
        </div>
      </nav>

      <nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <ul className="flex flex-row justify-between items-center w-full font-medium  text-sm">
            <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline font-bold capitalize" aria-current="page">HOME</a>
            </li>
            <li>
                <a onClick={onSpeaker} className="text-gray-900 dark:text-white hover:underline font-bold capitalize">SPEAKERS</a>
            </li>
            <li>
                <a onClick={openModal} href="#" className="text-gray-900 dark:text-white hover:underline font-bold capitalize">SCHEDULE</a>
            </li>
            <li>
                <a onClick={openModal} href="#" className=" text-gray-900 dark:text-white hover:underline font-bold capitalize">UPDATES</a>
            </li>
        </ul>
    </div>
</nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-2 transition-opacity ease-in-out">
          <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>

          <div className="modal-container flex-col relative  bg-white w-96 mx-auto rounded-lg transition-opacity ease-in-out shadow-lg z-50 p-4">
          <button
                className="modal-close absolute font-bold right-2 top-3 mb-4 text-black hover:text-gray-700"
                onClick={closeModal}
              >
                x
              </button>
            <div className="modal-content  ">
              <h2 className="text-2xl font-semibold ">You will be Updated Shortly...</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

function App() {
  const speakersRef = useRef(null);

  return (
    <div>
      <Nav ref={speakersRef} />
    </div>
  );
}

export default App;

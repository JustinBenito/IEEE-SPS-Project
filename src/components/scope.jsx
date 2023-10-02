import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


 const Scope = () => {

    const controls = useAnimation();
  const [ref, inView] = useInView();

  const animation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
    transition: { duration: 2,ease: 'easeInOut'  },
  };

  // Trigger the animation when the element is in the viewport
  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <div className='text-center mt-5 border-gray-100 max-w-5xl mx-auto gap-2'
    ref={ref}
    >
            <motion.h1
        className='text-3xl p-4 font-bold border-b-2 mb-6'
        variants={animation}
        initial="initial"
        animate={controls}
        exit="exit"
      >Scope</motion.h1>

<motion.p
        className='text-justify md:text-lg p-4 text-sm'
        variants={animation}
        initial="initial"
        animate={controls}
        exit="exit"
      >
     <strong>Deep neural networks</strong> can learn directly from the magnitude spectrum, the two-dimensional convolutional neural networks can learn directly from spectrograms and the Recurrent neural networks can learn directly from the time-domain signal.
All these networks combined, can directly learn to transform speech in one language to another. These are big claims, and such claims make any signal processing engineer wonder, <span className='italic font-bold'>"Is signal processing relevant in the age of neural networks, and is feature engineering irrelevant" ? </span>They also inspire an aspiring student to skip signal
processing, and embrace the higher abstractions of this knowledge, wherein thoughts of <strong>“signals”</strong> fade away to pave way for an all encompassing term <strong>“data”</strong>.
     </motion.p>
    <br/>
    <motion.p
        className='text-justify md:text-lg text-sm p-4'
        variants={animation}
        initial="initial"
        animate={controls}
        exit="exit"
      >
        This seasonal school aims at reinstating signal processing as the foundation of <strong>speech and audio signal processing </strong> , and aims to explain why it is still relevant. It aims to show that even though signal processing methods are not the only way to solve modern day pattern recognition problems, the principles are still relevant. The topics in this workshop are aimed to provide students and researchers with the right tools to navigate the array of modern day research problems, and show that signal processing methods can guide design choices in <strong> machine learning algorithms.</strong>
        </motion.p>
    </div>

  )
}

export default Scope;
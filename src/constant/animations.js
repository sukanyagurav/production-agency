export const variants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1,
      delay,
    },
  },
});

export const clipPathVariant =()=>({
  hidden:{
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    opacity:0
  }, 
  show:{
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    opacity:1,
    transition:{
      type: 'spring',
      duration: 3
    }
  }
})
export const fromLeft = (direction)=>({
  hidden:{
    x:  direction === 'left' ? '100px' : direction === 'right' ? '-100px' : 0,
    opacity:0
  },show: {
    x: 0,
  opacity:1,
    transition: {
      type: 'spring',
      duration: 1,
  
    },
  },
})

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});


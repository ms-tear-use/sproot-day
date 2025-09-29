import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [visibleCount, setVisibleCount] = useState(1)
    const [showWoodstock, setShowWoodstock] = useState(false)
    const [showBagText, setShowBagText] = useState(false)
    const navigate = useNavigate()
    const sentences = [
    "hi bubby :)",
    "i have something to show you hehe (˶ᵔ ᵕ ᵔ˶)"

  ]

  const handleClick = () => {
    if (visibleCount < sentences.length) {
      setVisibleCount(visibleCount + 1)
    } else if (visibleCount === sentences.length && !showWoodstock) {
      setShowWoodstock(true)
    } else if (showWoodstock && !showBagText) {
      setShowBagText(true)
    } else {
      navigate('/pictures')
    }
  }
  return (
    <div 
      className="flex flex-col min-h-screen  cursor-pointer w-full items-center justify-center over-flow-clip" 
      onClick={handleClick}
    >
      <div className="w-[90%] max-w-[400px] px-8">
        {sentences.slice(0, visibleCount).map((sentence, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y:8 }}
            animate={{ opacity: 1, y:0}}
            transition={{ duration: 1.2 }}
            className="text-4xl font-light text-white drop-shadow-2xl shadow-black/50"
            style={{ 
              fontFamily: 'Kalam, cursive',
              textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 0 1px 0 #000, 1px 0 0 #000, 0 -1px 0 #000, -1px 0 0 #000, 0 0 10px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.2), 0 0 60px rgba(0, 0, 0, 0.1), 0 0 80px rgba(0, 0, 0, 0.05)'
            }}
          >
            {sentence}
          </motion.p>
        ))}
        {showWoodstock && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center mt-8"
          >
            <img 
              src="/src/assets/woodstockbag.png" 
              alt="Woodstock with bag" 
              className="w-56 h-56 object-contain"
            />
          </motion.div>
        )}
        {showBagText && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl font-light text-white drop-shadow-2xl shadow-black/50 mt-4"
            style={{ 
              fontFamily: 'Kalam, cursive',
              textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 0 1px 0 #000, 1px 0 0 #000, 0 -1px 0 #000, -1px 0 0 #000, 0 0 10px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.2), 0 0 60px rgba(0, 0, 0, 0.1), 0 0 80px rgba(0, 0, 0, 0.05)'
            }}
          >
            hmmmm what's inside the bag kaya... ( •̀ - • )?
          </motion.p>
        )}
      </div>
    </div>
  )
}

export default Home
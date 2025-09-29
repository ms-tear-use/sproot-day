import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import "../assets/css/card.css";
import { Link } from 'react-router-dom';

function Card() {
  const [cardClass, setCardClass] = useState("");
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const fullText = "happy birthday sproot !!! <3";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const toggleCard = () => {
    if (cardClass === "" || cardClass === "close-half") {
      setCardClass("open-half");
      setIsCardOpened(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("open-fully");
        timerRef.current = null;
      }, 1000);
    } else {
      setCardClass("close-half");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("");
        timerRef.current = null;
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-clip">
      <div className="w-[400px]  h-screen flex flex-col items-center justify-center">
        <motion.div initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          transition={{ duration: 1.2 }}>
          <div id="card" className={`${cardClass}`} onClick={toggleCard}>
            <div id="card-inside">
              <div className="wrap">
                <br></br>
                <p>ayen,</p>
                <p>happy birthday, bubby!</p>
                <p>i can’t believe i get to celebrate another one of your birthdays with you.</p>
                <p>i'm excited for many more to come so i can keep giving you all my love (and more gifts pa in the future hehe 🎁✨)</p>
                <p>
                  enjoy your special day today, and i hope you like this little gift i made for you.
                </p>
                <p>
                  i love you always! 😗💞
                </p>
                <p className="signed">love, sandra :)</p>
              </div>
            </div>

            <div id="card-front">
              <div className="wrap flex flex-col items-center justify-center h-full py-8">
                <div className="text-center mb-6">
                  <h1
                    className="font-light text-sm sm:text-base md:text-lg text-white leading-tight"
                    style={{
                      fontFamily: 'Kalam, cursive',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </h1>
                </div>
                <img
                  src="/src/assets/woodstockletter.png"
                  alt="Woodstock"
                  className="w-40 h-40 object-contain"
                />
              </div>
            </div>
          </div>

        </motion.div>

        {/* prone to bugs */}
        {isCardOpened && (
          <motion.div className="-mt-[3rem] flex flex-col items-center" initial={{ opacity: 0, visibility: "hidden" }}
            animate={{ opacity: 1, visibility: "visible" }}
            transition={{ duration: 1.2 }}>
              <span className="mb-2 text-lg font-semibold text-white drop-shadow" style={{ fontFamily: 'Kalam, cursive' }}>and next... your cake</span>
              <Link to='/cake' className="mt-2 transition-all duration-200 hover:scale-110">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                  style={{
                    textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000'
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
          </motion.div>
        )}

      </div>

    </div>

  );
}

export default Card;
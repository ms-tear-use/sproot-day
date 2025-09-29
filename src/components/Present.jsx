import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SectionWrapper from './SectionWrapper'
import "../assets/css/present.css";
function Present() {
  const checkboxRef = useRef(null);
  const navigate = useNavigate();
  const [isGiftOpened, setIsGiftOpened] = useState(false);

  const handleGiftClick = () => {
    setIsGiftOpened(true);
  };

  const handleReset = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
      setIsGiftOpened(false);
    }
    navigate('/');
  };

  return (
    <SectionWrapper>
      <div className='mb-64'>
        <h1
          className="absolute -top-[7rem] left-0 right-0 text-center flex items-center justify-center text-4xl font-light text-white drop-shadow-2xl shadow-black/50"
          style={{
            fontFamily: 'Kalam, cursive',
            textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 0 1px 0 #000, 1px 0 0 #000, 0 -1px 0 #000, -1px 0 0 #000, 0 0 10px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.2), 0 0 60px rgba(0, 0, 0, 0.1), 0 0 80px rgba(0, 0, 0, 0.05)'
          }}
        >
          now open your gift!
        </h1>
        {isGiftOpened && (
          <button
            onClick={handleReset}
            className="absolute -top-[3rem] right-8 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-10 group hover:scale-110"
            title="Back to Home"
          >
            <svg
              className="w-6 h-6 transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="birthday-gift">
        <input
          id="click"
          type="checkbox"
          ref={checkboxRef}
          onChange={handleGiftClick}
        />
        <label className="gift" htmlFor="click">
          <div className="gift-top"></div>
          <div className="gift-bottom"></div>

          {/* Ticket 1 - Entire ticket clickable */}
          <a
            href="https://open.spotify.com/playlist/0KHmR27E0GfgRsDO6jeYzJ?si=5670a692fd9c4d5f"
            target="_blank"
            rel="noopener noreferrer"
            className="ticket-link"
          >
            <div id="raffle-red" className="entry raffle raffle-1">
              <div className="no-scale">
                <img src="/src/assets/snoopymusic.png" alt="Snoopy Music" />
              </div>
            </div>
          </a>




          {/* Ticket 2 - Snoopy Movie */}
          <a
            href="https://www.youtube.com/watch?v=y1cBhJLNNXU&list=RDy1cBhJLNNXU&start_radio=1"
            target="_blank"
            rel="noopener noreferrer"
            className="ticket-link"
          >
            <div id="raffle-red" className="entry raffle raffle-2">
              <div className="no-scale">
                <img
                  src="/src/assets/snoopymovie.png"
                  alt="Snoopy Movie"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "contain",
                    marginBottom: "6px"
                  }}
                />
              </div>
            </div>
          </a>

          {/* Ticket 3 - Entire ticket clickable */}
          <a
            href="https://www.youtube.com/watch?v=y1cBhJLNNXU&list=RDy1cBhJLNNXU&start_radio=1"
            target="_blank"
            rel="noopener noreferrer"
            className="ticket-link"
          >
            <div id="raffle-red" className="entry raffle raffle-3">
              <div className="no-scale">
                <img
                  src="/src/assets/snoopylisten.png"
                  alt="Snoopy Listens"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "contain",
                    marginBottom: "6px"
                  }}
                />
              </div>
            </div>
          </a>

        </label>
      </div>

    </SectionWrapper>
  )
}

export default Present
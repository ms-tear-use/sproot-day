import { useEffect, useState } from "react";
import "../assets/css/cake.css";
import { CakeSVG } from "../assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Cake() {
  // You may want to tweak these audio codes more to your liking.
  const [candlesBlownOut, setCandlesBlownOut] = useState(false);
  const [micPermissionGranted, setMicPermissionGranted] = useState(false);

  useEffect(() => {
    let audioContext;
    let analyser;
    let dataArray;
    let blowStartTime = null;

    async function initBlowDetection() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        audioContext = new (window.AudioContext || window.AudioContext)();
        analyser = audioContext.createAnalyser();
        const source = audioContext.createMediaStreamSource(stream);

        analyser.fftSize = 512;
        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
        source.connect(analyser);

        detectBlow();
      } catch (error) {
        console.error("Microphone access denied:", error);
      }
    }

    function detectBlow() {
      if (!analyser || !dataArray) return;
      analyser.getByteFrequencyData(dataArray);
      const lowFrequencyValues = dataArray.slice(0, 15);
      const averageLowFrequency =
        lowFrequencyValues.reduce((sum, value) => sum + value, 0) /
        lowFrequencyValues.length;

      const blowThreshold = 100; // Moderate threshold
      const requiredDuration = 1500; // 1. 5 sec blow required

      if (averageLowFrequency > blowThreshold) {
        if (!blowStartTime) {
          blowStartTime = performance.now();
        } else if (performance.now() - blowStartTime > requiredDuration) {
          setCandlesBlownOut(true);
        }
      } else {
        if (blowStartTime && performance.now() - blowStartTime > 200) {
          blowStartTime = null;
        }
      }

      requestAnimationFrame(detectBlow);
    }

    setTimeout(() => {
      initBlowDetection();
      setMicPermissionGranted(true);
    }, 10000); //permission delay

    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);

  return (
    <>
      <div className="bg-black/80 h-screen w-screen flex items-center justify-center overflow-hidden relative">
        {candlesBlownOut && (
          <div className="absolute inset-0 z-50 overflow-hidden">
            {/* Confetti pieces */}
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-sm"
                style={{
                  backgroundColor: [
                    '#c85a5a', // muted red
                    '#a8d5ba', // muted green
                    '#e2d05f'  // muted yellow
                  ][i % 3],
                  left: `${Math.random() * 100}%`,
                  top: '-10px'
                }}
                initial={{ y: -10, rotate: 0 }}
                animate={{
                  y: window.innerHeight + 100,
                  rotate: 360,
                  x: (Math.random() - 0.5) * 200
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2
                }}
              />
            ))}
          </div>
        )}
        {candlesBlownOut && (
          <motion.div
            className="absolute top-20 text-white text-3xl font-bold z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <svg width="800" height="200" viewBox="0 0 400 200">
              <defs>
                <path
                  id="curve"
                  d="M50,150 Q200,50 350,150"
                  fill="transparent"
                  stroke="white"
                />
              </defs>
              <text fontSize="35" fill="white" textAnchor="middle">
                <textPath href="#curve" startOffset="50%">
                  happy sproot day !!
                </textPath>
              </text>
            </svg>
            <Link to="/present" className="absolute top-[30rem] xs:top-[36rem] s:top-[40rem] right-8 text-white transition-all duration-200 hover:scale-110">
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
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
        <div className="relative z-10">
          <div className="absolute -top-48 left-1/2 transform -translate-x-1/2">
            <div className="candle">
              {!candlesBlownOut && (
                <div>
                  <div className="absolute -top-[200px] text-gray-200 text-3xl">
                    <motion.div
                      animate={{ opacity: [0, 0.25, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 8,
                      }}
                      className="block -translate-x-[60px] translate-y-[105px] -rotate-[30deg] text-gray-200 text-xl "
                    >
                      blow
                    </motion.div>
                    <motion.div
                      animate={{ opacity: [0, 0.25, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 9,
                      }}
                      className="block translate-x-10 translate-y-[80px] rotate-[30deg] text-gray-200 text-xl"
                    >
                      blow
                    </motion.div>
                  </div>
                  <div>
                    <div className="flame"></div>
                    <div className="flame"></div>
                    <div className="flame"></div>
                    <div className="flame"></div>
                    <div className="flame"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <CakeSVG />
        </div>
      </div>
    </>
  );
}

export default Cake;

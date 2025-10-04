import React, { useState, useEffect } from "react";
import Ballpit from "../components/home/BallPit";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-screen relative flex items-center justify-center bg-black overflow-hidden">
      {/* Ballpit Background */}
      {/* Ballpit Background */}
      {!isMobile && (
        <div className="absolute inset-0 ">
          <Ballpit
            key="desktop"
            count={100}
            colors={["#9b5de5", "#ffffff", "#000000"]}
            followCursor={false}
            gravity={0.3}
            maxVelocity={0.2}
            wallBounce={0.95}
          />
        </div>
      )}

      {/* Foreground Content */}
      <div className="relative z-50 flex flex-col items-center justify-center text-center text-white p-5 max-w-xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
          TODO APPLICATION
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-gray-300 mb-6">
          Organize your tasks, stay productive, and manage your day efficiently
          with TODO.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/todo"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

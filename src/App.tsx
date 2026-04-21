import React, { useState } from 'react';
import RibbonAnimation from './components/RibbonAnimation';

const App: React.FC = () => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  const handleButtonClick = () => {
    setIsAnimationActive(true);
  };

  const handleAnimationEnd = () => {
    setIsAnimationActive(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Hello World 飘带动画</h1>
        <button
          onClick={handleButtonClick}
          disabled={isAnimationActive}
          className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${isAnimationActive ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white text-indigo-600 hover:bg-indigo-50 hover:text-rose-500 shadow-md hover:shadow-lg hover:scale-105'}`}
        >
          {isAnimationActive ? '动画中...' : '点击我'}
        </button>
        <p className="mt-4 text-gray-600">点击按钮查看Hello World飘带效果</p>
      </div>
      <RibbonAnimation 
        isActive={isAnimationActive} 
        onAnimationEnd={handleAnimationEnd} 
      />
    </div>
  );
};

export default App;
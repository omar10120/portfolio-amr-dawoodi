import React from 'react';
import './Loadder.Moduel.css'

function Loader() {
  return (
    <div className="inline-grid p-1.5 bg-white" style={{ filter: 'blur(4px) contrast(12)' }}>
      <div
        className="relative"
        style={{
          content: '""',
          height: '40px',
          aspectRatio: '3',
          background: `radial-gradient(35% 146% at 50% 159%, transparent 64%, black 66% 98%, transparent 101%) 0 0,
                       radial-gradient(35% 146% at 50% -59%, transparent 64%, black 66% 98%, transparent 101%) 100% 100%`,
          backgroundSize: 'calc(200%/3) 50%',
          backgroundRepeat: 'repeat-x',
          WebkitMask: 'repeating-linear-gradient(90deg, black 0 10%, transparent 0 20%)',
          animation: 'loadingAnim 0.8s infinite linear'
        }}
      />
    </div>
  );
}

export default Loader;

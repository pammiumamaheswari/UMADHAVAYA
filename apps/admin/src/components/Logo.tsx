import React from 'react';

export const AdminLogo: React.FC<{ collapsed?: boolean }> = ({ collapsed = false }) => {
  return (
    <div className="flex items-center gap-3">
      {/* Saree Drape U Monogram Artwork */}
      <svg
        viewBox="0 0 100 100"
        className="h-10 w-10 flex-shrink-0 filter drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="48" fill="#1E0E17" stroke="#C5A059" strokeWidth="1" />
        
        {/* Royal Maroon 'U' / Saree Silhouette */}
        <path
          d="M30 25 C30 55, 38 78, 52 78 C65 78, 70 58, 70 38 C70 32, 68 28, 62 25 C58 23, 56 26, 56 30 C56 42, 64 54, 62 64 C60 70, 52 72, 48 70 C40 66, 38 48, 38 25 Z"
          fill="url(#adminMaroonGrad)"
        />

        <path
          d="M54 22 C56 20, 59 20, 60 23 C61 26, 59 29, 56 29 C53 29, 52 25, 54 22 Z"
          fill="#8A1332"
        />
        <circle cx="61" cy="24" r="3" fill="#8A1332" />
        <circle cx="58" cy="29" r="1" fill="#C5A059" />

        {/* Gold Border On Pallu */}
        <path d="M62 35 Q68 50 78 68 Q75 70 70 66 Q62 52 56 38" fill="#C5A059" />

        {/* Center Lotus */}
        <g transform="translate(42, 52) scale(0.65)">
          <path d="M12 2 C12 12, 0 16, 0 24 C6 24, 12 18, 12 18 C12 18, 18 24, 24 24 C24 16, 12 12, 12 2 Z" fill="#E8D3A2" />
        </g>

        <defs>
          <linearGradient id="adminMaroonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#991B1B" />
            <stop offset="100%" stopColor="#670A1E" />
          </linearGradient>
        </defs>
      </svg>

      {!collapsed && (
        <div className="flex flex-col">
          <span className="font-cinzel text-base font-bold tracking-[0.2em] text-[#FAF7F2] leading-tight">
            UMADHVAYA
          </span>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="h-[0.5px] w-2 bg-[#C5A059]" />
            <span className="text-[#C5A059] text-[8px] tracking-[0.3em] font-sans font-bold uppercase">
              SAREES ENTERPRISE
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

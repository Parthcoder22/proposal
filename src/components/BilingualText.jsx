import React from 'react';

/**
 * Reusable component to render English message with Gujarati translation directly below it.
 */
export default function BilingualText({
  en,
  gu,
  size = 'md',
  align = 'center',
  highlight = false,
  className = '',
}) {
  const enSizes = {
    title: 'text-2xl md:text-3xl font-bold text-[#3D3232] font-cute leading-snug',
    lg: 'text-lg md:text-xl font-bold text-[#3D3232] leading-snug',
    md: 'text-base md:text-lg font-semibold text-[#4A3B32] leading-relaxed',
    sm: 'text-sm md:text-base font-semibold text-[#4A3B32] leading-normal',
  };

  const guSizes = {
    title: 'text-sm md:text-base font-medium text-[#996D76] mt-1 italic',
    lg: 'text-xs md:text-sm font-medium text-[#996D76] mt-1 leading-normal italic',
    md: 'text-xs md:text-sm font-medium text-[#996D76] mt-1 leading-normal italic',
    sm: 'text-[11px] md:text-xs font-medium text-[#996D76] mt-0.5 leading-normal italic',
  };

  const alignments = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  };

  return (
    <div
      className={`flex flex-col ${alignments[align]} ${
        highlight
          ? 'bg-[#FFEBF0] border border-[#FFCCD9] px-4 py-2.5 rounded-2xl shadow-xs'
          : ''
      } ${className}`}
    >
      <div className={`${enSizes[size]} whitespace-pre-line`}>{en}</div>
      {gu && <div className={`${guSizes[size]} whitespace-pre-line`}>{gu}</div>}
    </div>
  );
}

'use client';

import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      
      {/* Logo Container */}
      <div className="logo-intro">
        <Image
          src="/logo.png"
          alt="Krishna Interiors"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

    </div>
  );
}
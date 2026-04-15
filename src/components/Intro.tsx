'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1800); // matches animation

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="logo-intro">
        <Image
          src="/KCC.jpeg"
          alt="Krishna Interiors"
          width={90}
          height={90}
          className="object-contain"
        />
      </div>
    </div>
  );
}
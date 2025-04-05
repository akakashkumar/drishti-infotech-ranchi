// components/SmoothScrollWrapper.js
'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

const SmoothScrollWrapper = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollWrapper;
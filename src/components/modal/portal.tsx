/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export function Portal({ onOpenChange, open, children }: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open && mounted) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      if (mounted) document.body.style.overflow = 'unset';
    };
  }, [open, mounted]);

  const toggleOpenState = () => onOpenChange((prev) => !prev);

  // Return null on server and before mounting
  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="modal-overlay"
      onClick={toggleOpenState}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1000,
      }}
    >
      {children}
    </div>,
    document.body,
  );
}

"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useEffect, useRef, type ReactNode } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  closeLabel?: string;
  children: ReactNode;
};

export default function Modal({ open, onClose, title, closeLabel = "Fechar", children }: ModalProps) {
  const reduceMotion = useReducedMotion();
  const lenis = useLenis();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      lenis?.start();
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, lenis, onClose]);

  const overlayTransition = reduceMotion ? { duration: 0.15 } : { duration: 0.25, ease: [0.22, 1, 0.36, 1] };
  const contentInitial = reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 };
  const contentAnimate = reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={overlayTransition}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-sm rounded-3xl bg-paper p-8 shadow-xl"
            initial={contentInitial}
            animate={contentAnimate}
            exit={contentInitial}
            transition={overlayTransition}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label={closeLabel}
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-neutral-600 transition-colors duration-300 hover:bg-neutral-100 hover:text-neutral-900"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  d="M5 5l14 14M19 5L5 19"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <h2 id="modal-title" className="font-serif text-2xl text-ink">
              {title}
            </h2>

            <div className="mt-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

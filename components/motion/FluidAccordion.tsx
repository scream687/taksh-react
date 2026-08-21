'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface AccordionItemData {
  id: string;
  num: string;
  question: string;
  answer: string;
}

export interface FluidAccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export function FluidAccordion({ items, className = '' }: FluidAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className={`faq-list ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.id}
            className={`faq__item ${isOpen ? 'is-open' : ''}`}
            style={{
              borderBottom: '1px solid var(--border, rgba(0,0,0,0.08))',
              transition: 'border-color 0.25s ease',
            }}
          >
            <button
              type="button"
              className="faq__q"
              onClick={() => toggleItem(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '28px 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                color: 'inherit',
                font: 'inherit',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '13px',
                    color: 'var(--muted, #8E8E93)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.num}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    color: isOpen ? 'var(--blue, #2D5BE3)' : 'inherit',
                    transition: 'color 0.25s ease',
                  }}
                >
                  {item.question}
                </span>
              </div>

              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: isOpen ? 'rgba(45,91,227,0.1)' : 'rgba(0,0,0,0.04)',
                  color: isOpen ? '#2D5BE3' : 'inherit',
                  flexShrink: 0,
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${item.id}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div
                    style={{
                      paddingBottom: '28px',
                      paddingLeft: '48px',
                      fontSize: '16px',
                      lineHeight: '1.65',
                      color: 'var(--ink-secondary, rgba(0,0,0,0.68))',
                      maxWidth: '800px',
                    }}
                  >
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

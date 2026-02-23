"use client";

import { Fragment } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type SplitMode = 'chars' | 'words';

type TagName = 'h1' | 'h2' | 'h3' | 'p' | 'span';

type BaseProps = {
  text: string;
  className?: string;
};

type SplitTextProps = BaseProps & {
  tag?: TagName;
  splitType?: SplitMode;
  staggerMs?: number;
  duration?: number;
  delay?: number;
};

type ScrollFloatProps = BaseProps & {
  stagger?: number;
  duration?: number;
};

type ScrollRevealProps = BaseProps & {
  baseOpacity?: number;
  blurStrength?: number;
  duration?: number;
  stagger?: number;
};

type ShinyTextProps = BaseProps & {
  speed?: number;
  spread?: number;
  playOnce?: boolean;
};

function tokenize(text: string, splitType: SplitMode) {
  if (splitType === 'chars') {
    return text.split('').map((token, index) => ({ token, key: `${token}-${index}` }));
  }

  return text.split(' ').map((token, index) => ({ token, key: `${token}-${index}` }));
}

export function SplitText({
  text,
  className = '',
  tag = 'p',
  splitType = 'chars',
  staggerMs = 40,
  duration = 0.85,
  delay = 0
}: SplitTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const Element = tag;
  const tokens = tokenize(text, splitType);

  if (prefersReducedMotion) {
    return <Element className={className}>{text}</Element>;
  }

  return (
    <Element className={className}>
      {tokens.map((item, index) => (
        <motion.span
          key={item.key}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{
            delay: delay + index * (staggerMs / 1000),
            duration,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-block"
        >
          {item.token === ' ' ? '\u00A0' : item.token}
          {splitType === 'words' && index < tokens.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </Element>
  );
}

export function ScrollFloat({ text, className = '', stagger = 0.03, duration = 0.7 }: ScrollFloatProps) {
  const prefersReducedMotion = useReducedMotion();
  const chars = text.split('');

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {chars.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 24, rotate: 3 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.85 }}
          transition={{
            duration,
            delay: index * stagger,
            ease: [0.2, 0.8, 0.2, 1]
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

export function ScrollReveal({
  text,
  className = '',
  baseOpacity = 0.12,
  blurStrength = 6,
  duration = 0.55,
  stagger = 0.055
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(' ');

  if (prefersReducedMotion) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p className={className}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <motion.span
            initial={{ opacity: baseOpacity, filter: `blur(${blurStrength}px)` }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{
              delay: index * stagger,
              duration,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
          {index < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </p>
  );
}

export function ShinyText({ text, className = '', speed = 2.2, spread = 120, playOnce = true }: ShinyTextProps) {
  return (
    <span
      className={`shiny-text ${className}`.trim()}
      style={{
        ['--shine-speed' as string]: `${speed}s`,
        ['--shine-spread' as string]: `${spread}deg`,
        ['--shine-iterations' as string]: playOnce ? '1' : 'infinite'
      }}
    >
      {text}
    </span>
  );
}

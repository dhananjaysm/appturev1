'use client';
import { useScrollStore } from '#/lib/store';
import { useEffect } from 'react';

const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function (event: any) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(event);
    }, wait);
  };
};
const ScrollComponent = () => {
  const { scrolling, scroll } = useScrollStore((s) => s);
  let prevScrollTop = 0;

  const handleScroll = () => {
    let scrollTop = window.scrollY;
    if (prevScrollTop < scrollTop) {
      scrolling(true);
    } else {
      scrolling(false);
    }
    prevScrollTop = scrollTop;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleStopScrolling);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleStopScrolling);
    };
  }, []);

  const handleStopScrolling = debounce(() => {
    scrolling(false);
  }, 100);
  return <div></div>;
};

export default ScrollComponent;

import { FC, useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdPlayArrow, MdPause } from 'react-icons/md';
import { Button } from './Button';

type ShowCaseProps = {
  items: {
    title: string;
    description: JSX.Element;
  }[];
};

export const Showcase: FC<ShowCaseProps> = ({ items }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [current, setCurrent] = useState(0);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [fadeIn, setFadeIn] = useState(false);

  const isMobile = width <= 768;
  const handleWindowSizeChange = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(false), 500);
    return () => clearTimeout(timer);
  }, [fadeIn]);

  useEffect(() => {
    setFadeIn(true);
  }, [current]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrent((current + 1) % items.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [current, isPlaying, items]);

  const handlePrev = () => {
    setCurrent((current - 1 + items.length) % items.length);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrent((current + 1) % items.length);
    setIsPlaying(false);
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="u-flex u-center u-relative" style={{ height: '600px' }}>
      <div className={`u-flex-column u-relative u-center ${fadeIn ? 'animated fadeIn' : ''}`}>
        <h1 className="headline-3 title uppercase text-dark">{items[current].title}</h1>
        <p className={`${isMobile ? 'text-md' : 'text-lg'} leading-looser-md tracking-looser-md pt-3 mx-10-md`}>
          {items[current].description}
        </p>
      </div>

      <div className="u-absolute u-left-0 u-right-0" style={{ top: '650px' }}>
        <Button animate={true} color="transparent" onClick={handlePrev}>
          <MdKeyboardArrowLeft size={25} onClick={handlePrev} />
        </Button>
        <Button animate={true} color="transparent" onClick={handleTogglePlay}>
          {isPlaying ? <MdPause size={25} /> : <MdPlayArrow size={25} />}
        </Button>
        <Button animate={true} color="transparent" onClick={handleNext}>
          <MdKeyboardArrowRight size={25} />
        </Button>
      </div>
    </div>
  );
};

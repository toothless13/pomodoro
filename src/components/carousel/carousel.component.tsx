import useEmblaCarousel from "embla-carousel-react";
import TimerCard from "../card/timer-card.component";
import { useEffect } from "react";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false});

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <TimerCard time={25} />
        </div>
        <div className="embla__slide">
          <TimerCard time={5} />
        </div>
        <div className="embla__slide">
          <TimerCard time={25} />
        </div>
        <div className="embla__slide">
          <TimerCard time={5} />
        </div>
        <div className="embla__slide">
          <TimerCard time={25} />
        </div>
        <div className="embla__slide">
          <TimerCard time={5} />
        </div>
        <div className="embla__slide">
          <TimerCard time={25} />
        </div>
        <div className="embla__slide">
          <TimerCard time={30} />
        </div>
      </div>
    </div>
  );
};

import useEmblaCarousel from "embla-carousel-react";
import TimerCard from "../card/timer-card.component";
import { useEffect } from "react";
import { NextButton, PrevButton, usePrevNextButtons } from "./carousel-arrow-button.component";
import { TimerCardType } from "../../enums/timer-card.type";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, []);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla pt-52">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <TimerCard time={0.1} type={TimerCardType.Work} />
          </div>
          <div className="embla__slide">
            <TimerCard time={0.1} type={TimerCardType.ShortBreak} />
          </div>
          <div className="embla__slide">
            <TimerCard time={25} type={TimerCardType.Work} />
          </div>
          <div className="embla__slide">
            <TimerCard time={5} type={TimerCardType.ShortBreak} />
          </div>
          <div className="embla__slide">
            <TimerCard time={25} type={TimerCardType.Work} />
          </div>
          <div className="embla__slide">
            <TimerCard time={5} type={TimerCardType.ShortBreak} />
          </div>
          <div className="embla__slide">
            <TimerCard time={25} type={TimerCardType.Work} />
          </div>
          <div className="embla__slide">
            <TimerCard time={30} type={TimerCardType.LongBreak} />
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

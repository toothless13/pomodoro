import useEmblaCarousel from "embla-carousel-react";
import TimerCard from "../card/timer-card.component";
import { useEffect } from "react";
import { DotButton, useDotButton } from "./carousel-dot-button.component";
import { NextButton, PrevButton, usePrevNextButtons } from "./carousel-arrow-button.component";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, []);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

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

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

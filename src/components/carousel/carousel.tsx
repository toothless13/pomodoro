import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { TimerCardType } from "../../enums/timerCard.type";
import { useSettingsStore } from "../../stores/useSettingsStore";
import { TimerCard } from "../card/timerCard";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./carouselArrowButton";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

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

  const { autoplayEnabled, toggleAutoplay } = useSettingsStore();

  return (
    <>
      <label htmlFor="autoplay-toggle">Toggle Autoplay</label>
      <input
        type="checkbox"
        onClick={() =>
          toggleAutoplay()
        }
        checked={autoplayEnabled}
        id="autoplay-toggle"
      />
      {autoplayEnabled && <p>Autoplay is enabled</p>}
      <section className="embla pt-52">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <TimerCard
                time={0.1}
                type={TimerCardType.Work}
                emblaApi={emblaApi}
              />
            </div>
            <div className="embla__slide">
              <TimerCard
                time={0.1}
                type={TimerCardType.ShortBreak}
                emblaApi={emblaApi}
              />
            </div>
            <div className="embla__slide">
              <TimerCard
                time={25}
                type={TimerCardType.Work}
                emblaApi={emblaApi}
              />
            </div>
            <div className="embla__slide">
              <TimerCard
                time={5}
                type={TimerCardType.ShortBreak}
                emblaApi={emblaApi}
              />
            </div>
            <div className="embla__slide">
              <TimerCard
                time={25}
                type={TimerCardType.Work}
                emblaApi={emblaApi}
              />
            </div>
            <div className="embla__slide">
              <TimerCard
                time={5}
                type={TimerCardType.ShortBreak}
                emblaApi={emblaApi}
              />
            </div>
            <div className="embla__slide">
              <TimerCard
                time={25}
                type={TimerCardType.Work}
                emblaApi={emblaApi}
              />
            </div>
            <div className="embla__slide">
              <TimerCard
                time={30}
                type={TimerCardType.LongBreak}
                emblaApi={emblaApi}
              />
            </div>
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </section>
    </>
  );
};

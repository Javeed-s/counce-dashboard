import { useEffect } from "react";

interface AnimationOptions {
  duration: number;
  delta: (progress: number) => number;
  step: (delta: number) => void;
  delay?: number;
  progress?: number;
}

interface FadeOptions {
  duration: number;
}

const Loader: React.FC = () => {
  useEffect(() => {
    const animation = {
      easing: {
        linear: (progress: number): number => progress,
        quadratic: (progress: number): number => Math.pow(progress, 2),
        swing: (progress: number): number => 0.5 - Math.cos(progress * Math.PI) / 2,
        circ: (progress: number): number => 1 - Math.sin(Math.acos(progress)),
        back: (progress: number, x: number): number =>
          Math.pow(progress, 2) * ((x + 1) * progress - x),
        bounce: (progress: number): number => {
          for (let a = 0, b = 1; ; a += b, b /= 2) {
            if (progress >= (7 - 4 * a) / 11) {
              return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
            }
          }
        },
        elastic: (progress: number, x: number): number =>
          Math.pow(2, 10 * (progress - 1)) * Math.cos((20 * Math.PI * x) / 3 * progress),
      },
      animate: (options: AnimationOptions): void => {
        const start = new Date();
        const id = setInterval(() => {
          const timePassed = new Date().getTime() - start.getTime();
          let progress = timePassed / options.duration;
          if (progress > 1) progress = 1;
          options.progress = progress;
          const delta = options.delta(progress);
          options.step(delta);
          if (progress === 1) clearInterval(id);
        }, options.delay || 10);
      },
      fadeOut: (element: HTMLElement, options: FadeOptions): void => {
        const to = 1;
        animation.animate({
          duration: options.duration,
          delta: function (progress: number) {
            return animation.easing.swing(progress);
          },
          step: function (delta: number) {
            element.style.opacity = (to - delta).toString();
          },
        });
      },
      fadeIn: (element: HTMLElement, options: FadeOptions): void => {
        const to = 0;
        animation.animate({
          duration: options.duration,
          delta: function (progress: number) {
            return animation.easing.swing(progress);
          },
          step: function (delta: number) {
            element.style.opacity = (to + delta).toString();
          },
        });
      },
    };

    const load = document.getElementById('loading');
    if (load) {
      setTimeout(() => {
        animation.fadeOut(load, { duration: 20 });
        load.classList.add('d-block');
      }, 1000);
    }
  }, []);

  return (
    <div id="loading">
      <div id="loading-center"></div>
    </div>
  );
};

export default Loader;

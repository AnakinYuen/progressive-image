(() => {
  class ProgressiveImage extends HTMLImageElement {
    static getIntersectionObserver() {
      if (!ProgressiveImage.intersectionObserver) {
        ProgressiveImage.intersectionObserver = new IntersectionObserver(
          (entries) => {
            entries
              .filter((e) => e.isIntersecting)
              .forEach((e) => {
                e.target.load();
                ProgressiveImage.intersectionObserver.unobserve(e.target);
              });
          },
        );
      }
      return ProgressiveImage.intersectionObserver;
    }

    static observe(element) {
      // https://github.com/w3c/IntersectionObserver/blob/master/polyfill/intersection-observer.js
      if (
        'IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'intersectionRatio' in window.IntersectionObserverEntry.prototype
      ) {
        const intersectionObserver = ProgressiveImage.getIntersectionObserver();
        intersectionObserver.observe(element);
      } else {
        element.load();
        ProgressiveImage.observe = (ele) => ele.load();
      }
    }

    connectedCallback() {
      this.setAttribute('is', 'progressive-image');

      const loadWithoutBlur = (src, srcset) => {
        this.src = src;
        this.srcset = srcset;

        this.addEventListener(
          'load',
          () => {
            this.setAttribute('data-state', 'clear');
            setTimeout(() => this.removeAttribute('data-state'), 1000);
            this.style.backgroundImage = '';
          },
          { once: true },
        );
      };

      const loadWithBlur = (src, srcset, blurrySrc) => {
        const backgroundImage = new Image();
        backgroundImage.onload = () => {
          this.style.backgroundImage = `url(${blurrySrc})`;
          this.setAttribute('data-state', 'blur');
          loadWithoutBlur(src, srcset);
        };
        backgroundImage.src = blurrySrc;
      };

      const blurrySrc = this.getAttribute('data-blurry-src');
      const { src, srcset } = this;
      this.load = () =>
        blurrySrc
          ? loadWithBlur(src, srcset, blurrySrc)
          : loadWithoutBlur(src, srcset);

      ProgressiveImage.observe(this);
      this.removeAttribute('srcset');
      const width = this.getAttribute('width');
      const height = this.getAttribute('height');
      this.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;
      this.setAttribute('data-state', 'loading');
    }
  }

  customElements.define('progressive-image', ProgressiveImage, {
    extends: 'img',
  });
})();

class SmoothScroll {
  constructor(props) {
    const { target, targetPosition, duration, easing, callback } = props;
    this.target = target;
    this.targetPosition = targetPosition || this.target?.offsetTop || 0;
    this.duration = duration || 800;
    this.easing = easing || 'easeInOutQuad';
    this.callback = callback || null;
    this.smoothScrollTo = this.smoothScrollTo.bind(this);
    this.init();
  }

  init() {
    if (!this.target) return;
    this.target.addEventListener('click', this.smoothScrollTo);
  }

  static smoothScrollTo(targetPosition, duration = 800, easingName = 'easeInOutQuad', callback) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Easing functions
    const easings = {
      linear: t => t,
      easeInQuad: t => t * t,
      easeOutQuad: t => t * (2 - t),
      easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
      easeInCubic: t => t * t * t,
      easeOutCubic: t => (--t) * t * t + 1,
      easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    };

    const easing = easings[easingName] || easings.easeInOutQuad;

    // Animation loop
    function animate(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easing(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        if (typeof callback === 'function') callback();
      }
    }

    // Start animation
    requestAnimationFrame(animate);
  }
}

export default SmoothScroll;
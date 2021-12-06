class AnimationV
{
  constructor()
  {
  }

  fadeIn(payload)
  {
    let target = payload.target;
    let params = payload.params;
    let opacity = params.opacity;

    target.style.transition = 'opacity 1s';
    target.style.height = '';
    target.style.width = '';

    target.style.opacity = opacity; // css3 transition will now start the fade
  }

  fadeOut(payload)
  {
    let target = payload.target;

    target.style.transition = 'opacity 1s';
    target.ontransitionend = () =>
    {
      target.style.transition = '';
      target.ontransitionend = null;
      target.style.height = 0;
      target.style.width = 0;
    }

    target.style.opacity = 0; // css3 transition will now start the fade
  }

  slideUp(payload)
  {
    let target = payload.target;
    let params = payload.params;

    target.style.height = target.offsetHeight + 'px';
    let decrease = () =>
    {
      if (target.style.height > 0)
      {
        target.style.height = (target.style.height - 1) + 'px';
        let height = target.style.height;
        this.wait(100);
        requestAnimationFrame(decrease);
      }
    }

    requestAnimationFrame(decrease);
  }

  slideDown()
  {

  }

  async wait(ms)
  {
    return new Promise((resolve, reject) =>
    {
      let timerID = setTimeout(resolve, ms);
    });
  }

}
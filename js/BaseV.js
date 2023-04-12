import { Events } from '/frontschweine/js/Events.js';
import { AnimationX } from '/frontschweine/js/AnimationX.js';

export class BaseV
{
  constructor(anim)
  {
    this.anim = anim;
  }
}

Object.assign(BaseV.prototype, Events);
Object.assign(BaseV.prototype, AnimationX);

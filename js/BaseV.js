import { Events } from '/frontschweine/js/Events.js';

export class BaseV
{
  constructor(anim)
  {
    this.anim = anim;
  }
}

Object.assign(BaseV.prototype, Events);

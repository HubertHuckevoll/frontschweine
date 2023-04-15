import { Events } from '/frontschweine/js/Events.js';

export class FormoBase extends HTMLElement
{
  constructor()
  {
    super();
  }
}

Object.assign(FormoBase.prototype, Events);

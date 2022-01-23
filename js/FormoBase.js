"use strict";

class FormoBase extends HTMLElement
{
  constructor()
  {
    super();
  }
}

Object.assign(FormoBase.prototype, Events);
Object.assign(FormoBase.prototype, AnimationX);

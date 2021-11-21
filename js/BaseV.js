"use strict";

class BaseV
{
  constructor()
  {
  }

  forEachElement(nodeList, callback)
  {
    for (var i = 0; i < nodeList.length; i++)
    {
      callback(nodeList[i]);
    }
  }

  iterate(objArr, callback)
  {
    for (var i = 0; i < objArr.length; i++)
    {
      callback(i, objArr[i]);
    }
  }

  hide(selector)
  {
    var nodes = document.querySelectorAll(selector);
    this.forEachElement(nodes, (node) =>
    {
      node.style.display = 'none';
    });
  }

  show(selector)
  {
    var nodes = document.querySelectorAll(selector);
    this.forEachElement(nodes, (node) =>
    {
      node.style.display = '';
    });
  }

}

Object.assign(BaseV.prototype, Events);

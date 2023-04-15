export class AppR
{

  on(eventTypeStr, ...restArgs)
  {
    let queryStr = '';
    let callback = null;

    // add global variables if not defined yet
    if (window.frontschweine === undefined)
    {
      window.frontschweine = {
        eventTypeIsHandled: {},
        actions: []
      }
    }

    switch (restArgs.length)
    {
      case 1:
        queryStr = null;
        callback = restArgs[0];
      break;

      case 2:
        queryStr = restArgs[0];
        callback = restArgs[1];
      break;
    }

    if ((window.frontschweine.eventTypeIsHandled[eventTypeStr] !== true))
    {
      window.addEventListener(eventTypeStr, this.doHandle.bind(this), false);
      window.frontschweine.eventTypeIsHandled[eventTypeStr] = true;
    }

    window.frontschweine.actions.push(
    {
      'eventTypeStr': eventTypeStr,
      'queryStr': queryStr,
      'callback': callback
    });
  }

  doHandle(ev)
  {
    for (var z = 0; z < window.frontschweine.actions.length; z++)
    {
      if (window.frontschweine.actions[z].eventTypeStr == ev.type)
      {
        if (window.frontschweine.actions[z].queryStr !== null)
        {
          let nodes = document.querySelectorAll(window.frontschweine.actions[z].queryStr);

          nodes.forEach((node) =>
          {
            if (node === ev.target)
            {
              window.frontschweine.actions[z].callback(ev);
            }
          });
        }
        else
        {
          window.frontschweine.actions[z].callback(ev);
        }
      }
    }
  }
}
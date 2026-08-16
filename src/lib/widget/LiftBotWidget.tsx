'use client';

import { useEffect } from 'react';

const WIDGET_SCRIPT_ID = 'liftbot-widget-script';

export default function LiftBotWidget() {
  useEffect(() => {
    if (document.getElementById(WIDGET_SCRIPT_ID)) return;

    const script = document.createElement('script');
    script.id = WIDGET_SCRIPT_ID;
    script.src = 'https://liftbot.brandinglift.com/static/widget.js';
    script.dataset.employeeToken = 'A49r-HvOSi_wfdCtL9LKdlAzZYv01xgv';
    script.dataset.apiBase = 'https://liftbot.brandinglift.com/api/widget';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return null;
}

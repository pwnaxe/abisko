import Script from 'next/script';
import { useEffect } from 'react';

interface CheckfrontWidgetProps {
    widgetId: string;
    itemId: string;
    categoryId: string;
    tid?: string;
    }

const CheckfrontWidget = ({ widgetId, itemId, categoryId, tid = 'Lukaz' }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Inicjalizacja widżetu Checkfront po stronie klienta
      new DROPLET.Widget({
        host: 'jaroabisko.checkfront.com',
        target: widgetId,
        item_id: itemId,
        category_id: categoryId,
        tid: tid,
        options: 'tabs',
        provider: 'droplet',
      }).render();
    }
  }, [widgetId, itemId, categoryId, tid]);

  return (
    <>
      <div id={widgetId}>
        <p id="CHECKFRONT_LOADER" style={{ background: 'url(//jaroabisko.checkfront.com/images/loader.gif) left center no-repeat', padding: '5px 5px 5px 20px' }}>
          Searching Availability...
        </p>
      </div>
      <Script src="//jaroabisko.checkfront.com/lib/interface--0.js" strategy="beforeInteractive" />
    </>
  );
};

export default CheckfrontWidget;

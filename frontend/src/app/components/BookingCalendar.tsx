'use client';
import { useEffect } from 'react';

type WidgetCheckfrontProps = {
  host: string;
  target: string;
  item_id?: string;
  category_id?: string;
  options?: string;
};

const WidgetCheckfront: React.FC<WidgetCheckfrontProps> = ({ host, target, item_id, category_id, options }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `//${host}/lib/interface--0.js`;
    script.onload = () => {
      // @ts-ignore
      new DROPLET.Widget({
        host,
        target,
        item_id,
        category_id,
        options,
        provider: 'droplet',
      }).render();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [host, target, item_id, category_id, options]);

  return (
    <div id={target}>
      <p id="CHECKFRONT_LOADER" style={{ background: `url('//${host}/images/loader.gif') left center no-repeat`, padding: '5px 5px 5px 20px' }}>
        Searching Availability...
      </p>
      <noscript>
        <a href={`https://${host}/reserve/`} style={{ fontSize: '16px' }}>Continue to Secure Booking System &raquo;</a>
      </noscript>
    </div>
  );
};

export default WidgetCheckfront;
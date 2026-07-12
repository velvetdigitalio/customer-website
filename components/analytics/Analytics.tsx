"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  GA_ID,
  META_PIXEL_ID,
  ANALYTICS_ENABLED,
  CONSENT_KEY,
} from "@/lib/analytics";

/**
 * Loads GA4 + Meta Pixel with Google Consent Mode v2. Consent defaults to
 * DENIED; the bootstrap reads a prior "granted" decision from localStorage so
 * returning consented visitors are tracked immediately. The ConsentBanner
 * flips consent to granted on Accept. Renders nothing while IDs are unset.
 */
export function Analytics() {
  const pathname = usePathname();
  const first = useRef(true);

  // Count client-side route changes as page views (the initial load is counted
  // by the bootstrap / gtag config).
  useEffect(() => {
    if (!ANALYTICS_ENABLED) return;
    if (first.current) {
      first.current = false;
      return;
    }
    if (window.gtag && GA_ID) {
      window.gtag("event", "page_view", { page_path: pathname });
    }
    if (window.fbq && META_PIXEL_ID) {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  if (!ANALYTICS_ENABLED) return null;

  const bootstrap = `
(function(){
  var granted=false;try{granted=localStorage.getItem('${CONSENT_KEY}')==='granted';}catch(e){}
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  window.gtag=gtag;
  gtag('consent','default',{ad_storage:granted?'granted':'denied',ad_user_data:granted?'granted':'denied',ad_personalization:granted?'granted':'denied',analytics_storage:granted?'granted':'denied',wait_for_update:500});
  gtag('js',new Date());
  ${GA_ID ? `gtag('config','${GA_ID}');` : ``}
  ${
    META_PIXEL_ID
      ? `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('consent',granted?'grant':'revoke');
  fbq('init','${META_PIXEL_ID}');
  fbq('track','PageView');`
      : ``
  }
})();`;

  // Plain inline <script> so it lands in the static HTML and runs on page load
  // — Consent Mode must set its defaults before gtag.js processes anything.
  return (
    <>
      <script
        id="vd-analytics-bootstrap"
        dangerouslySetInnerHTML={{ __html: bootstrap }}
      />
      {GA_ID ? (
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
      ) : null}
    </>
  );
}

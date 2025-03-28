"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GoatCounterTracker() {
  const pathname = usePathname();

  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    if (typeof window !== "undefined" && (window as any).goatcounter) {
      (window as any).goatcounter.count({
        path: pathname,
      });
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
  }, [pathname]);

  return (
    <script
      data-goatcounter="https://kohaku-cri.goatcounter.com/count"
      async
      src="//gc.zgo.at/count.js"
    ></script>
  );
}

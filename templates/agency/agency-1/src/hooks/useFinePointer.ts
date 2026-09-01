import { useSyncExternalStore } from "react";

const query = "(pointer: fine)";

function subscribe(cb: () => void) {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

/** True when the device has a fine pointer (mouse/trackpad).
 *  Custom cursor and magnetic effects are desktop-only. */
export function useFinePointer(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

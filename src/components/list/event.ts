type EventHanlder = (event?: Event) => void;

export let supportsPassive = false;

export function on(
  target: HTMLElement,
  event: string,
  handler: EventHanlder,
  passive = false
) {
  target.addEventListener(
    event,
    handler,
    supportsPassive ? { capture: false, passive } : false
  );
}

export function off(target: HTMLElement, event: string, handler: EventHanlder) {
  target.removeEventListener(event, handler);
}

export function stop(event: Event) {
  event.stopPropagation();
}

export function prevent(event: Event) {
  event.preventDefault();
}

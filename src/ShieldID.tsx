import React, { FC, HTMLAttributes } from 'react';
import { useShield } from './Subgraph';
// import Fields from './data/fields.json';
// import Hardwares from './data/hardware.json';
// import Frames from './data/frames.json';

export interface ShieldIDProps extends HTMLAttributes<SVGElement> {
  /** A Shield ID referencing the Shields collection. */
  shieldId: number;
}

/**
 * A custom Shield component.
 */
export const ShieldID: FC<ShieldIDProps> = React.memo(
  ({ shieldId, ...props }) => {
    const shield = useShield(shieldId);
    return (
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 220 264"
        xmlSpace="preserve"
        dangerouslySetInnerHTML={{
          __html:
            shield?.svg ||
            '<path d="M152,72h0l1.79,4.33L137.4,96h-4.8L116.21,76.33,118,72h34Zm.83,58,1-2.33L137.4,108h-4.8l-16.39,19.67,1,2.33ZM113,78.75l-1,.42v45.66l1,.42,16-19.17V97.92Zm-5,46.08V79.17l-1-.42L91,97.92v8.16l16,19.17ZM82.6,108,66.21,127.67l1,2.33h35.66l1-2.33L87.4,108ZM141,157.92v8.16l7.89,9.47H151A49.87,49.87,0,0,0,160,147v-7l-3-1.25Zm-62,0L63,138.75,60,140v7a49.83,49.83,0,0,0,9,28.56h2.15L79,166.08Zm62-60v8.16l16,19.17,3-1.25V80l-3-1.25Zm5.29,80.75L137.4,168h-4.8L116,187.92v7.2l2.12,1.22a49.86,49.86,0,0,0,28.17-15ZM137.4,156l16.39-19.67-1-2.33H117.17l-1,2.32L132.6,156ZM104,195.15v-7.23L87.4,168H82.61l-8.9,10.67v2.7a49.86,49.86,0,0,0,28.21,15Zm25-37.23-16-19.17-1,.42V184l1.46.73L129,166.08ZM108,184V139.17l-1-.42L91,157.92v8.16l15.54,18.65ZM63,125.25l16-19.17V97.92L63,78.75,60,80v44ZM87.4,156l16.39-19.67-1-2.33H67.17l-1,2.32L82.6,156ZM68,72h0l-1.79,4.32L82.6,96h4.8l16.39-19.67L102,72H68Z" fill="none" stroke="#767676"/>',
        }}
        {...props}
      />
    );
  }
);

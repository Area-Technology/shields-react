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
        dangerouslySetInnerHTML={{ __html: shield?.svg || '' }}
        {...props}
      />
    );
  }
);

import React, { FC, HTMLAttributes } from 'react';
import Hardwares from './data/hardware.json';

export interface HardwareProps extends HTMLAttributes<SVGElement> {
  /** A Hardware ID, between 0 and 120. */
  hardwareId: number;
}

/**
 * A custom Hardware component.
 */
export const Hardware: FC<HardwareProps> = React.memo(
  ({ hardwareId, ...props }) => {
    return (
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 220 264"
        xmlSpace="preserve"
        dangerouslySetInnerHTML={{ __html: Hardwares[hardwareId].svg }}
        {...props}
      />
    );
  }
);

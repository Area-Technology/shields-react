import React, { FC, HTMLAttributes } from 'react';
import Fields from './data/fields.json';
import Hardwares from './data/hardware.json';
import Frames from './data/frames.json';
import { replaceFieldColors } from './Frame';

export interface ShieldProps extends HTMLAttributes<SVGElement> {
  /** A Field ID between 0 and 299. */
  fieldId: number;
  /** An array of hex-based color values. */
  colors: string[];
  /** A Hardware ID between 0 and 120. */
  hardwareId: number;
  /** A Frame ID between 0 and 5. */
  frameId: number;
}

/**
 * A custom Shield component.
 */
export const Shield: FC<ShieldProps> = React.memo(
  ({ fieldId, colors, hardwareId, frameId, ...props }) => {
    return (
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 220 264"
        xmlSpace="preserve"
        dangerouslySetInnerHTML={{
          __html: [
            replaceFieldColors(Fields[fieldId].svg, colors),
            Hardwares[hardwareId].svg,
            Frames[frameId].svg,
          ].join(''),
        }}
        {...props}
      />
    );
  }
);

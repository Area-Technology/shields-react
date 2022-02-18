import React, { FC, HTMLAttributes } from 'react';
import Frames from './data/frames.json';

export interface FrameProps extends HTMLAttributes<SVGElement> {
  /** A Field ID, between 0 and 5. */
  frameId: number;
}

export const replaceFieldColors = (svgString: string, colors: string[]) => {
  return svgString
    .replace(new RegExp('#CCC', 'g'), colors[0])
    .replace(new RegExp('#1A1A1A', 'g'), colors[1])
    .replace(new RegExp('gray', 'g'), colors[2])
    .replace(new RegExp('#FEFEFE', 'g'), colors[3]);
};

/**
 * A custom Frame component.
 */
export const Frame: FC<FrameProps> = React.memo(({ frameId, ...props }) => {
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 220 264"
      xmlSpace="preserve"
      dangerouslySetInnerHTML={{ __html: Frames[frameId].svg }}
      {...props}
    />
  );
});

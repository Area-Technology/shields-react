import React, { FC, HTMLAttributes } from 'react';
import Fields from './data/fields.json';
import { replaceFieldColors } from './Frame';

export interface FieldProps extends HTMLAttributes<SVGElement> {
  /** A Field ID, between 0 and 299. */
  fieldId: number;
  /** An array of hex-based color values. */
  colors: string[];
}

/**
 * A custom Field component.
 */
export const Field: FC<FieldProps> = React.memo(
  ({ fieldId, colors, ...props }) => {
    return (
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 220 264"
        xmlSpace="preserve"
        dangerouslySetInnerHTML={{
          __html: replaceFieldColors(Fields[fieldId].svg, colors),
        }}
        {...props}
      />
    );
  }
);

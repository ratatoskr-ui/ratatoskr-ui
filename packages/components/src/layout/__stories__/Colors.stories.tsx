import * as React from 'react';
import { theme } from '../../theme';
import { ColorSwatch, ColorSwatchGrid } from '../../utils/storybook';

export default {
  title: 'Core/Foundations/Colors',
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export function Primary() {
  return (
    <ColorSwatchGrid>
      <ColorSwatch title="Blue 01" hex={theme.colors.blue01} />
      <ColorSwatch title="Blue 02" hex={theme.colors.blue02} />
      <ColorSwatch title="Blue 03" hex={theme.colors.blue03} />
      <ColorSwatch title="Blue 04" hex={theme.colors.blue04} />
      <ColorSwatch title="Blue 05" hex={theme.colors.blue05} />
      <ColorSwatch title="Blue 06" hex={theme.colors.blue06} />
      <ColorSwatch title="Blue 07" hex={theme.colors.blue07} />
      <ColorSwatch title="Blue 08" hex={theme.colors.blue08} />
      <ColorSwatch title="Blue 09" hex={theme.colors.blue09} />
      <ColorSwatch title="Blue 10" hex={theme.colors.blue10} />
    </ColorSwatchGrid>
  );
}

export function Secondary() {
  return (
    <ColorSwatchGrid>
      <ColorSwatch title="Indogo 01" hex={theme.colors.indigo01} />
      <ColorSwatch title="Indogo 02" hex={theme.colors.indigo02} />
      <ColorSwatch title="Indogo 03" hex={theme.colors.indigo03} />
      <ColorSwatch title="Indogo 04" hex={theme.colors.indigo04} />
      <ColorSwatch title="Indogo 05" hex={theme.colors.indigo05} />
      <ColorSwatch title="Indogo 06" hex={theme.colors.indigo06} />
      <ColorSwatch title="Indogo 07" hex={theme.colors.indigo07} />
      <ColorSwatch title="Indogo 08" hex={theme.colors.indigo08} />
      <ColorSwatch title="Indogo 09" hex={theme.colors.indigo09} />
      <ColorSwatch title="Indogo 10" hex={theme.colors.indigo10} />
    </ColorSwatchGrid>
  );
}

export function Tertiary() {
  return (
    <ColorSwatchGrid>
      <ColorSwatch title="Turquoise 01" hex={theme.colors.turquoise01} />
      <ColorSwatch title="Turquoise 02" hex={theme.colors.turquoise02} />
      <ColorSwatch title="Turquoise 03" hex={theme.colors.turquoise03} />
      <ColorSwatch title="Turquoise 04" hex={theme.colors.turquoise04} />
      <ColorSwatch title="Turquoise 05" hex={theme.colors.turquoise05} />
      <ColorSwatch title="Turquoise 06" hex={theme.colors.turquoise06} />
      <ColorSwatch title="Turquoise 07" hex={theme.colors.turquoise07} />
      <ColorSwatch title="Turquoise 08" hex={theme.colors.turquoise08} />
      <ColorSwatch title="Turquoise 09" hex={theme.colors.turquoise09} />
      <ColorSwatch title="Turquoise 10" hex={theme.colors.turquoise10} />
    </ColorSwatchGrid>
  );
}

export function FunctionalGreen() {
  return (
    <ColorSwatchGrid>
      <ColorSwatch title="Green 01" hex={theme.colors.green01} />
      <ColorSwatch title="Green 02" hex={theme.colors.green02} />
      <ColorSwatch title="Green 03" hex={theme.colors.green03} />
      <ColorSwatch title="Green 04" hex={theme.colors.green04} />
      <ColorSwatch title="Green 05" hex={theme.colors.green05} />
      <ColorSwatch title="Green 06" hex={theme.colors.green06} />
      <ColorSwatch title="Green 07" hex={theme.colors.green07} />
      <ColorSwatch title="Green 08" hex={theme.colors.green08} />
      <ColorSwatch title="Green 09" hex={theme.colors.green09} />
      <ColorSwatch title="Green 10" hex={theme.colors.green10} />
    </ColorSwatchGrid>
  );
}

export function FunctionalYellow() {
  return (
    <ColorSwatchGrid>
      <ColorSwatch title="Yellow 01" hex={theme.colors.yellow01} />
      <ColorSwatch title="Yellow 02" hex={theme.colors.yellow02} />
      <ColorSwatch title="Yellow 03" hex={theme.colors.yellow03} />
      <ColorSwatch title="Yellow 04" hex={theme.colors.yellow04} />
      <ColorSwatch title="Yellow 05" hex={theme.colors.yellow05} />
      <ColorSwatch title="Yellow 06" hex={theme.colors.yellow06} />
      <ColorSwatch title="Yellow 07" hex={theme.colors.yellow07} />
      <ColorSwatch title="Yellow 08" hex={theme.colors.yellow08} />
      <ColorSwatch title="Yellow 09" hex={theme.colors.yellow09} />
      <ColorSwatch title="Yellow 10" hex={theme.colors.yellow10} />
    </ColorSwatchGrid>
  );
}

export function FunctionalRed() {
  return (
    <ColorSwatchGrid>
      <ColorSwatch title="Red 01" hex={theme.colors.red01} />
      <ColorSwatch title="Red 02" hex={theme.colors.red02} />
      <ColorSwatch title="Red 03" hex={theme.colors.red03} />
      <ColorSwatch title="Red 04" hex={theme.colors.red04} />
      <ColorSwatch title="Red 05" hex={theme.colors.red05} />
      <ColorSwatch title="Red 06" hex={theme.colors.red06} />
      <ColorSwatch title="Red 07" hex={theme.colors.red07} />
      <ColorSwatch title="Red 08" hex={theme.colors.red08} />
      <ColorSwatch title="Red 09" hex={theme.colors.red09} />
      <ColorSwatch title="Red 10" hex={theme.colors.red10} />
    </ColorSwatchGrid>
  );
}

export function Neutral() {
  return (
    <>
      <ColorSwatchGrid>
        <ColorSwatch
          title="Grey Light 01"
          hex={theme.colors.greylight01}
          hasBorder
        />
        <ColorSwatch
          title="Grey Light 02"
          hex={theme.colors.greylight02}
          hasBorder
        />
        <ColorSwatch title="Grey Light 03" hex={theme.colors.greylight03} />
        <ColorSwatch title="Grey Light 04" hex={theme.colors.greylight04} />
        <ColorSwatch title="Grey Light 05" hex={theme.colors.greylight05} />
      </ColorSwatchGrid>
      <ColorSwatchGrid>
        <ColorSwatch title="Grey Medium 01" hex={theme.colors.greymed01} />
        <ColorSwatch title="Grey Medium 02" hex={theme.colors.greymed02} />
        <ColorSwatch title="Grey Medium 03" hex={theme.colors.greymed03} />
        <ColorSwatch title="Grey Medium 04" hex={theme.colors.greymed04} />
        <ColorSwatch title="Grey Medium 05" hex={theme.colors.greymed05} />
      </ColorSwatchGrid>
      <ColorSwatchGrid>
        <ColorSwatch title="Grey Dark 01" hex={theme.colors.greydark01} />
        <ColorSwatch title="Grey Dark 02" hex={theme.colors.greydark02} />
        <ColorSwatch title="Grey Dark 03" hex={theme.colors.greydark03} />
        <ColorSwatch title="Grey Dark 04" hex={theme.colors.greydark04} />
        <ColorSwatch title="Grey Dark 05" hex={theme.colors.greydark05} />
      </ColorSwatchGrid>
    </>
  );
}

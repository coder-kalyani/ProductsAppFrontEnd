import {Dimensions, PixelRatio} from 'react-native';

// Retrieve initial screen's width
const {height, width} = Dimensions.get('window');
export const wp = (widthPercent: string | number) => {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

export const hp = (heightPercent: string | number) => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};
export function hexToBase64(hex: string | any) {
  const byteArray = [];
  for (let i = 0; i < hex.length; i += 2) {
    byteArray.push(parseInt(hex.substr(i, 2), 16));
  }
  const base64Data = btoa(String.fromCharCode.apply(null, byteArray));
  return base64Data;
}

export function getBleConfigCommand(meterType: string) {
  //Byte:3 => First nibble (0-IRDA, 1- IR, 2-Printer) is the Port and
  // the second nibble (0-1200bps,1-2400,2-4800,3-9600) is the baud rate
  let command = 'FF0201';
  if (meterType === 'SINGLE-PH-IR') {
    command = command + '11';
  } else if (meterType === 'THREE-PH-IR') {
    command = command + '13';
  } else if (meterType === 'SINGLE-PH-IRDA') {
    command = command + '01';
  } else if (meterType === 'THREE-PH-IRDA') {
    command = command + '03';
  }
  command += '03434F4E';
  return command;
}

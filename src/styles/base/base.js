export const colors = {
  primary: '#000',
  secondary: '#FFF',
  activityName: '#5AC18E',
  borderUnactive: '#838B8B',
  error: '#F42C04',
  highlightedBackground: '#5AC1C1',
  highlightedFont: '#C15A8D',
};

export const spacing = {
  xxsSize: '1px',
  xsSize: '3px',
  sSize: '5px',
  mSize: '10px',
  lSize: '15px',
  xlSize: '20px',
  desktopBreakpoint: '680px',
  largeDesktopBreakpoint: '1000px',
};

export const fontSizes = {
  lFontSize: '1.1rem',
  xlFontSize: '3rem',
};

export const effects = {
  outline: color => `-${spacing.xxsSize} 0 ${color}, 0 ${spacing.xxsSize} ${color}, ${spacing.xxsSize} 0 ${color},
  0 -${spacing.xxsSize} ${color};`,
};

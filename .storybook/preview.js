import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

export const parameters = {
  background: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        valuer: theme.colors.white
      },
      {
        name: 'won-dark',
        valuer: theme.colors.mainMg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  ),
]




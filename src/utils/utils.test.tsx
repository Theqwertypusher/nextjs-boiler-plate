// setup per https://testing-library.com/docs/react-testing-library/setup
import { FC, ReactElement } from 'react';
import { render, queries, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'my-ui-lib';
import { TranslationProvider } from 'my-i18n-lib';
import defaultStrings from 'i18n/en-x-default';

const AllTheProviders: FC = ({ children }) => (
  <ThemeProvider theme="light">
    <TranslationProvider messages={defaultStrings}>
      {children}
    </TranslationProvider>
  </ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, {
  wrapper: AllTheProviders,
  queries: {
    ...queries,
  },
  ...options,
});

export * from '@testing-library/react';
export { customRender as render };

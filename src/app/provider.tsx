'use client';

import NextAdapterApp from 'next-query-params/app';
import { QueryParamProvider } from 'use-query-params';
import AntViVN from 'antd/locale/vi_VN';
import { colors } from '@/utils/colors';
import { quicksand } from '@/utils/fonts';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apollo/http-links';
import { ConfigProvider } from 'antd';
import { ProProvider, createIntl } from '@ant-design/pro-components';
import viVN from './vi.lang';
import { AuthProvider } from '@/context/AuthContext';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/lib';
import LocaleProvider from 'antd/es/locale';
import { ReduxProvider } from '@/redux';

const viVNIntl = createIntl('vi-VN', viVN);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <ApolloProvider client={client}>
        <QueryParamProvider adapter={NextAdapterApp}>
          <ConfigProvider
            locale={AntViVN}
            theme={{
              hashed: true,
              token: {
                colorPrimary: colors.primary,
                fontFamily: quicksand.style.fontFamily,
              },
            }}
          >
            <ProProvider.Provider
              value={{
                intl: viVNIntl,
                // @ts-ignore: Ignore the type error for this line
                token: null,
              }}
            >
              <AuthProvider>
                <NextNProgress color="#29D" />
                <LocaleProvider
                  locale={{
                    locale: 'enUS',
                  }}
                >
                  <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
                </LocaleProvider>
              </AuthProvider>
            </ProProvider.Provider>
          </ConfigProvider>
        </QueryParamProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
}

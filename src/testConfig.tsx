import "./globals.css";

import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n, { initialize, supportedLocales } from "./helpers/i18n";

const locale = {
  name: "Locale",
  description: "Internationalization locale",
  toolbar: {
    icon: "globe",
    items: supportedLocales.map((lang) => ({
      value: lang,
      title: new Intl.DisplayNames(["en"], { type: "language" }).of(lang),
    })),
    showName: true,
  },
};

export const Root = ({ children }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

export const init = async () => {
  await initialize();
  await i18n.changeLanguage(locale);
};

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

export const Root = ({ children }) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initI18n = async () => {
      await initialize();
      setInitialized(true);
    };
    initI18n();
  }, []);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, []);

  return initialized ? (
    <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
  ) : (
    <div>Loading translations...</div>
  );
};

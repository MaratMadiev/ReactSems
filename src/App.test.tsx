import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Полностью мокаем i18n
jest.mock("./i18n", () => ({}), { virtual: true });

// Мокаем react-i18next
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string, options?: any) =>
      key === "unread_messages" ? `У вас ${options.count} сообщений` : key,
  }),
  initReactI18next: { init: () => {} },
}));

test("renders app with notifications", () => {
  render(<App />);
  expect(screen.getByText("📩")).toBeInTheDocument();
  expect(screen.getByText(/У вас \d+ сообщений/)).toBeInTheDocument();
});

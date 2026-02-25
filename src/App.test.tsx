import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Мокаем i18next
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string, options?: any) => {
      if (key === "unread_messages") {
        return `У вас ${options.count} непрочитанных сообщений`;
      }
      return key;
    },
  }),
}));

test("renders message with any number", () => {
  render(<App />);

  // Ищем текст с любым числом и словом "сообщени" (сообщения/сообщений)
  const messageElement = screen.getByText(
    /У вас \d+ (непрочитанных )?сообщени\w*/i,
  );
  expect(messageElement).toBeInTheDocument();
});

test("renders notification icon", () => {
  render(<App />);

  // Проверяем, что иконка отображается
  const iconElement = screen.getByText("📩");
  expect(iconElement).toBeInTheDocument();
});

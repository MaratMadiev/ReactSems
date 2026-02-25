import React from "react";
import { render, screen } from "@testing-library/react";
import Notifications from "./components/Notifications";

// Мок для react-i18next (только то, что реально используется)
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string, options?: { count: number }) => {
      if (key === "unread_messages") {
        return `У вас ${options?.count} сообщений`;
      }
      return key;
    },
  }),
}));

describe("Notifications", () => {
  // Делаем random предсказуемым (всегда 6 сообщений)
  beforeEach(() => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("отображает иконку сообщения", () => {
    render(<Notifications />);
    expect(screen.getByText("📩")).toBeInTheDocument();
  });

  test("отображает правильное количество сообщений (6)", () => {
    render(<Notifications />);
    expect(screen.getByText("У вас 6 сообщений")).toBeInTheDocument();
  });
});

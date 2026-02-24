import React from "react";
import { useTranslation } from "react-i18next";

const Notifications: React.FC = () => {
  let msgCount = Math.floor(Math.random() * 10) + 1;
  const a = 1;
  const now: Date = new Date();
  const { t } = useTranslation();

  const formShortDate = (date: Date): string => {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(date);
  };

  return (
    <div className="notification-card">
      <div className="notification-content">
        <div className="message">
          <p className="msg-icon">📩</p>
          <p className="msg-text">
            {t("unread_messages", { count: msgCount })}
          </p>
          <p className="msg-last-date">(последнее: {formShortDate(now)})</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

import { useState } from "react";

export const useNotificationDemo = () => {
  const [status, setStatus] = useState(null); // success | error | info | null
  const [message, setMessage] = useState("");

  const showToast = (type, msg) => {
    setStatus(type);
    setMessage(msg);
    setTimeout(() => {
      setStatus(null);
      setMessage("");
    }, 3000);
  };

  const sendDemoNotification = async () => {
    if (!("Notification" in window)) {
      showToast("error", "Notifications are not supported in this browser.");
      return;
    }

    if (Notification.permission === "granted") {
      new Notification("BabyBliss Offer", {
        body: "Flat 20% off on your first baby care order! 🎁"
      });
      showToast("success", "Notification sent!");
    } else if (Notification.permission !== "denied") {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        new Notification("BabyBliss Offer", {
          body: "Flat 20% off on your first baby care order! 🎁"
        });
        showToast("success", "Notification sent!");
      } else {
        showToast("error", "Notification permission denied.");
      }
    } else {
      showToast("error", "Notification permission denied in browser settings.");
    }
  };

  return { status, message, showToast, sendDemoNotification };
};

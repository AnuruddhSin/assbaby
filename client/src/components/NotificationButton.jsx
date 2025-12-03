import { useNotificationDemo } from "../hooks/useNotification";
import Toast from "./Toast";

const NotificationButton = () => {
  const { status, message, sendDemoNotification } = useNotificationDemo();

  return (
    <>
      <button
        onClick={sendDemoNotification}
        className="px-4 py-2 rounded-full border border-primary text-primary text-xs bg-white hover:bg-babyYellow"
      >
        Send Notification
      </button>
      <Toast status={status} message={message} />
    </>
  );
};

export default NotificationButton;

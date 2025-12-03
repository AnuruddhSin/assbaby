import NotificationButton from "../../components/NotificationButton";

const NotificationDemoPage = () => (
  <div className="max-w-md mx-auto px-4 pt-8 pb-10 text-center">
    <h1 className="text-2xl font-bold mb-3">Notification Demo</h1>
    <p className="text-sm text-gray-600 mb-4">
      Click the button below to trigger a demo notification. This uses the Web
      Notifications API to simulate a BabyBliss offer.
    </p>
    <NotificationButton />
  </div>
);

export default NotificationDemoPage;

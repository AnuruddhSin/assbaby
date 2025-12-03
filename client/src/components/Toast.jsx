const colorMap = {
  success: "bg-green-500",
  error: "bg-red-500",
  info: "bg-blue-500"
};

const Toast = ({ status, message }) => {
  if (!status) return null;
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div
        className={`px-4 py-2 text-white rounded-full shadow-lg ${colorMap[status]}`}
      >
        {message}
      </div>
    </div>
  );
};

export default Toast;

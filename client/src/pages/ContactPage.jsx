const ContactPage = () => (
  <div className="max-w-md mx-auto px-4 pt-8 pb-10">
    <h1 className="text-2xl font-bold mb-3">Contact Us</h1>
    <p className="text-sm text-gray-600 mb-4">
      This is a demo project. For feedback, just imagine you’re emailing
      support@babybliss.demo 😄
    </p>
    <form className="bg-white rounded-2xl p-4 shadow-sm space-y-3 text-sm">
      <div>
        <label className="block mb-1">Name</label>
        <input className="w-full px-3 py-2 border rounded-xl" />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input className="w-full px-3 py-2 border rounded-xl" />
      </div>
      <div>
        <label className="block mb-1">Message</label>
        <textarea className="w-full px-3 py-2 border rounded-xl" rows="4" />
      </div>
      <button
        type="button"
        className="w-full px-4 py-2 rounded-full bg-primary text-white"
      >
        Send (demo)
      </button>
    </form>
  </div>
);

export default ContactPage;

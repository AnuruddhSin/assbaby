import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../utils/apiClient";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await api.post("/auth/login", form);
      login(res.data);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto px-4 pt-10 pb-10">
      <h1 className="text-2xl font-bold mb-4">Welcome Back</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-4 shadow-sm space-y-3 text-sm"
      >
        <div>
          <label className="block mb-1">Email</label>
          <input
            name="email"
            type="email"
            className="w-full px-3 py-2 border rounded-xl"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            name="password"
            type="password"
            className="w-full px-3 py-2 border rounded-xl"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className="w-full mt-2 px-4 py-2 rounded-full bg-primary text-white"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="mt-3 text-xs text-gray-500">
        New parent?{" "}
        <Link to="/register" className="text-primary font-semibold">
          Create a BabyBliss account
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;

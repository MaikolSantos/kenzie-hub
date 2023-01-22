import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingPage, setLoadingPage] = useState("Carregando...");
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      api.defaults.headers.common["authorization"] = "Bearer " + token;

      async function getProfile() {
        try {
          const response = await api.get("/profile");

          setUser(response.data);

          navigate("/dashboard");
        } catch (error) {
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("@USERID");

          console.log(error);
        }
      }

      getProfile();
    } else {
      setLoadingPage("");
    }
  }, []);

  async function userLogin(data) {
    try {
      setLoading("Carregando...");

      const response = await api.post("/sessions", data);

      toast.success(response.statusText);

      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading("");
    }
  }

  async function userRegister(data) {
    try {
      setLoading("Carregando...");

      const response = await api.post("/users", data);

      toast.success(response.statusText);

      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading("");
    }
  }

  async function getUser(id) {
    const response = await api.get(`/users/${id}`);

    setUser(response.data);
  }

  function userLogout() {
    setUser(null);
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@TOKEN");

    setLoadingPage("");

    navigate("/login");
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loadingPage,
        loading,
        userLogin,
        userRegister,
        userLogout,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

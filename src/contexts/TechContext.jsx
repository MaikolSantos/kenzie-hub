import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { api } from "../services/api";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const [editTech, setEditTech] = useState(null);
  const [techs, setTechs] = useState([]);
  
  const token = localStorage.getItem("@TOKEN");

  async function getTechsUser() {
    const id = localStorage.getItem("@USERID");
    try {
      const response = await api.get("/users/" + id);

      setTechs(response.data.techs);
    } catch (error) {
      console.log(error);
    }
  }

  async function createTech(data) {
    try {
      await toast.promise(
        api.post("/users/techs", data, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        {
          pending: "Criando...",
          success: "Tecnologia criada!",
          error: "Erro na criação da Tecnologia",
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      getTechsUser();
    }
  }

  async function updateTech(data) {
    try {
      await toast.promise(
        api.put("/users/techs/" + editTech.id, data, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        {
          pending: "Atualizando ...",
          success: "Atualização concluída!",
          error: "Erro na atualização",
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      getTechsUser();
    }
  }

  async function deleteTech(id) {
    try {
      const loadingDelete = toast.loading("Deletando");
      await api.delete("/users/techs/" + id, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.update(loadingDelete, {
        render: "Tecnologia Deletada",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
    } finally {
      getTechsUser();
    }
  }

  return (
    <TechContext.Provider
      value={{
        techs,
        editTech,
        setEditTech,
        getTechsUser,
        createTech,
        updateTech,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}

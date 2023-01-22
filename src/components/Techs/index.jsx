import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../Button";
import { Modal } from "../Modal";
import { Form } from "../Form";
import { Input } from "../Input";
import { Select } from "../Select";

import { schema } from "./validationSchema";

import { ContainerTechs } from "./styles";
import { Buttons } from "../Button/styles";

import { TechContext } from "../../contexts/TechContext";
import { CardTech } from "../CardTech";

function Techs() {
  const {
    techs,
    editTech,
    setEditTech,
    getTechsUser,
    createTech,
    updateTech,
    deleteTech,
  } = useContext(TechContext);

  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
    setValue,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const optionsTechStatus = ["Iniciante", "Intermediário", "Avançado"];

  useEffect(() => {
    setValue("title", editTech?.title);
    setValue("status", editTech?.status);
  }, [editTech]);

  useEffect(() => {
    getTechsUser();
  }, []);

  function openAddModal() {
    setIsOpenAddModal(!isOpenAddModal);
    reset();
  }

  function openEditModal(tech) {
    setEditTech(tech);
    setIsOpenEditModal(!isOpenEditModal);
  }

  return (
    <>
      <ContainerTechs>
        <header>
          <h2>Tecnologias</h2>
          <Button
            text={<FaPlus color="white" />}
            height="medium"
            type="icon"
            onClick={openAddModal}
          />
        </header>
        <ul>
          {techs.map((tech) => {
            return (
              <CardTech
                key={tech.id}
                title={tech.title}
                status={tech.status}
                onClickTech={() => openEditModal(tech)}
                onClickTrash={() => deleteTech(tech.id)}
              />
            );
          })}
        </ul>
      </ContainerTechs>
      {isOpenAddModal && (
        <Modal title="Cadastrar Tecnologias" onClick={openAddModal}>
          <Form onSubmit={handleSubmit(createTech)}>
            <Input
              id="title"
              text="Nome"
              type="text"
              placeholder="Digite a tecnologia"
              register={register("title")}
              error={errors.title && errors.title.message}
            />

            <Select
              id="status"
              text="Selecionar status"
              placeholder="Qual o status?"
              register={register("status")}
              error={errors.status && errors.status.message}
              options={optionsTechStatus}
            />

            <Button
              type="submit"
              text="Cadastrar tecnologia"
              primary
              disabled={!isDirty || !isValid}
            />
          </Form>
        </Modal>
      )}
      {isOpenEditModal && (
        <Modal title="Tecnologias Detalhes" onClick={openEditModal}>
          <Form onSubmit={handleSubmit(updateTech)}>
            <Input
              id="title"
              text="Nome"
              type="text"
              placeholder="Digite a tecnologia"
              register={register("title")}
              error={errors.title && errors.title.message}
              disabled
            />

            <Select
              id="status"
              text="Selecionar status"
              placeholder="Qual o status?"
              register={register("status")}
              error={errors.status && errors.status.message}
              options={optionsTechStatus}
            />

            <Buttons>
              <Button
                type="submit"
                text="Salvar alterações"
                primary
                disabled={!isDirty || !isValid}
              />
              <Button
                type="button"
                text="Excluir"
                onClick={() => {
                  deleteTech(editTech.id);
                  setIsOpenEditModal(!isOpenEditModal);
                }}
              />
            </Buttons>
          </Form>
        </Modal>
      )}
    </>
  );
}

export default Techs;

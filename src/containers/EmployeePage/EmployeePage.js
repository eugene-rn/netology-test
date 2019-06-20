import React from "react";
import { Link } from "react-router-dom";
import Button from "components/Button";

const EmployeePage = () => (
  <div>
    <div className="buttons">
      <Link to="/">Назад к списку</Link>
      <Button onClick={() => {}}>Редактировать</Button>
      <div className="info">
        <p>Имя Фамилия</p>
        <p>Должность</p>
        <p>Описание</p>
      </div>
    </div>
  </div>
);

export default EmployeePage;

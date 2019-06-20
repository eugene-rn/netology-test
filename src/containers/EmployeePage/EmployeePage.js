import React from "react";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { makeSelectEmployee } from "containers/HomePage/selectors";
import { makeSelectIsModalOpen } from "containers/App/selectors";
import { openModal, closeModal } from "containers/App/actions";
import { editEmployee } from "containers/HomePage/actions";
import Button from "components/Button";
import Modal from "components/Modal";
import "./styles.css";

const EmployeePage = ({
  employee,
  history,
  isModalOpen,
  onCloseModal,
  onOpenModal,
  onEditEmployee
}) => {
  return (
    <>
      <div className="employee">
        <div className="header">
          <Button onClick={() => history.push("/")}>Назад к списку</Button>
          <h3>Страница сотрудника #{employee.id}</h3>
          <Button onClick={onOpenModal}>Редактировать</Button>
        </div>
        <div className="info">
          <p>
            <b>Имя:</b> {employee.firstName}
          </p>
          <p>
            <b>Фамилия:</b> {employee.lastName}
          </p>
          <p>
            <b>Должность:</b> {employee.position}
          </p>
          <p>
            <b>Описание:</b> {employee.description}
          </p>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isEdit
          onClose={onCloseModal}
          onSubmit={employee => onEditEmployee(employee)}
          initialData={employee}
        />
      )}
    </>
  );
};

const mapStateToProps = (state, props) =>
  createStructuredSelector({
    employee: makeSelectEmployee(+props.match.params.id),
    isModalOpen: makeSelectIsModalOpen()
  });

export const mapDispatchToProps = dispatch => ({
  onOpenModal: () => dispatch(openModal()),
  onCloseModal: () => dispatch(closeModal()),
  onEditEmployee: employee => dispatch(editEmployee(employee))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  withRouter
)(EmployeePage);

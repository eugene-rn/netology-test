import React from "react";
import { compose } from "redux";
import PropTypes from 'prop-types';
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "components/Button";
import { makeSelectIsModalOpen } from "containers/App/selectors";
import { openModal, closeModal } from "containers/App/actions";
import { addEmployee } from "./actions";
import Modal from "components/Modal";
import { makeSelectEmployees } from "./selectors";
import "./styles.css";

const HomePage = ({
  onOpenModal,
  onCloseModal,
  onAddEmployee,
  isModalOpen,
  employees,
  history
}) => {
  return (
    <>
      <div className="table-box">
        <table className="list" cellSpacing="0">
          <thead>
            <tr className="table-header">
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Должность</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(item => (
              <tr
                className="table-line"
                key={item.id}
                onClick={() => history.push(`/${item.id}`)}
              >
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button onClick={onOpenModal}>Добавить сотрудника</Button>
      {isModalOpen && (
        <Modal
          onClose={onCloseModal}
          onSubmit={employee => onAddEmployee(employee)}
        />
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  employees: makeSelectEmployees(),
  isModalOpen: makeSelectIsModalOpen()
});

export const mapDispatchToProps = dispatch => ({
  onOpenModal: () => dispatch(openModal()),
  onCloseModal: () => dispatch(closeModal()),
  onAddEmployee: employee => dispatch(addEmployee(employee))
});

HomePage.propTypes = {
  employees: PropTypes.array,
  isModalOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onAddEmployee: PropTypes.func.isRequired,
}

HomePage.defaultProps = {
  employees: []
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  withRouter
)(HomePage);

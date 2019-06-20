import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import Button from "../Button";
import "./styles.css";

const modalRoot = document.getElementById("modal");

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.element = document.createElement("div");
    this.state = {
      id: props.initialData ? props.initialData.id : null,
      firstName: props.initialData ? props.initialData.firstName : "",
      lastName: props.initialData ? props.initialData.lastName : "",
      position: props.initialData ? props.initialData.position : "",
      description: props.initialData ? props.initialData.description : ""
    };
  }

  componentDidMount() {
    modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSumbit = e => {
    e.preventDefault();
    const { onSubmit, onClose } = this.props;
    onSubmit(this.state);
    onClose();
  };

  renderModal = onClose => {
    const { isEdit } = this.props;
    const { firstName, lastName, position, description } = this.state;
    const isBtnEnabled = firstName && lastName && position && description;

    return (
      <>
        <div className="overlay" onClick={onClose} />
        <div className="modal-box">
          <div className="modal-title">
            {isEdit ? "Редактировать" : "Добавить"} сотрудника
          </div>
          <form>
            <div className="form-box">
              <label htmlFor="firstName" className="form-label">
                Имя
              </label>
              <input
                required
                type="text"
                className="input-text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-box">
              <label htmlFor="lastName">Фамилия</label>
              <input
                required
                type="text"
                className="input-text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-box">
              <label htmlFor="position">Должность</label>
              <input
                required
                type="text"
                className="input-text"
                name="position"
                value={position}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-box">
              <label htmlFor="description">Описание</label>
              <textarea
                required
                name="description"
                onChange={this.handleChange}
                className="area"
                value={description}
              />
            </div>
            <div className="bottom-buttons">
              <Button onClick={this.handleSumbit} disabled={!isBtnEnabled}>
                {isEdit ? "Сохранить" : "Добавить"}
              </Button>
              <Button onClick={onClose} className="red">
                Отменить
              </Button>
            </div>
          </form>
        </div>
      </>
    );
  };

  render() {
    return ReactDOM.createPortal(
      this.renderModal(this.props.onClose),
      this.element
    );
  }
}

Modal.propTypes = {
  isEdit: PropTypes.bool,
  initialData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    position: PropTypes.string,
    description: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

Modal.defaultProps = {
  isEdit: false,
  initialData: null,
}

export default Modal;

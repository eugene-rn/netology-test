import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import "./styles.css";

const modalRoot = document.getElementById("modal");

class Modal extends React.Component {
  constructor() {
    super();
    this.element = document.createElement("div");
    this.state = {
      firstName: "",
      lastName: "",
      position: "",
      description: ""
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
            <Button onClick={this.handleSumbit} disabled={!isBtnEnabled}>
              {isEdit ? "Сохранить" : "Добавить"}
            </Button>
          </form>
        </div>
      </>
    );
  };

  render() {
    return ReactDOM.createPortal(
      this.renderModal(this.props.onClose, this.props.onSave),
      this.element
    );
  }
}

export default Modal;

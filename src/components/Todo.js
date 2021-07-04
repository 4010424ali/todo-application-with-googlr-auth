import React, { Component } from 'react';
import { AiFillDelete, MdEdit } from 'react-icons/all';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Modal } from 'react-responsive-modal';

import { deleteTodo, updateData } from '../redux/actions/todoAction';

class Todo extends Component {
  state = {
    open: false,
    name: '',
  };

  onOpenModal = (name) => {
    this.setState({ name: name, open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  updateTodo(id) {
    this.props.updateData(id, {
      title: this.state.name,
      userId: localStorage.getItem('id'),
    });
    this.setState({ open: false });
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteItem(id) {
    this.props.deleteTodo(id);
    toast.success('Todo deleted successfully');
  }

  render() {
    const { title, id } = this.props.todo;
    const { authenticated } = this.props.user;
    return (
      <div className="container">
        <ToastContainer />
        <div className="todo-inner-flex">
          <h3 className="heading">{title}</h3>
          {authenticated && (
            <div className="ed-btn">
              <AiFillDelete color="red" onClick={() => this.deleteItem(id)} />
              <MdEdit
                className="edit-btn"
                onClick={() => this.onOpenModal(title)}
              />
            </div>
          )}
        </div>
        <Modal open={this.state.open} onClose={this.onCloseModal}>
          <h2 className="model-color">Update Todo</h2>
          <input
            className="model-update"
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter The Todo"
            onChange={this.handleOnChange}
          />
          <input
            onClick={() => this.updateTodo(id)}
            className="model-update-submit"
            type="submit"
            value="update"
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { updateData, deleteTodo })(Todo);

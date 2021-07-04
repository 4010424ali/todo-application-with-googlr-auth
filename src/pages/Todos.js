import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';

// Components import
import Todo from '../components/Todo';
import CreateTodo from '../components/CreateTodo';

// Redux Import
import store from '../redux/store';
import { getTodos } from '../redux/actions/todoAction';
import { getUser } from '../redux/actions/userAction';

class Todos extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  onSuccess(response) {
    store.dispatch(getUser());
    localStorage.setItem('id', response.profileObj.googleId);
    console.log(response.profileObj.googleId);
  }

  render() {
    const { todos } = this.props.todos;
    const { authenticated } = this.props.user;
    return (
      <div>
        {!authenticated && (
          <div className="google">
            <GoogleLogin
              clientId="765614537465-77cjrhpialj9pu86opblnb28q1vto680.apps.googleusercontent.com"
              cookiePolicy={'single_host_origin'}
              onSuccess={this.onSuccess}
              onFailure={(err) => console.log(err)}
            />
          </div>
        )}

        {authenticated && (
          <div className="container">
            <CreateTodo />
          </div>
        )}

        {todos.length === 0 && <h1>Loading....</h1>}
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todo,
  user: state.user,
});

export default connect(mapStateToProps, { getTodos })(Todos);

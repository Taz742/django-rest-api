import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    products: [],
    title: '',
    price: 0,
    user: {
      authorized: false,
      token: '',
      username: '',
      password: '',
      id: -1,
    }
  }

  componentDidMount() {
    axios.get('/api/products/', {
      params: {
        price: 0
      }
    }).then(res => {
      this.setState({
        products: res.data
      });
    });
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  }

  createProduct = () => {
    const {
      title,
      price
    } = this.state;

    axios.post('/api/products/',
    // {
    //   first_name: 'name',
    //   last_name: 'lastname',
    //   instrument: 'instrument',
    //   album_musician: [{
    //     name: 'album_name',
    //     num_stars: 5,
    //   }]
    // }
    {
      title: 'title',
      price: 13,
      detail: {
        description: 'desc',
        fake_child: {
          fake_field: 'nwfff'
        }
      }
    }
    ).then(res => {
      if (res.status === 201)
        this.setState({
          products: [...this.state.products, res.data]
        });
    });
  }

  deleteProduct = (id) => {
    axios.delete(`/api/products/${id}`).then(res => {
      if (res.status === 204)
        this.setState({
          products: this.state.products.filter((product) => product.id !== id)
        })
    });
  }

  updateProduct = (id) => {
    axios.put(`/api/products/${id}/`, {
      title: 'title',
      price: 1,
      detail: {
        description: 'new_desc',
        fake_child: {
          fake_field: 'new_fake_field_value'
        }
      }
    }).then(res => {
      // if (res.status === 204)
      //   this.setState({
      //     products: this.state.products.filter((product) => product.id !== id)
      //   })
    });
  }

  login = () => {
    const {
      username,
      password,
    } = this.state.user;

    axios.get('/api/auth', {
      params: {
        username,
        password
      }
    }).then(res => {
      if (res.status === 200) {
        const { token, user } = res.data;
      }
    })
  }

  render() {
    const {
      title,
      price,
      user: {
        authorized,
        username,
        password
      }
    } = this.state;

    if (!authorized) {
      return (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              this.setState({
                user: {
                  ...this.state.user,
                  username: e.target.value
                }
              })
            }}
          />

          <input
            type="text"
            placeholder="Username"
            value={password}
            onChange={(e) => {
              this.setState({
                user: {
                  ...this.state.user,
                  password: e.target.value
                }
              })
            }}
          />
          <button onClick={this.login}>Login</button>
        </div>
      )
    }

    return (
      <div className="todo">
        <ul className="todo-ul">
          {this.state.products.map((product) => {
            return (
              <li key={product.id} className="todo-item" >
                <span className="todo-title">{`Title-${product.title}/ Price-${product.price}/ Created-${product.created}`}</span>
                <span className="todo-delete" onClick={() => this.deleteProduct(product.id)}>ClickToDelete</span>
                <span className="todo-delete" onClick={() => this.updateProduct(product.id)}>ClickToUpdate</span>
              </li>
            )
          })}
        </ul>

        <div className="create-todo-box">
          <input
            type="text"
            value={title}
            onChange={(e) => {
              this.handleChange('title', e.target.value);
            }}
            className="todo-input"
            placeholder="Title"
          />

          <input
            type="number"
            value={price}
            onChange={(e) => {
              this.handleChange('price', e.target.value);
            }}
            className="todo-input"
          />

          <button onClick={this.createProduct}>Create</button>
        </div>
      </div>
    );
  }
}

export default App;

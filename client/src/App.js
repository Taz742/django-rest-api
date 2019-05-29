// @flow

import React, { Component } from 'react';
import axios from 'axios';
import {
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Input,
  Form,
  FormGroup,
  Label
} from 'reactstrap';
import './App.css';

type UserProfile = {
  authorized: boolean,
  token: string,
  username: string,
  password: string,
  id: number,
};

type FakeChild = {
  id: number,
  fake_field: string,
  product_detail: number,
}

type ProductDetail = {
  id: number,
  description: string,
  fake_child: FakeChild
}

type ProductProfile = {
  created: Date,
  id: number,
  price: number,
  title: string,
  detail: ProductDetail
}

type State = {
  products: Array<ProductProfile>,
  title: string,
  price: number,
  user: UserProfile,
  activeProductIndex: number,
  images: string,
};

type AllProductsResponse = {
  status: number,
  data: {
    count: number,
    results: Array<ProductProfile>
  }
}

class App extends Component<{}, State> {
  state = {
    products: [],
    title: '',
    price: 0,
    images: '',
    user: {
      authorized: false,
      token: '',
      username: 'taz742',
      password: 'admin123',
      id: -1,
    },
    activeProductIndex: -1,
  }

  componentDidMount(): void {
    // this.getProducts();
    this.login();
  }

  getProducts = (): void => {
    axios.get('/api/products/', {
      params: {
        price: 0
      }, headers: {
        Authorization: `Token ${this.state.user.token}`
      }
    }).then((res: AllProductsResponse) => {
      if (res.status === 200) {
        this.setState({
          products: res.data.results,
        });
      }
    });
  }

  handleChange = (key: string, value: string | number): void => {
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
      {
        title,
        price,
        detail: {
          description: 'desc',
          fake_child: {
            fake_field: 'nwfff'
          }
        }
      }, {
        headers: {
          Authorization: `Token ${this.state.user.token}`
        }
      }).then(res => {
        if (res.status === 201)
          this.setState({
            products: [...this.state.products, res.data]
          });
      });
  }

  deleteProduct = (id: number): void => {
    axios.delete(`/api/products/${id}`, {
      headers: {
        Authorization: `Token ${this.state.user.token}`
      }
    }).then((res: any) => {
      if (res.status === 204)
        this.setState({
          products: this.state.products.filter((product) => product.id !== id)
        })
    });
  }

  updateProduct = (id: number): void => {
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

  login = (): void => {
    const {
      username,
      password,
    } = this.state.user;

    axios.post('/api/auth/login/', {
      username,
      password
    }).then(res => {
      if (res.status === 200) {
        const { token, user } = res.data;
        this.setState({
          user: {
            ...this.state.user,
            ...user,
            authorized: true,
            token: token
          }
        }, this.getProducts);
      }
    })
  }

  selectImage = (e: any) => {
    const image: any = e.target.files[0];
    console.log(image);
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
      <Container style={{marginTop: 10}}>
        <Row>
          <Col>
            <ListGroup>
              {this.state.products.map((product) => {
                return (
                  <ListGroupItem
                    active={this.state.activeProductIndex === product.id}
                    onClick={() => {
                      this.setState({
                        activeProductIndex: product.id
                      });
                    }}
                    key={product.id}
                  >
                    <span className="float-left">{`Title-${product.title}/ Price-${product.price}/ Created-${product.created.toString()}`}</span>
                    <span className="float-right" onClick={() => this.deleteProduct(product.id)}>ClickToDelete</span>
                    <span className="float-right" onClick={() => this.updateProduct(product.id)}>ClickToUpdate</span>
                  </ListGroupItem>
                )
              })}
            </ListGroup>
          </Col>
        </Row>

        <Form style={{marginTop: 10}} className="margintop" >
          <FormGroup>
            <Label for="exampleEmail">Title</Label>
            <Input
              type="text"
              name="title"
              id="exampleEmail"
              placeholder="Enter title here"
              value={title}
              onChange={(e) => {
                this.handleChange('title', e.target.value);
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">Price</Label>
            <Input
              type="number"
              name="price"
              id="exampleEmail"
              placeholder="Enter price"
              value={price}
              onChange={(e) => {
                this.handleChange('price', e.target.value);
              }}
            />
          </FormGroup>
          <input type="file" onChange={this.selectImage}/>

          <Button onClick={this.createProduct}>Create</Button>
        </Form>
      </Container>
    );
  }
}

export default App;

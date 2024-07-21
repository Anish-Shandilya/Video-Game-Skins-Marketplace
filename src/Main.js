import "./Main.css"

          import React, { Component } from 'react';

          class Main extends Component {
            
            constructor(props) {
              super(props);
              this.state = {
                imageUrl: '', 
              };
            }

            handleImageUpload(event) {
              const file = event.target.files[0];
              const reader = new FileReader();
          
              reader.onloadend = () => {
                  // console.log('Image URL:', reader.result); // Log the imageUrl
                  this.setState({ imageUrl: reader.result });
              };
          
              if (file) {
                  reader.readAsDataURL(file);
              }
              // console.log('Component state:', this.imageUrl);

          }
          

            render() {
              return (
                <><div class="loader">
                  <div class="box box-1">
                    <div class="side-left"></div>
                    <div class="side-right"></div>
                    <div class="side-top"></div>
                  </div>
                  <div class="box box-2">
                    <div class="side-left"></div>
                    <div class="side-right"></div>
                    <div class="side-top"></div>
                  </div>
                  <div class="box box-3">
                    <div class="side-left"></div>
                    <div class="side-right"></div>
                    <div class="side-top"></div>
                  </div>
                  <div class="box box-4">
                    <div class="side-left"></div>
                    <div class="side-right"></div>
                    <div class="side-top"></div>
                  </div>
                </div><div id="content" style={{ textAlign: 'center', margin: 'auto', width: '60%' }}>
                    <h1 style={{ fontSize: '4em' }}>Add Product</h1>
                    <form onSubmit={(event) => {
                      event.preventDefault();
                      const name = this.productName.value;
                      const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'ether');
                      console.log(this.productcondition);
                      this.props.createProduct(name, price, this.state.imageUrl, this.productcondition.value);
                    } }>
                      <div className="form-group mr-sm-2" style={{ marginBottom: '20px' }} class="group">
                        <input
                          id="productName"
                          type="text"
                          ref={(input) => { this.productName = input; } }
                          className="form-control"
                          class="input"
                          placeholder="Product Name"
                          style={{ fontSize: '1.5em', padding: '10px' }}
                          required />
                      </div>
                      <div className="form-group mr-sm-2" style={{ marginBottom: '20px' }} class="group">
                        <input
                          id="productPrice"
                          type="text"
                          ref={(input) => { this.productPrice = input; } }
                          className="form-control"
                          class="input"
                          placeholder="Product Price"
                          style={{ fontSize: '1.5em', padding: '10px' }}
                          required />
                      </div>
                      <div className="form-group mr-sm-2" style={{ marginBottom: '20px' }} class="group">
                        <input
                          id="productcondition"
                          type="text"
                          ref={(input) => { this.productcondition = input; } }
                          className="form-control"
                          class="input"
                          placeholder="Product Condition"
                          style={{ fontSize: '1.5em', padding: '10px' }}
                          required />
                      </div>
                      <div>
                      <input
                        type="file"
                        onChange={(event) => this.handleImageUpload(event)}
                        className="form-control"
                        placeholder="Product Image"
                        required
                      />

                      </div>
                      <button type="submit" className="btn btn-primary" style={{ fontSize: '1.5em', padding: '15px' }}>Add Product</button>
                    </form>
                    <p>&nbsp;</p>
                    <h2 style={{ fontSize: '2em' }}>Buy Product</h2>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" style={{ width: '10%', textAlign: 'center' }}>#</th>
                          <th scope="col" style={{ width: '20%', textAlign: 'center' }}>Name</th>
                          <th scope="col" style={{ width: '20%', textAlign: 'center' }}>Price</th>
                          <th scope="col" style={{ width: '20%', textAlign: 'center' }}>Condition</th>
                          <th scope="col" style={{ width: '20%', textAlign: 'center' }}>Owner</th>
                          <th scope="col" style={{ width: '30%', textAlign: 'center' }}></th>
                        </tr>
                      </thead>

                      <tbody id="productList">
                              {this.props.products.map((product, key) => (
                              <tr key={key}>
                                <th scope="row">{product.id.toString()}</th>
                                <td>
                                  <img src={'data:image/jpeg;base64,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'} alt="N.A" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                                  {product.name}
                                </td>
                                <td>{window.web3.utils.fromWei(product.price.toString(), 'ether')} Eth</td>
                                <td>Minimal Wear</td>
                                <td>{product.owner}</td>
                                <td>
                                  {!product.purchased ? (
                                    <button
                                      name={product.id}
                                      value={product.price}
                                      onClick={(event) => {
                                        this.props.purchaseProduct(event.target.name, event.target.value);
                                        console.log(product.imageUrl);  
                                      }}
                                      
                                    >
                                      Buy
                                    </button>
                                  ) : null}
                                </td>
                              </tr>
                            ))}

                                    
                       
                      </tbody>

                    </table>
                  </div></>
              );
            }
          }
          
          export default Main;
                                                
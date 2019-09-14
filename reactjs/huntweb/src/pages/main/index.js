import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css'
import {Link} from 'react-router-dom';

export default class Main extends Component {

  state = {
    products:[],
    productInfo:{},
    page:1
  }
  //executado assim que o componente for exibido em tela
  componentDidMount(){
    this.loadProducts();
  }
  //quando a funcao eh do app , a declaracao eh criada como arrow function
  //para pode se referenciar e acessar os outros metodos da classe
  loadProducts = async (page=1) =>{
    const response = await api.get(`/products?page=${page}`);

    const {docs,...productInfo} = response.data;
    //console.log(response.data.docs);
    this.setState({products:docs,productInfo,page});
  }

  prevPage = () =>{
    const {page} = this.state;
    if (page === 1) return;
    const pageNumber = page - 1;
    this.loadProducts(pageNumber);
  }

  nextPage = () =>{
    const {page, productInfo} = this.state;
    if (page === productInfo.pages) return;
    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  }
  //para colocar o codigo javascript no render basta abrir as chaves
  render() {
    const {products,page,productInfo} = this.state;
    return (
    <div className="product-list">

      {products.map(product =>(
        <article key={product._id}>
          <strong>{product.title}</strong>
          <p>{product._id}</p>
          <Link to={`/products/${product._id}`}>Acessar</Link>
        </article>
      ))

      }
      <div className="actions" >

        <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
        <button disabled={page === productInfo.pages} onClick={this.nextPage}> Próximo</button>
      </div>
    </div>
  )}

}

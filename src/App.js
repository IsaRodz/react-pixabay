import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Search from './Components/Search';
import Result from './Components/Result';

class App extends React.Component {

  state = {
    term: '',
    images: [],
    page: ''
  }

  requestAPI = () => {
    let { term, page } = this.state;
    let url = `https://pixabay.com/api/?key=14670081-72de1f652280d95dfe33c7149&q=${term}&per_page=24&page=${page}`;
    // console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({ images: result.hits }))

  }

  searchData = term => {
    // console.log(term);
    this.setState({
      term: term,
      page: 1
    }, () => this.requestAPI())
  }

  prevPage = () => {
    // Leer estado
    let { page } = this.state;

    if (page === 1) return null;

    // Decrementar(?) pagina
    page--;

    // Agregar cambio
    this.setState({ page }, () => this.requestAPI())
    document.documentElement.scrollTop = 0;

  }

  nextPage = () => {
    // Leer estado
    let { page } = this.state;

    // Incrementar pagina
    page += 1;

    // Agregar cambio
    this.setState({ page }, () => this.requestAPI())
    document.documentElement.scrollTop = 0;;

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Images Search</h1>
          <Search searchData={this.searchData} />
        </header>
        <Result
          images={this.state.images}
          nextPage={this.nextPage}
          prevPage={this.prevPage}
        />
      </div>
    );
  }

}

export default App;

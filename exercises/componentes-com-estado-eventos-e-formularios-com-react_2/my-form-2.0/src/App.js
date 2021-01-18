import React from 'react';
import './App.css';
import FormErrors from './FormErrors';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      countryState: '',
      resume: '',
      role: '',
      roleDescription: '',
    };
  }

  handleChange = event => {
    let { name, value } = event.target;
    if (name === 'name') value = value.toUpperCase()
    if(name === 'name') value = value.toUpperCase()
    if(name === 'address') value = this.validateAddress(value)
    this.updateState(name, value) 
  }

  onBlurHandler = event => {
    let { name, value } = event.target;

    if(name === 'city') value = value.match(/^\d/) ? '' : value

    this.updateState(name, value)
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formErrors: {
        ...state.formErrors,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  handleSubmit = event => {
    event.preventDefault();
  }

  validateField(fieldName, value) {

    switch(fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }

    return '';
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <div>
              Nome:
              <input type="name" name="name" maxLength="40" required value={this.state.name} onChange={this.handleChange} />
            </div>
            <div>
              Email:
              <input type="email" name="email" maxLength="50" required value={this.state.email} onChange={this.handleChange} />
            </div>
            <div>
              CPF:
              <input type="text" name="cpf" maxLength="11" required value={this.state.cpf} onChange={this.handleChange} />
            </div>
            <div>
              Endereço:
              <input type="text" name="adress" maxLength="200" required value={this.state.adress} onChange={this.handleChange} />
            </div>
            <div>
              Cidade:
              <input type="text" name="city" maxLength="28" required value={this.state.city} onBlur={this.onBlurHandler} onChange={this.handleChange} />
            </div>
            <div>
              Estado:
              <select name="countryState" required value={this.state.countryState} onChange={this.handleChange}>
                {states.map((value, key) =>
                    <option key={key}>{value}</option>
                    )
                  }
              </select>
            </div>
            <fieldset>
              <legend>Dados Profissionais</legend>
              <div>
                Resumo do currículo:
                <textarea name="resume" maxLength="1000" required value={this.state.resume} onChange={this.handleChange} />
              </div>
              <div>
                Cargo:
                <input type="text" name="role" maxLength="40" required value={this.state.role} onChange={this.handleChange} onMouseEnter={() => {
                    alert('Preencha com cuidado esta informação.');
                  }} />
              </div>
              <div>
                Descrição do cargo:
                <textarea name="roleDescription" maxLength="500" required value={this.state.roleDescription} onChange={this.handleChange} />
              </div>
            </fieldset>
          </fieldset>
        </form>
         <div className="container">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
    )
  }
  
}

export default App;

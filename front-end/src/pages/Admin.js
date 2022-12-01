import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const emailRegex = /\S+@\S+\.\S+/;
const TWELVE = 12;
const SIX = 6;

function Admin() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', password: '', role: 'cliente' });

  const validateEmail = (email) => emailRegex.test(email);

  const validateForm = () => {
    const { password, email, name } = form;
    if (password.length >= SIX && name.length <= TWELVE && validateEmail(email)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleSubmit = async (e) => {
    const { name, email, password, role } = form;
    e.preventDefault();
    await axios({
      method: 'POST',
      url: 'http://localhost:3001/admin/register',
      data: {
        name,
        email,
        password,
        role,
      },
    }).then((response) => console.log(response)).catch((err) => {
      if (err) setError(true);
    });
  };

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.id]: target.value });
    validateForm();
  };

  return (
    <div>
      <header>
        <Link
          to="/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Gerenciar Usuários
        </Link>
        <Link
          to="/orders"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          Tryber Admin
        </Link>
        <Link
          to="/login"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </Link>
      </header>
      <form onSubmit={ handleSubmit }>
        <h2>Cadastrar novo Usuário</h2>
        <label htmlFor="name">
          Nome
          <input
            datatestid="admin_manage__input-name"
            id="name"
            type="text"
            name="name"
            value={ form.name }
            placeholder="nome e sobrenome"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            datatestid="admin_manage__input-email"
            id="email"
            type="text"
            name="email"
            value={ form.email }
            placeholder="seu-email@site.com.br"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            datatestid="admin_manage__input-password"
            id="password"
            type="password"
            name="password"
            value={ form.password }
            placeholder="**********"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="role">
          Tipo
          <select
            id="role"
            data-testid="admin_manage__select-role"
            name="role"
            value={ form.role }
            onChange={ handleChange }
          >
            <option value="customer">Cliente</option>
            <option value="seller">Vendedor</option>
            <option value="Admin">Administrador</option>
          </select>
        </label>
        <button
          datatestid="admin_manage__button-register"
          id="register"
          name="register"
          type="button"
          disabled={ isDisabled }
        >
          {' '}
          Cadastrar
          {' '}
        </button>
      </form>
      { error
        ? <p datatestid="admin_manage__element-invalid-register"> Error </p> : null }
    </div>
  );
}

export default Admin;

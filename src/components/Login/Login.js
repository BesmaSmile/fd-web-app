import React, { useCallback, useState } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from 'store/actions';
import './Login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const login = useCallback(actions.login(dispatch), [dispatch]);

  const navigate = useNavigate();

  const [error, setError] = useState();
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object({
    email: yup.string().email('Email invalide').required('Champs obligatoire'),
    password: yup.string().required('Champs obligatoire'),
  });

  const submit = async (values, action) => {
    try {
      await login(values);
      navigate('/');
    } catch (err) {
      setError(err?.message);
    } finally {
      action.setSubmitting(false);
    }
  };

  return (
    <div className="register">
      <h1 className="text-center">Connexion</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submit}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form method="#" onSubmit={handleSubmit}>
            <div className="container">
              {error && (
                <div className="column">
                  <div className="col alert alert-danger" role="alert">
                    {error}
                  </div>
                </div>
              )}
              <div className="column field">
                <div className="col">
                  <label htmlFor="email" className="form-label">E-mail</label>
                </div>
                <div className="col">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col error">
                  <span>{touched.email && errors.email}</span>
                </div>
              </div>

              <div className="column field">
                <div className="col">
                  <label htmlFor="password" className="form-label">Mot de passe</label>
                </div>
                <div className="col">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col error">
                  <span>{touched.password && errors.password}</span>
                </div>
                <div className="column">
                  <button className="col-12 btn btn-primary" type="submit">Se connecter</button>
                </div>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default Login;

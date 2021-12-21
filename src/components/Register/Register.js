import React, { useCallback } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from 'store/actions';
import './Register.scss';

const Register = () => {
  const dispatch = useDispatch();
  const register = useCallback(actions.register(dispatch), [dispatch]);

  const navigate = useNavigate();

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };

  const validationSchema = yup.object({
    firstname: yup.string().required('Champs obligatoire'),
    lastname: yup.string().required('Champs obligatoire'),
    email: yup.string().email('Email invalide').required('Champs obligatoire'),
    password: yup.string().required('Champs obligatoire'),
  });

  const submit = async (values, action) => {
    try {
      await register(values);
      navigate('/');
    } catch (error) {
      console.log(error);
    } finally {
      action.setSubmitting(false);
    }
  };

  return (
    <div className="register">
      <h1 className="text-center">Inscription</h1>
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
              <div className="column field">
                <div className="col">
                  <label htmlFor="lastname" className="form-label">Nom</label>
                </div>
                <div className="col">
                  <input
                    id="lastname"
                    className="form-control"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col error">
                  <span>{touched.lastname && errors.lastname}</span>
                </div>
              </div>

              <div className="column field">
                <div className="col">
                  <label htmlFor="firstname" className="form-label">Prénom</label>
                </div>
                <div className="col">
                  <input
                    id="firstname"
                    className="form-control"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col error">
                  <span>{touched.firstname && errors.firstname}</span>
                </div>
              </div>

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
                  <button className="col-12 btn btn-primary" type="submit">S&rsquo;enregistrer</button>
                </div>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default Register;

import React from "react";
import {useNavigate} from 'react-router-dom';
import {Formik} from 'formik';

import './NoteShare.css';

const API = process.env.REACT_APP_API_URL;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

const datePlusDays = days => {
  const date = new Date();
  date.setDate(new Date().getDate() + days);
  return date.toISOString().slice(0, 10);
};

function NoteShare() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="content-subhead">Share a note!</h1>
      <Formik
        initialValues={{
          title: '',
          type: 'PRIVATE',
          password: '',
          expirationDate: datePlusDays(10),
          data: ''
        }}
        validate={(values) => {
          const errors = {};

          ['title', 'expirationDate', 'data'].forEach(key => {
            if (!values[key]) errors[key] = 'Required';
          });

          if (!values.expirationDate.match(datePattern) || new Date(values.expirationDate) < new Date()) {
            errors.expirationDate = 'Incorrect date format';
          }

          if (values.noteType === 'PRIVATE' && !values.password) {
            errors.password = 'Required';
          }

          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);

          fetch(`${API}/notes`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          }).then(response => {
            const id = response.headers.get('location');
            navigate(`/share/link/${id}`);
          })
        }}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            dirty
          }) => (
          <form onSubmit={handleSubmit} className="pure-form pure-form-stacked">
            <div className="pure-u-1 pure-u-md-1-5">
              <fieldset>
                <label htmlFor="radio-private" className="pure-radio">
                  <input name="type" onChange={handleChange} onBlur={handleBlur} type="radio" value="PRIVATE"
                         defaultChecked/> Private note
                </label>
                <label htmlFor="radio-private" className="pure-radio">
                  <input name="type" onChange={handleChange} onBlur={handleBlur} type="radio" value="PUBLIC"
                  /> Public note
                </label>
              </fieldset>
            </div>
            {values.type === 'PRIVATE' && <div className="pure-u-1 pure-u-md-4-5">
              <label htmlFor="password"
                     className={(touched.password && errors.password) ? 'invalid' : ''}>Password</label>
              <input name="password" onChange={handleChange} onBlur={handleBlur} type="password"
                     className="pure-input-1"/>
            </div>}
            <fieldset>
              <label htmlFor="title" className={(touched.title && errors.title) ? 'invalid' : ''}>Title</label>
              <input name="title" onChange={handleChange} onBlur={handleBlur} type="text" className="pure-input-1"
                     placeholder="Insert title of a note"/>
            </fieldset>
            <fieldset>
              <label htmlFor="expirationDate"
                     className={(touched.expirationDate && errors.expirationDate) ? 'invalid' : ''}>
                Expiration date</label>
              <input name="expirationDate" onChange={handleChange} onBlur={handleBlur} type="text"
                     value={values.expirationDate} className="pure-input-1" placeholder="YYYY-MM-DD"/>
            </fieldset>
            <fieldset>
              <label htmlFor="data" className={(touched.data && errors.data) ? 'invalid' : ''}>Note</label>
              <textarea name="data" onChange={handleChange} onBlur={handleBlur} className="pure-input-1"
                        placeholder="Your note here" rows="20"></textarea>
            </fieldset>
            <button type="submit" disabled={!isValid && dirty} className="pure-button pure-button-primary">Share!
            </button>
            <button type="reset" disabled={!dirty} className="pure-button align-right">Clear</button>
          </form>)}
      </Formik>
    </div>
  );
}

export default NoteShare;

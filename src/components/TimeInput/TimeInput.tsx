import React = require('react');
import './TimeInput.css';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addTimeActions } from '../../store/actions';

interface MyFormValues {
  title: string,
}

export const TimeInput = () => {
  let count = 1;
  const dispatch = useDispatch();

  const initialValues: MyFormValues = {
    title: '',
  };

  const addingTime = (value: MyFormValues) => {
    console.log(value);

    const packTime = {
      id: count,
      title: value.title === '' 
        ? `No name tracker #${count}` 
        : value.title,
    }

    dispatch(addTimeActions(packTime));
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        // eslint-disable-next-line no-console
        console.log({ values, actions });

        addingTime(values);
        actions.resetForm();
        count++;
      }}
    >
      <Form 
        className="newTime" 
        translate={undefined}
      >
          <div className="form-field">
            <label htmlFor="title">
              <Field
                id="title"
                name="title"
                placeholder="Enter tracker time"
                className="newTime__input"
              />
            </label>
          </div>
          <button
            type="submit"
            className="newTime__submit-button button"
          >
            ADD
          </button>
        </Form>
    </Formik>
  );
};

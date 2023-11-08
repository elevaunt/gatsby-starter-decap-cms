import React, { useContext } from 'react';
import { renderForm } from "../../configs/formsMap.config";

const Form = (props) => {
  return renderForm(props, props.id);
}

export default Form;
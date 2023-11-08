import React from 'react';
import FiveStepsOfShameForm from "../components/Forms/FiveStepsOfShameForm";

export const formMap = {
  FiveStepsOfShameForm,
}

export const renderForm = (section, key) => {
  let Component = formMap[section.id];
  return <Component {...section} key={key} />
}

export default renderForm;
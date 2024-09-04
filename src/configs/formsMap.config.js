import React from 'react';
import FiveStepsOfShameForm from "../components/Forms/FiveStepsOfShameForm";
import NotifyOfEventsForm from "../components/Forms/NotifyOfEventsForm";
import TenXWebinarRegister from "../components/Forms/TenXWebinarRegister";

export const formMap = {
  FiveStepsOfShameForm,
  NotifyOfEventsForm,
  TenXWebinarRegister,
}

export const renderForm = (section, key) => {
  let Component = formMap[section.id];
  return <Component {...section} key={key} />
}

export default renderForm;
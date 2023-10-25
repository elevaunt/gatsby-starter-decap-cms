import React from 'react'
import PropTypes from 'prop-types'
import { MainTemplate } from '../../templates/main-template'
import { defaultTheme } from "../../configs/themes.mui.config";
import { CssVarsProvider } from "@mui/joy";

const MainTemplatePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <CssVarsProvider theme={defaultTheme}>
        <MainTemplate {...data} />
      </CssVarsProvider>
    )
  } else {
    return <div>Loading...</div>
  }
}

MainTemplatePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default MainTemplatePreview

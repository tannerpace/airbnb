import React from 'react'
import { ReactComponent as TinyIconSvg } from "../../Assets/Svgs/tinyicon.svg"

import useStyles from './styles'
import { Box } from '@mui/system'
import { useTheme } from '@mui/styles';
const TinyCompanyLogo = ({ color }) => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (

    <Box
      class=""
      color={"inherit"}
      aria-label="Airbnb Icon"



    >
      <TinyIconSvg
        className={classes.icon}

      />
    </Box>

  )
}

export default TinyCompanyLogo

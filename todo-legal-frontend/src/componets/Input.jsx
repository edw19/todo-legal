import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import { withStyles } from "@material-ui/core/styles";

const BlueOnGreenTooltip = withStyles({
  tooltip: {
    color: "red",
    backgroundColor: "white",
  },
  arrow: {
    fontSize: 15,
    color: "black",
    "&::before": {
      backgroundColor: "white",
      border: "1px solid #E6E8ED",
    },
  },
})(Tooltip);


const useStylesTooltip = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
  customWidth: {
    paddingRight: 25,
    paddingLeft: 25,
    paddingTop: 12,
    paddingBottom: 12,
    color: "#2C4477",
    maxWidth: 250,
    backgroundColor: "white",
    border: "1px solid #E6E8ED",
  },
}));

export default function CustomizedInputs({ value, handle }) {
  const [openTooltip, setOpenTooltip] = useState(false);
  const [colorInfo, setColorInfo] = useState(false);
  const classesTooltip = useStylesTooltip();

  const title = `Tu cédula debe encontrarse vigente para ingresar al sistema`;

  return (
    <>
      <FormControl
        variant="filled"
      >
        <InputLabel htmlFor="indentification-card">
          Cédula de Identidad
        </InputLabel>
        <FilledInput
          id="indentification-card"
          type="number"
          value={value}
          onChange={handle}
          onFocus={() => setColorInfo(true)}
          onBlur={() => setColorInfo(false)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setOpenTooltip(true)}
                onMouseLeave={() => setOpenTooltip(false)}
                edge="end"
              >
                <BlueOnGreenTooltip
                  open={openTooltip}
                  title={title}
                  placement="bottom-start"
                  classes={{
                    tooltip: classesTooltip.customWidth,
                    arrow: classesTooltip.arrow,
                  }}
                  arrow
                >
                  <InfoOutlinedIcon
                    color={colorInfo ? `primary` : "secondary"}
                  />
                </BlueOnGreenTooltip>
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );
}

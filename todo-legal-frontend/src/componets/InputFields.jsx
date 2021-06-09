import React from "react";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

export default function CustomizedInputs({
  id,
  type,
  placeholder,
  value,
  handle,
}) {
  return (
    <>
      <FormControl variant="filled">
        <InputLabel htmlFor={id}>{placeholder}</InputLabel>
        <FilledInput type={type} id={id} value={value} onChange={handle} />
      </FormControl>
    </>
  );
}

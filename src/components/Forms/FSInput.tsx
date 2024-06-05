import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TFormINputProps = {
  name: string;
  type?: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  disabled?: boolean;
  defaultValue?: any;
};

const FSInput = ({
  name,
  type = "text",
  label,
  size = "small",
  fullWidth = true,
  sx,
  placeholder,
  required = true,
  multiline = false,
  rows = 4,
  disabled = false,
  defaultValue,
}: TFormINputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          name={name}
          type={type}
          label={label}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          sx={sx}
          placeholder={placeholder}
          required={required}
          error={!!error?.message}
          helperText={error?.message}
          multiline={multiline}
          rows={rows}
          disabled={disabled}
          defaultValue={defaultValue}
        />
      )}
    />
  );
};

export default FSInput;

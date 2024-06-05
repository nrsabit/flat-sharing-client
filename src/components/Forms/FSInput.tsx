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
};

const FSInput = ({
  name,
  type = "text",
  label,
  size = "small",
  fullWidth = true,
  sx,
  placeholder,
  required,
  multiline = false,
  rows = 4,
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
        />
      )}
    />
  );
};

export default FSInput;

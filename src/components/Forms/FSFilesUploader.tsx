import * as React from "react";
import { SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Box, Input, Typography } from "@mui/material";
import { useState } from "react";

type TFileUploaderProps = {
  name: string;
  label?: string;
  sx?: SxProps;
};

export default function FSFileUploader({
  name,
  label,
  sx,
}: TFileUploaderProps) {
  const { control } = useFormContext();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (event: any) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files as any);
    setUploaded(true);
    return files;
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => {
        return (
          <>
            {selectedFiles.length > 0 && (
              <Box my={2}>
                <Typography variant="body1">Selected Files:</Typography>
                {selectedFiles.map((file: any, index) => (
                  <Typography key={index} variant="body2">
                    {file.name}
                  </Typography>
                ))}
              </Box>
            )}
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              disabled={uploaded}
              sx={{ ...sx }}
              startIcon={<CloudUploadIcon />}
            >
              {uploaded ? "Uploaded" : "Upload Images"}
              <Input
                inputProps={{ multiple: true }}
                type="file"
                {...field}
                style={{ display: "none" }}
                onChange={(e) => {
                  onChange((e?.target as HTMLInputElement)?.files);
                  handleFileChange(e);
                }}
              />
            </Button>
          </>
        );
      }}
    />
  );
}

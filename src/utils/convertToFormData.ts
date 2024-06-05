import { FieldValues } from "react-hook-form";

export const convertToFormData = (values: FieldValues) => {
  const obj = { ...values };
  const files = obj["images"];
  delete obj["images"];
  const data = JSON.stringify(obj);
  const formdata = new FormData();
  formdata.append("data", data);

  if (files && files.length) {
    for (let i = 0; i < files.length; i++) {
      formdata.append("files", files[i]);
    }
  }

  return formdata;
};

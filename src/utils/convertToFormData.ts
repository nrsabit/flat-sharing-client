export const convertToFormData = (values: any) => {
  const obj = { ...values };
  const files = obj["files"];
  delete obj["files"];
  const data = JSON.stringify(obj);
  const formdata = new FormData();
  formdata.append("data", data);
  formdata.append("files", files);

  return formdata;
};

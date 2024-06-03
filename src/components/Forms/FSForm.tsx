import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type FormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

type TFSFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & FormConfig;

const FSForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
}: TFSFormProps) => {
  const formConfig: FormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);
  const { handleSubmit } = methods;
  const submit: SubmitHandler<FieldValues> = (data) => onSubmit(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default FSForm;

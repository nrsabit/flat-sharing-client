"use client";

import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
import { useShareFlatRequestMutation } from "@/redux/api/flatRequestsApi";
import { getUserInfo } from "@/services/auth.services";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    flatId: string;
  };
};

const FlatShareRequest = ({ params }: TParams) => {
  const [user, setUser] = useState(null);
  const [isChecked, setIsChecked] = useState(true);
  const [shareFlatRequest, { isLoading }] = useShareFlatRequestMutation();
  const router = useRouter();

  useEffect(() => {
    const user = getUserInfo();
    setUser(user);
  }, []);

  const handleSubmit = async (values: FieldValues) => {
    const data = {
      additionalInformation: values.additionalInformation,
      flatId: params.flatId,
    };
    try {
      const res = await shareFlatRequest(data).unwrap();
      if (res?.id) {
        toast.success("Flat Requested");
        router.push("/dashboard/my-flat-requests");
      }
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong");
    }
  };

  return (
    <Container>
      <Stack
        sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            bgcolor: "#e7e7e7",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Share Flat Request
              </Typography>
            </Box>
          </Stack>

          <FSForm onSubmit={handleSubmit}>
            <Grid container spacing={2} my={2}>
              <Grid item md={6}>
                <FSInput
                  disabled={true}
                  defaultValue={(user as any)?.userName}
                  name="userName"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <FSInput
                  name="email"
                  type="email"
                  fullWidth={true}
                  disabled={true}
                  defaultValue={(user as any)?.email}
                />
              </Grid>
              <Grid item md={12}>
                <FSInput
                  name="additionalInformation"
                  label="Additional Information"
                  placeholder=""
                  fullWidth={true}
                  multiline={true}
                />
              </Grid>
              <Grid item md={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => setIsChecked(!isChecked)}
                      defaultChecked
                    />
                  }
                  label="Accept the terms and conditions"
                />
              </Grid>
            </Grid>
            <Button
              disabled={!isChecked || isLoading}
              sx={{ margin: "16px 0px" }}
              type="submit"
            >
              Add Request
            </Button>
          </FSForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default FlatShareRequest;

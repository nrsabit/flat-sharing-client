"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FSForm from "@/components/Forms/FSForm";
import { Grid } from "@mui/material";
import FSInput from "@/components/Forms/FSInput";
import { FieldValues } from "react-hook-form";
import { useUpdateProfileMutation } from "@/redux/api/usersApi";
import { toast } from "sonner";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ProfileModal({ user }: { user: Record<string, any> }) {
  const [open, setOpen] = React.useState(false);

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
    try {
      const res = await updateProfile(values);
      if (res?.data?.id) {
        toast.success("Profile Updated Successfully");
        setOpen(false);
      }
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong");
    }
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Update Profile
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Update Profile Info
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <FSForm onSubmit={handleSubmit}>
          <DialogContent>
            <Grid container spacing={2} my={2}>
              <Grid item md={12}>
                <FSInput
                  name="userName"
                  label="User Name"
                  type="text"
                  defaultValue={user?.userName}
                />
              </Grid>
              <Grid item md={12}>
                <FSInput
                  name="email"
                  type="email"
                  label="Email"
                  defaultValue={user?.email}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{ margin: "16px 0px" }}
              type="submit"
            >
              Update
            </Button>
          </DialogActions>
        </FSForm>
      </BootstrapDialog>
    </React.Fragment>
  );
}

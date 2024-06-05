"use client";
import FSFileUploader from "@/components/Forms/FSFilesUploader";
import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
import { useShareFlatMutation } from "@/redux/api/flatsApi";
import { convertToFormData } from "@/utils/convertToFormData";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ShareFlat = () => {
  const router = useRouter();
  const [shareFlat, { isLoading }] = useShareFlatMutation();
  const handleFormSubmit = async (values: FieldValues) => {
    values.rent = Number(values.rent);
    values.totalBedrooms = Number(values.totalBedrooms);
    const data = convertToFormData(values);

    try {
      const res = await shareFlat(data).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("New Flat Shared Successfuly");
        router.push("/");
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <Box>
      <Typography component="h1" variant="h5">
        Share a Flat
      </Typography>
      <FSForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <FSInput
              name="rent"
              type="number"
              label="Rent Amount"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FSInput
              name="totalBedrooms"
              label="Number of Bedrooms"
              type="number"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FSInput
              name="location"
              label="Location"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <FSInput
              name="amenities"
              label="Amenities"
              multiline={true}
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <FSInput
              name="description"
              label="Description"
              multiline={true}
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <FSFileUploader name="images" label="Upload Images" />
          </Grid>
        </Grid>

        <Button disabled={isLoading} type="submit">
          Share
        </Button>
      </FSForm>
    </Box>
  );
};

export default ShareFlat;

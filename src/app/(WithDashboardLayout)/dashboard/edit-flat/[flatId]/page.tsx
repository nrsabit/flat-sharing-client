"use client";
import LoadingPage from "@/app/loading";
import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
import {
  useGetSilgleFlatQuery,
  useUpdateFlatMutation,
} from "@/redux/api/flatsApi";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const EditFlat = ({ params }: { params: { flatId: string } }) => {
  const { data: flat } = useGetSilgleFlatQuery(params.flatId);

  const router = useRouter();

  const [updateFlat, { isLoading }] = useUpdateFlatMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    values.rent = values.rent ? Number(values.rent) : undefined;
    values.totalBedrooms = values.totalBedrooms
      ? Number(values.totalBedrooms)
      : undefined;
    const data = {
      id: params.flatId,
      data: values,
    };

    try {
      const res = await updateFlat(data).unwrap();
      if (res?.id) {
        toast.success("Flat Updated Successfuly");
        router.push("/dashboard/my-flats");
      } else {
        toast.error("Failed to update the flat");
      }
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong");
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Box>
      <Typography component="h1" variant="h5">
        Edit Flat
      </Typography>
      <FSForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <FSInput
              name="rent"
              type="number"
              label="Rent Amount"
              sx={{ mb: 2 }}
              defaultValue={flat?.rent}
              fullWidth
              required={false}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FSInput
              name="totalBedrooms"
              label="Number of Bedrooms"
              type="number"
              sx={{ mb: 2 }}
              defaultValue={flat?.totalBedrooms}
              fullWidth
              required={false}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FSInput
              name="location"
              label="Location"
              sx={{ mb: 2 }}
              defaultValue={flat?.location}
              fullWidth
              required={false}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <FSInput
              name="amenities"
              label="Amenities"
              multiline={true}
              sx={{ mb: 2 }}
              defaultValue={flat?.amenities}
              fullWidth
              required={false}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <FSInput
              name="description"
              label="Description"
              multiline={true}
              sx={{ mb: 2 }}
              defaultValue={flat?.description}
              fullWidth
              required={false}
            />
          </Grid>
        </Grid>

        <Button disabled={isLoading} type="submit">
          Update
        </Button>
      </FSForm>
    </Box>
  );
};

export default EditFlat;

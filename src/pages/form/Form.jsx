import { useTheme } from "@emotion/react";
import PersonIcon from "@mui/icons-material/Person";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import HeadingComponent from "../HeadingComponent";

// const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const validEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const vaildPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
const validPhone =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const Form = () => {
  const theme = useTheme();
  const data = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
    {
      value: "User",
      label: "User",
    },
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    handleClick();
  };

  return (
    <>
      <HeadingComponent
        title={"CREATE USER"}
        subtitle={"Create a new user Profile"}
      />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        mx={"auto"}
        mt={2}
        component="form"
      >
        <Stack direction="row" spacing={2}>
          <TextField
            error={Boolean(errors.firstName)}
            {...register("firstName", { required: true, minLength: 3 })}
            helperText={
              Boolean(errors.firstName) ? "This field is required" : ""
            }
            variant="filled"
            sx={{ width: "50%" }}
            label="First Name"
          />
          <TextField
            error={Boolean(errors.lastName)}
            {...register("lastName", { required: true, minLength: 3 })}
            helperText={
              Boolean(errors.lastName) ? "This field is required" : ""
            }
            variant="filled"
            sx={{ width: "50%" }}
            label="Last Name"
          />
        </Stack>
        <Stack marginTop={3} direction="column" spacing={3}>
          <TextField
            error={Boolean(errors.email)}
            {...register("email", {
              required: true,
              pattern: validEmail,
            })}
            helperText={
              Boolean(errors.email)
                ? "please provide a valid email address"
                : ""
            }
            variant="filled"
            fullWidth
            type="email"
            label="Email"
          />

          <TextField
            error={Boolean(errors.contact)}
            {...register("contact", { required: true, pattern: validPhone })}
            helperText={
              Boolean(errors.contact)
                ? "please provide a valid phone number"
                : ""
            }
            variant="filled"
            fullWidth
            label="Contact Number"
          />
          <TextField variant="filled" fullWidth label="Address 1" />
          <TextField variant="filled" fullWidth label="Address 2" />
          <TextField
            id="filled-select-Role"
            select
            label="Role"
            defaultValue="User"
            variant="filled"
          >
            {data.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Stack mt="16px" alignItems="end">
          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "capitalize" }}
          >
            Create New User
          </Button>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="info"
              variant="filled"
              sx={{ width: "100%" }}
            >
              created user successfully
            </Alert>
          </Snackbar>
        </Stack>
      </Box>
    </>
  );
};

export default Form;

import * as React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {
  Box,
  FormControl,
  FormLabel,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  Radio,
  FormGroup,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CheckBox } from "@mui/icons-material";

export default function Landing() {
  const [radio, setR] = React.useState("");
  const [value, setV] = React.useState("");
  const [country, setC] = React.useState([]);
  const [view, setView] = React.useState("list");
  console.log(radio);
  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <>
      <Box>
        <FormControl component="fieldset">
          <FormLabel id="job-ex" component="legend">
            years of experances
          </FormLabel>
          <RadioGroup
            row
            value={radio}
            onChange={(e) => setR(e.target.value)}
            aria-labelledby="job-ex"
            name="experance"
          >
            <FormControlLabel control={<Radio />} value="0-2" label="0-2" />
            <FormControlLabel control={<Radio />} label="2-5" value="2-5" />
            <FormControlLabel control={<Radio />} label="5-7" value="5-7" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl component="fieldset">
          <FormLabel id="job-ex" component="legend">
            Skills
          </FormLabel>

          <FormGroup>
            <FormControlLabel
              control={<CheckBox />}
              value="HTML"
              label="HTML"
            />
            <FormControlLabel
              control={<CheckBox de />}
              label="CSS"
              value="CSS"
            />
            <FormControlLabel control={<CheckBox />} label="JS" value="JS" />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControlLabel
          control={<CheckBox checked={false} />}
          label="i accept all terms"
        />
      </Box>
      <ToggleButtonGroup
        orientation="horizontal"
        value={view}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="list" aria-label="list">
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value="module" aria-label="module">
          <ViewModuleIcon />
        </ToggleButton>
        <ToggleButton value="quilt" aria-label="quilt">
          <ViewQuiltIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <Stack spacing={2} sx={{ mt: 10, width: 500 }}>
        <Box>
          <TextField
            fullWidth
            select
            label="select country"
            value={country}
            SelectProps={{
              multiple: true,
            }}
            onChange={(e) => setC(e.target.value)}
          >
            <MenuItem value="EGY">Egypt</MenuItem>
            <MenuItem value="LEB">Lebnan</MenuItem>
          </TextField>
        </Box>
        <Stack direction="row" spacing={1}>
          <TextField label="First Name " sx={{ width: "50%" }} />
          <TextField
            label="Last Name"
            sx={{ width: "50%" }}
            variant="filled"
            required
          />
        </Stack>
        <Stack spacing={2}>
          <TextField
            label="Email"
            variant="standard"
            color="secondary"
            helperText="we will not share your emal with anyone"
          />
          <TextField
            label="Amount"
            inputProps={{
              endAdornment: <InputAdornment position="end">$</InputAdornment>,
            }}
          />
          <TextField
            label="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityIcon />
                </InputAdornment>
              ),
            }}
            variant="filled"
          />
          <TextField
            error={value.length < 8}
            value={value}
            onChange={(e) => setV(e.target.value)}
            label="Weight"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
    </>
  );
}

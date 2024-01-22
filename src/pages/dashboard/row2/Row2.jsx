import { useTheme } from "@emotion/react";
import TabScrollButton from "@mui/material/TabScrollButton";

import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import LineComponent from "../../charts/LineComponent";
import React from "react";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Grid container sx={{ marginTop: "2px" }} spacing={2}>
      <Grid item xs={12} md={7} sx={{ height: 350 }}>
        <Paper sx={{ overflow: "hidden", p: 1.5, height: "100%" }}>
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Typography variant="h5" color={theme.palette.primary.dark}>
                Revenue Generated
              </Typography>
              <Typography>$59,512,20</Typography>
            </Box>
            <Box>
              <IconButton aria-label="delete" size="small">
                <DownloadIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Stack>
          <LineComponent height={"85%"} />
        </Paper>
      </Grid>

      <Grid item xs={12} md={5} sx={{ height: 350 }}>
        <Stack sx={{ height: "100%", overflow: "auto" }} rowGap={1}>
          <Paper sx={{ p: 1 }}>
            <Typography
              variant="p"
              component="h2"
              color={theme.palette.primary.dark}
            >
              Recent Transaction
            </Typography>
          </Paper>
          <Paper
            sx={{ p: 1, display: "flex", justifyContent: "space-between" }}
          >
            <Stack direction="column">
              <Typography variant="body1" color={theme.palette.primary.dark}>
                Recent Transaction
              </Typography>
              <Typography variant="body2">Recent Transaction</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" columnGap={3}>
              <Typography variant="body1">2021-6-8</Typography>
              <Typography variant="body1" color={theme.palette.primary.dark}>
                <Button variant="contained" color="info">
                  $43.5
                </Button>
              </Typography>
            </Stack>
          </Paper>
          <Paper
            sx={{ p: 1, display: "flex", justifyContent: "space-between" }}
          >
            <Stack direction="column">
              <Typography variant="body1" color={theme.palette.primary.dark}>
                Recent Transaction
              </Typography>
              <Typography variant="body2">Recent Transaction</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" columnGap={3}>
              <Typography variant="body1">2021-6-8</Typography>
              <Typography variant="body1" color={theme.palette.primary.dark}>
                <Button variant="contained" color="info">
                  $43.5
                </Button>
              </Typography>
            </Stack>
          </Paper>
          <Paper
            sx={{ p: 1, display: "flex", justifyContent: "space-between" }}
          >
            <Stack direction="column">
              <Typography variant="body1" color={theme.palette.primary.dark}>
                Recent Transaction
              </Typography>
              <Typography variant="body2">Recent Transaction</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" columnGap={3}>
              <Typography variant="body1">2021-6-8</Typography>
              <Typography variant="body1" color={theme.palette.primary.dark}>
                <Button variant="contained" color="info">
                  $43.5
                </Button>
              </Typography>
            </Stack>
          </Paper>
          <Paper
            sx={{ p: 1, display: "flex", justifyContent: "space-between" }}
          >
            <Stack direction="column">
              <Typography variant="body1" color={theme.palette.primary.dark}>
                Recent Transaction
              </Typography>
              <Typography variant="body2">Recent Transaction</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" columnGap={3}>
              <Typography variant="body1">2021-6-8</Typography>
              <Typography variant="body1" color={theme.palette.primary.dark}>
                <Button variant="contained" color="info">
                  $43.5
                </Button>
              </Typography>
            </Stack>
          </Paper>
          <Paper
            sx={{ p: 1, display: "flex", justifyContent: "space-between" }}
          >
            <Stack direction="column">
              <Typography variant="body1" color={theme.palette.primary.dark}>
                Recent Transaction
              </Typography>
              <Typography variant="body2">Recent Transaction</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" columnGap={3}>
              <Typography variant="body1">2021-6-8</Typography>
              <Typography variant="body1" color={theme.palette.primary.dark}>
                <Button variant="contained" color="info">
                  $43.5
                </Button>
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Row2;

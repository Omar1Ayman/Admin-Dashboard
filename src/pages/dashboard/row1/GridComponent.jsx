import { Grid, Paper, Stack, Box, Typography } from "@mui/material";
import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@emotion/react";

const data = [
  {
    id: "javascript",
    label: "javascript",
    value: 331,
    color: "hsl(278, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 95,
    color: "hsl(101, 70%, 50%)",
  },
  {
    id: "python",
    label: "python",
    value: 539,
    color: "hsl(138, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 433,
    color: "hsl(35, 70%, 50%)",
  },
  {
    id: "hack",
    label: "hack",
    value: 597,
    color: "hsl(19, 70%, 50%)",
  },
];
const GridComponent = ({ icon, increase, title, subtitle, scheme }) => {
  const theme = useTheme();
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Paper sx={{ p: 2, height: "100%" }}>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="space-between"
          height="100%"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Typography>{icon}</Typography>
            <Typography sx={{ my: "5px" }}>{title}</Typography>
            <Typography variant="body2">{subtitle}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box height="80px" width="80px">
              <ResponsivePie
                theme={{
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                  },
                  axis: {
                    domain: {
                      line: {
                        stroke: theme.palette.text.primary,
                        strokeWidth: 1,
                      },
                    },
                    legend: {
                      text: {
                        fontSize: 12,
                        fill: theme.palette.text.primary,
                      },
                    },
                    ticks: {
                      line: {
                        stroke: theme.palette.text.primary,
                        strokeWidth: 1,
                      },
                      text: {
                        fontSize: 11,
                        fill: theme.palette.text.primary,
                      },
                    },
                  },
                  grid: {
                    line: {
                      stroke: theme.palette.divider,
                      strokeWidth: 1,
                    },
                  },
                  legends: {
                    title: {
                      text: {
                        fontSize: 11,
                        fill: theme.palette.text.primary,
                      },
                    },
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                    },
                    ticks: {
                      line: {},
                      text: {
                        fontSize: 10,
                        fill: theme.palette.text.secondary,
                      },
                    },
                  },
                  annotations: {
                    text: {
                      fontSize: 13,
                      fill: theme.palette.text.primary,
                      outlineWidth: 2,
                      outlineColor: theme.palette.text.primary,
                      outlineOpacity: 1,
                    },
                    link: {
                      stroke: theme.palette.text.primary,
                      strokeWidth: 1,
                      outlineWidth: 2,
                      outlineColor: theme.palette.text.primary,
                      outlineOpacity: 1,
                    },
                    outline: {
                      stroke: theme.palette.text.primary,
                      strokeWidth: 2,
                      outlineWidth: 2,
                      outlineColor: theme.palette.text.primary,
                      outlineOpacity: 1,
                    },
                    symbol: {
                      fill: theme.palette.text.primary,
                      outlineWidth: 2,
                      outlineColor: theme.palette.text.primary,
                      outlineOpacity: 1,
                    },
                  },
                  tooltip: {
                    container: {
                      background: theme.palette.background.default,
                      color: theme.palette.text.primary,
                      fontSize: 12,
                    },
                  },
                }}
                data={data}
                colors={{ scheme: scheme }}
                innerRadius={0.7}
                padAngle={3}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", "0"]],
                }}
                enableArcLinkLabels={false}
                arcLinkLabelsSkipAngle={10}
                enableArcLabels={false}
                arcLinkLabelsTextColor={theme.palette.text.primary}
                arcLinkLabelsThickness={1}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsTextColor={{
                  from: "color",
                  modifiers: [["darker", 2]],
                }}
                animate={true}
                legends={[]}
              />
            </Box>
            <Typography variant="body2">{increase}</Typography>
          </Box>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default GridComponent;

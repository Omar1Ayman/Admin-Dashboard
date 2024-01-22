import React from "react";
import { Box, Typography } from "@mui/material";
import { dataOfCharts } from "./data";
import { useTheme } from "@emotion/react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geo } from "./world_countries";

const GeoComponent = ({ isDashboard = false }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        height={isDashboard ? "220px" : "75vh"}
        width={"98%"}
        borderRadius={"5px"}
        border={
          isDashboard
            ? `.1px solid ${theme.palette.text.primary}`
            : `1px solid ${theme.palette.text.primary}`
        }
      >
        <ResponsiveChoropleth
          data={dataOfCharts.dataGeo}
          features={geo.features}
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
              basic: {},
              chip: {},
              table: {},
              tableCell: {},
              tableCellValue: {},
            },
          }}
          margin={
            isDashboard
              ? { top: 0, right: 0 }
              : { top: 0, right: 0, bottom: 0, left: 0 }
          }
          colors="spectral"
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionTranslation={[0.5, 0.5]}
          projectionScale={isDashboard ? 100 : 500}
          projectionRotation={[0, 0, 0]}
          enableGraticule={false}
          // graticuleLineColor="#dddddd"
          borderWidth={0.5}
          borderColor="#152538"
          legends={
            isDashboard
              ? []
              : [
                  {
                    anchor: "bottom-left",
                    direction: "column",
                    justify: true,
                    translateX: 10,
                    translateY: -10,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: "left-to-right",
                    itemTextColor: theme.palette.text.primary,
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: theme.palette.text.primary,
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]
          }
        />
      </Box>
    </>
  );
};

export default GeoComponent;

import { Box, Typography } from "@mui/material";
import React from "react";
import { dataOfCharts } from "./data";
import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@emotion/react";

const PieComponent = ({ isDashboard = false }) => {
  const theme = useTheme();
  return (
    <>
      <Box height={isDashboard ? "220px" : "75vh"} width={"98%"}>
        <ResponsivePie
          data={dataOfCharts.dataPie}
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
            isDashboard ? { top: 10, bottom: 10 } : { top: 40, bottom: 80 }
          }
          innerRadius={isDashboard ? 0.7 : 0.5}
          padAngle={0.5}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={theme.palette.text.primary}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          enableArcLinkLabels={isDashboard ? false : true}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          legends={
            isDashboard
              ? []
              : [
                  {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: theme.palette.text.primary,
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: theme.palette.text.primary,
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

export default PieComponent;

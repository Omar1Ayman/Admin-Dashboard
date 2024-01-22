import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
const Contact = () => {
  const cols = ["id", "name", "email", "age", "phone", "access"];

  const columns = [];
  const theme = useTheme();
  cols.map((item) => {
    let col = {};
    item === "access"
      ? (col = {
          field: `${item}`,
          headerName: `${item.toUpperCase()}`,
          align: "center",
          headerAlign: "center",
          renderCell: ({ row: { access } }) => {
            return (
              <Box
                sx={{
                  p: "5px",
                  width: "99px",
                  borderRadius: "3px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  background:
                    access === "Admin"
                      ? theme.palette.primary.dark
                      : access === "Manager"
                      ? theme.palette.secondary.dark
                      : "#3da58a",
                }}
              >
                {access === "Admin" && (
                  <AdminPanelSettingsOutlined
                    fontSize="small"
                    sx={{ color: "#fff" }}
                  />
                )}
                {access === "Manager" && (
                  <SecurityOutlined fontSize="small" sx={{ color: "#fff" }} />
                )}
                {access === "User" && (
                  <LockOpenOutlined fontSize="small" sx={{ color: "#fff" }} />
                )}

                <Typography
                  sx={{ fontSize: "13px", color: "#fff" }}
                  component="h1"
                >
                  {access}
                </Typography>
              </Box>
            );
          },
        })
      : (col = {
          field: `${item}`,
          headerName: `${item.toUpperCase()}`,
          align: "center",
          headerAlign: "center",
        });

    item === "id" || item === "age" ? (col["width"] = 33) : (col["flex"] = 1);

    columns.push(col);
  });
  console.log(columns);
  return (
    <>
      <Box sx={{ height: "100%", width: "100%", mx: "auto" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          columns={columns}
        />
      </Box>
    </>
  );
};

export default Contact;

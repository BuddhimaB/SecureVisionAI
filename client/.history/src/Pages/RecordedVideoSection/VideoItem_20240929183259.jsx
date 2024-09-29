import React from "react";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import * as moment from "moment";

export default function VideoItem({ id, date, openVideo }) {

    async function openVideo() {
        
    }
  return (
    <div
      style={{
        marginRight: 10,
        marginBottom: 10,
        padding: 20,
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <Stack direction="column" justifyContent="center" alignItems="center">
        <p style={{ fontWeight: "bold" }}>
          Video at: {moment(date).format("hh:mm:ss A")}
        </p>
        <Button variant="contained" onClick={openVideo}>
          Open Video
        </Button>
      </Stack>
    </div>
  );
}

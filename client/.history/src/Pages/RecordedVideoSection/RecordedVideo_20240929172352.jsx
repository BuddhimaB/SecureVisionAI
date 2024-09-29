import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import moment from "moment";
import VideoItem from "./VideoItem";  // Import VideoItem component
import locaVideos from "../../api/localVideos";  // Import the API module
import BackButton from "../../components/BackButton/BackButton";

// Dummy API function to simulate fetching videos (replace this with your real API call)
async function getVideosByDate(date) {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      if (date === moment().format("YYYY-MM-DD")) {
        resolve({
          status: 200,
          data: [
            { id: 1, date: new Date() },
            { id: 2, date: new Date() }
          ]
        });
      } else {
        resolve({ status: 200, data: [] });
      }
    }, 1000);
  });
}

export default function RecordedVideos() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(moment(today).format("YYYY-MM-DD"));
  const [videos, setVideos] = useState([]);

  // Function to fetch videos based on selected date
  const fetchVideos = async (date) => {
    try {
      const response = await locaVideos.getVideosByDate(date);
      if (response.status === 200) {
        setVideos(response.data);
      } else {
        setVideos([]);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
      setVideos([]);
    }
  };

  useEffect(() => {
    fetchVideos(selectedDate);  // Fetch videos on initial load
  }, []);

  const openVideo = (id) => {
    alert(`Opening video with ID: ${id}`);
    // Add your logic to handle opening the video, e.g., redirecting or playing the video
  };

  return (
    <BackButton
    <div style={{ padding: 20 }}>
      <h3>Recorded Videos</h3>
      <Stack direction="row" alignItems="center" spacing={3}>
        <h4>Select date:</h4>
        <TextField
          type="date"
          value={selectedDate}
          onChange={(event) => {
            const newDate = event.target.value;
            setSelectedDate(newDate);
            fetchVideos(newDate);  // Fetch videos whenever date changes
          }}
        />
      </Stack>
      <div style={{ height: 50 }} />
      <Grid container spacing={5} justifyContent="center">
        {videos.length > 0 ? (
          videos.map((video) => (
            <VideoItem key={video.id} id={video.id} date={video.date} openVideo={openVideo} />
          ))
        ) : (
          <p style={{ color: "red" }}>No recorded videos found for this date</p>
        )}
      </Grid>
    </div>
  );
}

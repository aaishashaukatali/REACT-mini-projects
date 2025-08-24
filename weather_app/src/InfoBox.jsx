import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1583779254895-2c141e7872b1?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let HOT_URL =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let COLD_URL =
    "https://images.unsplash.com/photo-1669888706512-b72f8ab043b7?q=80&w=904&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1561819232-3d00593eb6b4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D";

  return (
    <Card sx={{ maxWidth: 345, mt: 4 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={
          info.humidity > 80 ? RAIN_URL : info.temp >= 25 ? HOT_URL : COLD_URL
        }
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {info.city}
          {info.humidity > 80 ? (
            <span style={{ color: "lightcoral" }}>
              <ThunderstormIcon />
            </span>
          ) : info.temp >= 25 ? (
            <span style={{ color: "orange" }}>
              <SunnyIcon />
            </span>
          ) : (
            <span style={{ color: "aqua" }}>
              < AcUnitIcon/>
            </span>
          )}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{ color: "text.secondary" }}
        >
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>
            The weather can be described as
            <b>
              <i> {info.weather} </i>
            </b>
            feels like
            <b>
              <i> {info.feelsLike} </i>
            </b>
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
}

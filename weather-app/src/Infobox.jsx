import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Infobox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';



export default function Infobox({info}) {

  const INIT_URL = "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsdWUlMjBza3l8ZW58MHx8MHx8fDA%3D"
  const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
  const COLD_URL = "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
  const RAIN_URL = "https://imgs.search.brave.com/GoyTMYizkqxF5ZOcxq1FYWUFHOt1ueS0JEHsvvqoVA0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/MTk1Lzc5OC9zbWFs/bC9haS1nZW5lcmF0/ZWQtcmFpbnktd2Vh/dGhlci1iYWNrZ3Jv/dW5kLWZyZWUtcGhv/dG8uanBn"

  return (
    <div className='Infobox'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
                info.humidity > 70
                ? RAIN_URL
                : info.temp > 25
                ? HOT_URL
                : info.temp < 15
                ? COLD_URL
                : INIT_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {
        info.humidity > 70
        ? <ThunderstormIcon sx={{ color: 'gray' }} />
        : info.temp > 25
        ? <SunnyIcon sx={{ color: 'orange' }} />
        : info.temp < 15
        ? <AcUnitIcon sx={{ color: 'lightblue' }} />
        : null
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} >
          <p>Temperature = {info.temp}°C</p>
          <p>Min Temperature = {info.tempMin}°C</p>
          <p>Max Temperature = {info.tempMax}°C</p>
          <p>Humidity = {info.humidity}%</p>
          <p>
            The weather is currently <i><b>{info.weather}</b></i> with a feels like temperature of <i><b>{info.feelslike}°C</b></i>
          </p>
          
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
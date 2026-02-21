
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';



function Xerox({info}){
    let INIT_URL="https://images.unsplash.com/photo-1765217993868-ec400500c0bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let HOT_URL="https://tse3.mm.bing.net/th/id/OIP.3cUWUa4aEAQw1OUXtmnGhgHaEK?cb=ucfimg2&ucfimg=1&w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3";
    let COLD_URL="https://cdn.pixabay.com/photo/2023/12/06/08/53/winter-8433257_1280.jpg";
    let RAIN_URL="https://cdn.forumcomm.com/dims4/default/8157c4e/2147483647/strip/true/crop/2700x1800+250+0/resize/1680x1120!/quality/90/?url=https:%2F%2Ffcc-cue-exports-brightspot.s3.us-west-2.amazonaws.com%2Fduluthnewstribune%2Fbinary%2F1e2VlF1jNaefjbtB0OTLsTR0hu7bm73JL_binary_1715620.jpg";
    return(
        <> 
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >=40 ? RAIN_URL:info.temp >15 ?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temprature={info.temp}&deg;C</div>
          <div>Humidity:{info.humidity}</div>
            <div>Temp Min:{info.tempMin}</div>
            <div>Temp Max:{info.tempMax}</div>
            <div>The weather is descrided as <b>{info.weather}</b>  and feels like {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
      
    </Card>
       
        </>
    )
}
export default Xerox;
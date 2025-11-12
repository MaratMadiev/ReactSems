import { Box, Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";

const weatherInfo = [
    {
        name: 'Москва',
        temp: '6',
        weather: 'Дождь',
    },
    {
        name: 'Бишкек',
        temp: '14',
        weather: 'Облачно',
    },
]

export const WeatherWidget: React.FC = () => {
    return (<Box sx={{ display: 'flex', gap: 2, p: 2 }}>
        {weatherInfo.map((city, index) => (
            <Card key = {index}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {city.name}
                    </Typography>
                    <Typography variant="h6">
                        {city.temp} по Цельсию
                    </Typography>
                    <Typography  variant="body2">
                        {city.weather}
                    </Typography>
                </CardContent>
            </Card>
        ))}
    </Box>);
}
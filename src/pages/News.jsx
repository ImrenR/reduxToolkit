import { useDispatch } from "react-redux";
import loadingigf from "../assets/loading.gif";
import {Box, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import { useEffect } from "react";
import { getirData } from "../features/newsSlice";
import { useSelector } from "react-redux";
import { Button } from "bootstrap";


const News = () => {

const dispatch = useDispatch ();

const {loading, news}= useSelector((state)=>state.newsSlice)
useEffect(()=>
  {
    dispatch(getirData());
  },[]);
  return (
    <>
 
    {loading ? (<img src={loadingigf} alt="" height={"800px"}/>) : 
    (
      <Box
      xs={{d : "flex"}}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      flexWrap="wrap">
        {
        news.map((a)=>(
<Card sx={{ maxWidth: 345, height:450,m:5 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={a.urlToImage}
                title="news"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {a.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                 {a.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Clear</Button>
                <Button href={a.url} size="small" target="_blank">Detail</Button>
              </CardActions>
            </Card>
        ))}
      </Box>
     )}
    </>
  )
}

export default News
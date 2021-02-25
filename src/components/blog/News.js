import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Link from "@material-ui/core/Link";
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import React, { useEffect, useState } from "react";


// ---------------
// Create component
// ---------------
const News = () => {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios("http://127.0.0.1:8000/");
      setPosts(result.data);
    };

    fetchData();
  }, []);

  const classes = useStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();

  return (
    <div>
      {posts.map((post, index) => {
        return (
            <Card spacing={5} className={classes.root} >
            <CardActionArea  href={post.url} >
              <CardMedia
                className={classes.media}
                component="img"
                image={post.img_src}
              />
              <CardContent>
                <TextInfoContent
                    classes={textCardContentStyles}
                    overline={post.time}
                    heading={post.title}
                    body={post.body}
                />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link href={post.url}>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </Card> 
        );
      })}
    </div>
  );
};


// ---------------
// define styles
// ---------------

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: "25px",
  },
  media: {
    height: 140,
    width: "100%",
    objectFit: "contain",
  },
  Card: {
    width: 300,
    margin: "auto",
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
});


// ---------------
// export default
// ---------------
export default News;

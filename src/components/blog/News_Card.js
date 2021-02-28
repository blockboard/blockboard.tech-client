import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Link from "@material-ui/core/Link";
import React, { useEffect, useState } from "react";
import cx from "clsx";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";

// ---------------
// create component
// ---------------

const News = React.memo(function BlogCard() {
  // save data to state
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios("http://127.0.0.1:8000/news_blog");
      setPosts(result.data);
    };

    fetchData();
  }, []);

  // define style constants
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();

  // render component
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia className={styles.media} image={post.img_src} />
            <CardContent>
              <TextInfoContent
                classes={contentStyles}
                overline={post.time}
                heading={post.title}
                body={post.body}
              />
              <Link href={post.url}>
                <Button className={buttonStyles}>Read more</Button>
              </Link>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
});

// -------------
// define styles
// -------------
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    marginBottom: "25px",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 500,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  media: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      // backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));

// ---------------
// export default
// ---------------
export default News;

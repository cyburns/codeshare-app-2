import {
  ThumbUpAltOutlined,
  CommentOutlined,
  AutorenewOutlined,
  SendOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";

import Editor from "@monaco-editor/react";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  codeString,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  // const isLiked = Boolean(likes[loggedInUserId]);
  const [isLiked, setIsLiked] = useState(false);
  const likeCount = Object.keys(likes).length;

  const theme = useTheme();
  const main = theme.palette.neutral.main;
  const primary = theme.palette.primary.main;
  const usernameComment = theme.palette.neutral.dark;
  const textComment = theme.palette.neutral.medium;
  const mediumMain = theme.palette.neutral.mediumMain;

  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });

    setIsLiked(!isLiked);
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: "1rem", margin: "1.25rem 0" }}>
        {description}
      </Typography>
      <Box height="500px" width="100%">
        {theme.palette.mode === "dark" ? (
          <Editor
            theme="vs-dark"
            defaultLanguage="javascript"
            defaultValue={codeString}
            options={{
              wordWrap: "on",
              fontSize: 14,
            }}
          />
        ) : (
          <Editor
            theme="vs-light"
            defaultLanguage="javascript"
            defaultValue={codeString}
            options={{
              wordWrap: "on",
              fontSize: 14,
            }}
          />
        )}
      </Box>

      <FlexBetween mt="2rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <Typography>{likeCount} likes</Typography>
          </FlexBetween>
        </FlexBetween>
        <IconButton>
          <Typography>{comments.length} comments</Typography>
        </IconButton>
      </FlexBetween>

      <Divider />

      <FlexBetween m="1rem 0">
        <IconButton
          onClick={patchLike}
          width="8rem"
          sx={{
            width: "8rem",
            borderRadius: "1rem",
          }}
        >
          {isLiked ? (
            <ThumbUpAltOutlined fontSize="large" sx={{ color: primary }} />
          ) : (
            <ThumbUpAltOutlined fontSize="large" sx={{ color: mediumMain }} />
          )}
          <Typography variant="h6" color={mediumMain}>
            Like
          </Typography>
        </IconButton>

        <IconButton
          onClick={() => setIsComments(!isComments)}
          sx={{
            width: "8rem",
            borderRadius: "1rem",
          }}
        >
          <CommentOutlined
            fontSize="large"
            sx={{
              color: mediumMain,
            }}
          />
          <Typography variant="h6" color={mediumMain}>
            Comment
          </Typography>
        </IconButton>

        <IconButton
          sx={{
            width: "8rem",
            borderRadius: "1rem",
          }}
        >
          <AutorenewOutlined fontSize="large" sx={{ color: mediumMain }} />
          <Typography variant="h6" color={mediumMain}>
            Repost
          </Typography>
        </IconButton>

        <IconButton
          sx={{
            width: "8rem",
            borderRadius: "1rem",
          }}
        >
          <SendOutlined fontSize="large" sx={{ color: mediumMain }} />
          <Typography variant="h6" color={mediumMain}>
            Send
          </Typography>
        </IconButton>
      </FlexBetween>

      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment) => (
            <Box key={`${name}`}>
              <Divider />
              <Typography
                sx={{ color: usernameComment, m: "0.5rem 0", pl: "1rem" }}
              >
                {comment[0]}
              </Typography>
              <Typography
                sx={{ color: textComment, m: "0.5rem 0", pl: "1rem" }}
              >
                {comment[1]}
              </Typography>
            </Box>
          ))}
          <Divider />
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;

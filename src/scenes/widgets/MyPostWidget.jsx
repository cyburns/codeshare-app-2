import {
  IntegrationInstructionsOutlined,
  DriveFolderUploadOutlined,
  FeedOutlined,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";

import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const theme = useTheme();
  const mediumMain = theme.palette.neutral.mediumMain;
  const medium = theme.palette.neutral.medium;
  const secondary = theme.palette.primary.light;
  const orange = theme.palette.extra.orange;
  const red = theme.palette.extra.red;

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const response = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    
    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
  };

  return (
    <WidgetWrapper>
      <FlexBetween gap="1rem">
        <UserImage image={picturePath} />
        <InputBase
          placeholder="Start a post"
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: "100%",
            backgroundColor: theme.palette.neutral.light,
            borderRadius: "2rem",
            padding: "0.75rem 2rem",
          }}
        />
      </FlexBetween>
      {isImage && (
        <Box borderRadius="5px" mt="1rem" p="1rem">
          <Box height="500px" width="100%">
            {theme.palette.mode === "dark" ? (
              <Editor
                theme="vs-dark"
                defaultValue="// add your code"
                defaultLanguage="javascript"
                options={{
                  wordWrap: "on",
                  fontSize: 14,
                }}
              />
            ) : (
              <Editor
                theme="vs-light"
                defaultValue="// add your code"
                defaultLanguage="javascript"
                options={{
                  wordWrap: "on",
                  fontSize: 14,
                }}
              />
            )}
          </Box>
        </Box>
      )}

      <FlexBetween sx={{ marginTop: "1.25rem" }}>
        <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
          <IconButton
            sx={{
              borderRadius: "0.5rem",
            }}
          >
            <IntegrationInstructionsOutlined sx={{ color: secondary }} />
            <Typography color={mediumMain}>Post your code</Typography>
          </IconButton>
        </FlexBetween>

        <>
          <FlexBetween gap="0.25rem">
            <IconButton
              sx={{
                borderRadius: "0.5rem",
              }}
            >
              <DriveFolderUploadOutlined sx={{ color: orange }} />
              <Typography color={mediumMain}>Upload file</Typography>
            </IconButton>
          </FlexBetween>

          <FlexBetween gap="0.25rem">
            <IconButton
              sx={{
                borderRadius: "0.5rem",
              }}
            >
              <FeedOutlined sx={{ color: red }} />
              <Typography color={mediumMain}>Write an article</Typography>
            </IconButton>
          </FlexBetween>
        </>

        <Button
          // disabled={!post}
          onClick={handlePost}
          sx={{
            color: theme.palette.neutral.light,
            backgroundColor: secondary,
            borderRadius: "3rem",
          }}
        >
          POST
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default MyPostWidget;

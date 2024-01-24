import { EditOutlined, Bookmark, Groups2 } from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const theme = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = theme.palette.neutral.dark;
  const medium = theme.palette.neutral.medium;
  const main = theme.palette.neutral.main;
  const secondary = theme.palette.primary.light;

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <WidgetWrapper sx={{ marginLeft: "9rem", marginTop: "1rem" }}>
      <Box>
        <FlexBetween mb="0.5rem">
          <Typography color={medium}>Recent</Typography>
          <Typography
            color={secondary}
            fontWeight="500"
            sx={{
              "&:hover": {
                textDecoration: "underline",
                cursor: "pointer",
              },
            }}
          >
            {viewedProfile}
          </Typography>
        </FlexBetween>
      </Box>

      <Box p="0.2rem 0">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.5rem">
            <Groups2 />
            <Box>
              <Typography color={medium}>IT Professionals. Agi...</Typography>
            </Box>
          </FlexBetween>
        </FlexBetween>
      </Box>

      <Box p="0.2rem 0">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.5rem">
            <Groups2 />
            <Box>
              <Typography color={medium}>Artificial Intelligence...</Typography>
            </Box>
          </FlexBetween>
        </FlexBetween>
      </Box>

      <Box p="0.2rem 0">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.5rem">
            <Groups2 />
            <Box>
              <Typography color={medium}>JavaScript</Typography>
            </Box>
          </FlexBetween>
        </FlexBetween>
      </Box>

      <Box p="0.2rem 0">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.5rem">
            <Groups2 />
            <Box>
              <Typography color={medium}>Technology Investor...</Typography>
            </Box>
          </FlexBetween>
        </FlexBetween>
      </Box>

      <Box p="0.2rem 0">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.5rem">
            <Groups2 />
            <Box>
              <Typography color={medium}>Machine Learning...</Typography>
            </Box>
          </FlexBetween>
        </FlexBetween>
      </Box>

      <Box>
        <FlexBetween mb="0.5rem" mt="1rem">
          <Typography color={secondary}>Groups</Typography>
          <Typography
            color={secondary}
            fontWeight="500"
            sx={{
              "&:hover": {
                textDecoration: "underline",
                cursor: "pointer",
              },
            }}
          >
            {viewedProfile}
          </Typography>
        </FlexBetween>
      </Box>

      <Box p="0.2rem 0">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.5rem">
            <Groups2 />
            <Box>
              <Typography color={medium}>Tech Startup CEOs &...</Typography>
            </Box>
          </FlexBetween>
        </FlexBetween>
      </Box>

      <Box p="0.2rem 0">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.5rem">
            <Groups2 />
            <Box>
              <Typography color={medium}>Web Development </Typography>
            </Box>
          </FlexBetween>
        </FlexBetween>
      </Box>

      <Box p="0.2rem 0">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.5rem">
            <Groups2 />
            <Box>
              <Typography color={medium}>JavaScript</Typography>
            </Box>
          </FlexBetween>
        </FlexBetween>
      </Box>

      <Box p="0.2rem 0">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.5rem">
            <Groups2 />
            <Box>
              <Typography color={medium}>Technology Investor...</Typography>
            </Box>
          </FlexBetween>
        </FlexBetween>
      </Box>

      <Divider />

      <Box
        display="flex"
        alignItems="center"
        gap="1rem"
        m="1rem"
        sx={{ justifyContent: "center" }}
      >
        <Typography color={main} fontWeight="500">
          Discover more
        </Typography>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;

import { Bookmark } from "@mui/icons-material";
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
    <WidgetWrapper sx={{ marginLeft: "9rem" }}>
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        sx={{ justifyContent: "center" }}
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <Box>
            <UserImage image={picturePath} />
          </Box>
        </FlexBetween>
      </FlexBetween>

      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        sx={{ justifyContent: "center" }}
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                  cursor: "pointer",
                  textAlign: "center",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium} sx={{ textAlign: "center" }}>
              {occupation}
            </Typography>
            <Typography color={medium} sx={{ textAlign: "center" }}>
              in {location}
            </Typography>
          </Box>
        </FlexBetween>
      </FlexBetween>

      <Divider />

      <Box p="1rem 0">
        <FlexBetween mb="0.5rem">
          <Typography color={medium}>Profile viewers</Typography>
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
        <FlexBetween>
          <Typography color={medium}>Connections</Typography>
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
            {impressions}
          </Typography>
        </FlexBetween>
      </Box>

      <Divider />

      <Box sx={{ marginTop: "1rem" }}>
        <Typography color={medium} mb="1rem" fontSize="0.7rem">
          Strengthen your profile with an AI writing assistant
        </Typography>
        <Typography
          color={main}
          fontWeight="500"
          fontSize="0.8rem"
          sx={{ marginTop: "-1rem", marginBottom: "1rem" }}
        >
          Reactivate Premiun: 50% Off
        </Typography>

        <Divider />

        <Divider />
      </Box>

      <Box display="flex" alignItems="center" gap="1rem" m="0.5rem 0">
        <Bookmark fontSize="large" sx={{ color: main }} />
        <Typography color={main} fontWeight="500">
          My items
        </Typography>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;

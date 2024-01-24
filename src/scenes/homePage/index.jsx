import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import WeatherWidget from "scenes/widgets/WeatherWidget";
import RecentsWidget from "scenes/widgets/RecentsWidget";

const HomePage = () => {
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 15%"
        display="flex"
        gap="0.5rem"
        justifyContent="space-between"
        position="relative"
      >
        <Box flexBasis="26%">
          <UserWidget userId={_id} picturePath={picturePath} />
          <RecentsWidget />
        </Box>
        <Box flexBasis="42%">
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>

        <Box flexBasis="26%">
          <WeatherWidget />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;

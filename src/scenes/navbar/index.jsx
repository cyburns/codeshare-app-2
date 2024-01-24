import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Menu,
  Cottage,
  People,
  Work,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const alt = theme.palette.background.alt;
  const iconHover = theme.palette.neutral.mediumMain;

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding="0.8rem 25%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Box width="50px" height="50px">
          {theme.palette.mode === "dark" ? (
            <img
              width="50px"
              height="50px"
              src="../assets/codesmithLogoWhite.png"
              alt="Codeshare"
            />
          ) : (
            <img
              width="50px"
              height="50px"
              src="../assets/codesmithLogo2.png"
              alt="Codeshare"
            />
          )}
        </Box>

        <FlexBetween
          backgroundColor={neutralLight}
          borderRadius="5px"
          gap="3rem"
          padding="0.1rem 1rem"
        >
          <InputBase placeholder="Search..." />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
      </FlexBetween>

      <FlexBetween gap="2rem">
        <Cottage
          sx={{
            fontSize: "30px",
            "&:hover": {
              color: iconHover,
              cursor: "pointer",
            },
          }}
        />
        <Badge badgeContent={4} color="error">
          <People
            sx={{
              fontSize: "30px",
              "&:hover": {
                color: iconHover,
                cursor: "pointer",
              },
            }}
          />
        </Badge>

        <Work
          sx={{
            fontSize: "30px",
            "&:hover": {
              color: iconHover,
              cursor: "pointer",
            },
          }}
        />
        <Badge badgeContent={1} color="error">
          <Message
            sx={{
              fontSize: "30px",
              "&:hover": {
                color: iconHover,
                cursor: "pointer",
              },
            }}
          />
        </Badge>
        <Badge badgeContent={10} color="error">
          <Notifications
            sx={{
              fontSize: "30px",
              "&:hover": {
                color: iconHover,
                cursor: "pointer",
              },
            }}
          />
        </Badge>
        <FormControl variant="standard" value={fullName}>
          <Select
            value={fullName}
            sx={{
              backgroundColor: neutralLight,
              width: "150px",
              borderRadius: "0.25rem",
              p: "0.25rem 1rem",
              "& .MuiSvgIcon-root": {
                pr: "0.25rem",
                width: "3rem",
              },
              "& .MuiSelect-select:focus": {
                backgroundColor: neutralLight,
              },
            }}
            input={<InputBase />}
          >
            <MenuItem value={fullName}>
              <Typography>{fullName}</Typography>
            </MenuItem>
            <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            {/* <MenuItem onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <>
                  <Typography gap="2rem">Light Mode</Typography>
                  <DarkMode sx={{ fontSize: "20px", marginLeft: "2rem" }} />
                </>
              ) : (
                <>
                  <Typography gap="2rem">Dark Mode</Typography>
                  <LightMode
                    sx={{ color: dark, fontSize: "20px", marginLeft: "2rem" }}
                  />
                </>
              )}
            </MenuItem> */}
          </Select>
        </FormControl>
        <Menu
          sx={{
            fontSize: "30px",
            "&:hover": {
              color: iconHover,
              cursor: "pointer",
            },
          }}
        />
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;

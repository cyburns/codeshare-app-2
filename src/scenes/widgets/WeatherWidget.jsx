import {
  Typography,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";

const WeatherWidget = () => {
  const [newsData, setNewNewsData] = useState("");

  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  const url = "https://tech-news-live1.p.rapidapi.com/news";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d3dbc1da2dmsh33369341865fbbcp150d90jsn4c8c5202366c",
      "X-RapidAPI-Host": "tech-news-live1.p.rapidapi.com",
    },
  };

  const getWeather = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log("hello world");
      console.log({ result });
    } catch (error) {
      console.log("hello error");
      console.error(error);
    }
  };

  // useEffect(() => {
  //   getWeather();
  // }, []);

  return (
    <WidgetWrapper
      sx={{
        marginRight: "4rem",
      }}
    >
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Codeshare News
      </Typography>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            Tesla’s upgraded 2024 Model 3 is now available in the US
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            An updated version of Tesla’s Model 3 sedan that was released in
            markets across Europe, the Middle East, and China last fall is now
            available in North America. Reportedly codenamed “Highland” while it
            was in development, it introduces several noticeable tweaks to
            Tesla’s mainstream electric sedan.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>First Bitcoin ETFs approved by US regulators</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Fifteen years after the genesis block was mined (and after one false
            announcement), the US Securities and Exchange Commission approved
            Bitcoin exchange-traded funds. Bitcoin has fully joined the
            financial system it was built to challenge. The decision will make
            11 spot Bitcoin ETFs available to investors, such as those from
            Grayscale, Fidelity, BlackRock, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            Apple Watch drops blood oxygen features to dodge the import ban
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The blood oxygen feature is about to disappear from new Apple Watch
            Series 9 and Watch Ultra 2 devices. While Apple itself has not
            released a statement or responded to our request for comment, both
            Bloomberg and 9to5Mac are reporting that the feature will be going
            away and that US Customs and Border Protection has approved the
            measure, which would allow Apple to consider selling both products
            after their sale was banned last year.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            Microsoft unlocks Copilot AI inside Office apps for all businesses
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Microsoft is unlocking the doors for all businesses to get access to
            its AI-powered Office features. Microsoft’s Copilot for Microsoft
            365 launched in November with enterprise customers having to commit
            to at least 300 users and pick up the phone to get on the list. That
            was an additional $9,000 cost minimum for businesses, but now
            Microsoft’s AI-powered assistant is generally available for all
            businesses large and small with no minimum amount of users.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            Microsoft’s new Copilot Pro brings AI-powered Office features to the
            rest of us
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Microsoft first launched its AI-powered Office features for
            businesses in November, but just two months later the company is
            already offering them to consumers. Copilot Pro is launching today
            as a $20 monthly subscription that provides access to AI-powered
            features inside Office apps like Word, Excel, and PowerPoint
            alongside priority access to the latest OpenAI models and the
            ability to build your own Copilot GPT.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </WidgetWrapper>
  );
};

export default WeatherWidget;

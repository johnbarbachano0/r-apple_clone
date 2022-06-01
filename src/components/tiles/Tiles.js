import React from "react";
import { Typography } from "@mui/material";
import { styles } from "./styles";
import BuyButtons from "../BuyButtons";
import CustBox from "../CustBox";
import Logo from "./Logo";
import Tile from "./Tile";
import useCommon from "../useCommon";
// images
import arcade from "../../assets/arcade.jpg";
// import arcade_mbl from "../../assets/arcade_mobile.jpg";
import ipad from "../../assets/ipad.jpg";
import tv from "../../assets/tv.png";
import watch from "../../assets/watch.png";
import watch_pride from "../../assets/watch_pride.png";
import wwdc from "../../assets/wwdc.jpg";
import logo_ipad from "../../assets/logo_ipad.png";
import logo_pride from "../../assets/logo_pride.png";
import logo_wwdc from "../../assets/logo_wwdc.png";
import logo_watch from "../../assets/logo_watch.png";
import logo_arcade from "../../assets/logo_arcade.png";

const Tiles = () => {
  const { isMid } = useCommon();
  return (
    <CustBox sx={styles.container}>
      <Tile
        image={wwdc}
        sx={{
          backgroundSize: isMid ? "150% 100%" : "200% 100%",
          backgroundPosition: "50% 100%",
          alignItems: "flex-end",
          pb: 2,
        }}
        link={`https://developer.apple.com/wwdc22/`}
      >
        <CustBox sx={styles.box}>
          <Logo
            logo={logo_wwdc}
            height={isMid ? 30 : 40}
            width={isMid ? 150 : 200}
          />
          <Typography sx={{ ...styles.text, fontSize: isMid ? 16 : 20 }}>
            The Worldwide Developers Conference is coming. Join us online June
            7-11.
          </Typography>
          <BuyButtons learn={`https://developer.apple.com/wwdc22/`} />
        </CustBox>
      </Tile>

      <Tile
        image={watch}
        sx={{
          backgroundSize: "70% 70%",
          backgroundPosition: "60% 100%",
          alignItems: "flex-start",
          pt: 4,
        }}
        link={`https://www.apple.com/ph/apple-watch-series-7/`}
      >
        <CustBox
          sx={{
            ...styles.box,
          }}
        >
          <Logo
            logo={logo_watch}
            height={isMid ? 30 : 50}
            width={isMid ? 100 : 150}
          />
          <Typography
            sx={{ ...styles.text, color: "#000", fontSize: isMid ? 18 : 20 }}
          >
            Its our largest display yet.
          </Typography>
          <BuyButtons
            learn={`https://www.apple.com/ph/apple-watch-series-7/`}
            buy={`https://www.apple.com/ph/shop/goto/buy_watch/apple_watch_series_7`}
          />
        </CustBox>
      </Tile>

      <Tile
        image={ipad}
        sx={{
          backgroundColor: "#000",
          backgroundSize: "70% 70%",
          backgroundPosition: "60% 100%",
          alignItems: "flex-start",
        }}
        link={`https://www.apple.com/ph/ipad-air/`}
      >
        <CustBox
          sx={{
            ...styles.box,
            pt: 5,
          }}
        >
          <Logo logo={logo_ipad} height={isMid ? 30 : 40} width={140} />
          <Typography
            sx={{
              ...styles.text,
              color: "#fff",
              fontFamily: "SF Pro",
              fontSize: isMid ? 16 : 20,
            }}
          >
            Light. Bright. Full of might
          </Typography>
          <BuyButtons
            learn={`https://www.apple.com/ph/ipad-air/`}
            buy={`https://www.apple.com/ph/shop/buy-ipad/ipad-air`}
          />
        </CustBox>
      </Tile>

      <Tile
        image={tv}
        sx={{
          backgroundSize: isMid ? "50% 50%" : "70% 60%",
          backgroundPosition: "50% 90%",
          alignItems: "flex-start",
          pt: 4,
        }}
        link={`https://www.apple.com/ph/studio-display/`}
      >
        <CustBox
          sx={{
            ...styles.box,
          }}
        >
          <Typography
            sx={{
              ...styles.text,
              color: "#000",
              fontSize: isMid ? 30 : 40,
              p: 0,
            }}
          >
            Studio Display
          </Typography>
          <Typography
            sx={{
              ...styles.text,
              color: "#000",
              pt: 0,
              fontSize: isMid ? 18 : 20,
            }}
          >
            A sight to be bold.
          </Typography>
          <BuyButtons
            learn={`https://www.apple.com/ph/studio-display/`}
            buy={`https://www.apple.com/ph/shop/buy-mac/apple-studio-display`}
            padding={{ p: 1 }}
          />
        </CustBox>
      </Tile>

      <Tile
        image={watch_pride}
        sx={{
          backgroundSize: "70% 70%",
          backgroundPosition: "60% 100%",
          alignItems: "flex-start",
          pt: 2,
        }}
        link={`https://www.apple.com/ph/shop/goto/watch/bands`}
      >
        <CustBox
          sx={{
            ...styles.box,
          }}
        >
          <Typography
            sx={{ ...styles.text, color: "#000", fontSize: isMid ? 30 : 40 }}
          >
            Threads of
          </Typography>
          <Logo
            logo={logo_pride}
            height={isMid ? 30 : 40}
            width={isMid ? 100 : 125}
          />
          <BuyButtons
            learn={`https://www.apple.com/ph/shop/goto/watch/bands`}
            learnTitle={"Shop new Pride Edition bands"}
          />
        </CustBox>
      </Tile>

      <Tile
        image={arcade}
        sx={{
          backgroundSize: "180% 100%",
          backgroundPosition: "50% 100%",
          alignItems: "flex-start",
        }}
        link={`https://www.apple.com/ph/apple-arcade/`}
      >
        <CustBox
          sx={{
            ...styles.box,
            pt: 4,
          }}
        >
          <Logo
            logo={logo_arcade}
            height={isMid ? 30 : 35}
            width={isMid ? 140 : 160}
          />
          <Typography
            sx={{
              ...styles.text,
              color: "#000",
              fontFamily: "SF Pro",
              fontSize: isMid ? 18 : 20,
            }}
          >
            Calling all players.
          </Typography>
          <BuyButtons
            learn={`https://www.apple.com/ph/apple-arcade/`}
            buy={`https://www.apple.com/ph/apple-arcade/`}
            buyTitle={"Try it free*"}
          />
        </CustBox>
      </Tile>
    </CustBox>
  );
};

export default Tiles;


import { WiStars } from "react-icons/wi";
import { GiWallet} from "react-icons/gi";
import {FaDonate} from "react-icons/fa"
import { GiLaurelsTrophy,GiDiamondTrophy } from "react-icons/gi";
import {SiFsecure} from "react-icons/si"
import {TbCloudComputing} from "react-icons/tb"


export const statisticData = [
  {
    icon: <FaDonate />,
    figure: "165,489$",
    title: "Support Given",
  },
  {
    icon: <WiStars />,
    figure: "254 +",
    title: "Support Received",
  },
  {
    icon: <GiWallet />,
    figure: "2M +",
    title: "Donors",
  },
  {
    icon: <GiLaurelsTrophy />,
    figure: "578",
    title: "Awards",
  },
];

export const choose_us_data = [
  {
    icon:<GiDiamondTrophy/>,
    title:"Superior Quality",
    desc:"greater in quality, quantity, etc. of high or extraordinary worth, merit etc."
  },
  {
    icon:<SiFsecure/>,
    title:"High Durability",
    desc:"High extends a long way from the bottom to the top when it is upright"
  },
  {
    icon:<TbCloudComputing/>,
    title:"Energy Efficient",
    desc:"use of less energy to perform the same task or produce the same result"
  }
]
import { PlatformProps } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { IconType } from "react-icons";
interface Props {
  platforms: PlatformProps[];
}

const PlatformIconList = ({ platforms } : Props) => {
    const iconMap : {[key : string] : IconType}= {
        pc : FaWindows,
        playstation : FaPlaystation,
        xbox : FaXbox,
        nintendo : SiNintendo,
        mac : FaApple,
        linux : FaLinux,
        android : FaAndroid,
        ios : MdPhoneIphone,
        web : BsGlobe
    }

  return (
 <HStack marginY={1}>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        return (
          IconComponent && (
            <Icon
              as={IconComponent}
              color="gray.500"
              key={platform.slug}
              boxSize={4}
            />
          )
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;

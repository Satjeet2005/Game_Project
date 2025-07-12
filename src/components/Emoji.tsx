import meh from "../assets/meh-e338422f.webp"
import bullseye from "../assets/bulls-eye-d37f7fe5.webp";
import thumbsup from "../assets/thumbs-up.webp"                    
import { ImageProps } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

interface Props{
    rating : number;
}

const Emoji = ({ rating } : Props) => {
    const emojiList : { [key:number] : ImageProps}= {
        3 : { src : meh, alt : "meh", boxSize : "35px"},
        4 : { src : thumbsup, alt : "excellent", boxSize : "25px"},
        5 : { src : bullseye, alt : "exceptional",boxSize : "35px"}
    }

  return (
    <Image {...emojiList[rating]} mt={1}></Image>
  )
}

export default Emoji
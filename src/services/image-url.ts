import noImage from "/home/satjeet/Desktop/game-project/src/assets/no-image-placeholder-6f3882e0.webp"

interface Props{
    url : string;
}

const getImageUrl = ({url} : Props) => {
    if(!url) return noImage;
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index)
}

export default getImageUrl
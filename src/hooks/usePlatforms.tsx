import { PlatformProps } from './useGames';
import platforms from '../data/platforms';
interface PlatformResponse{
    count : number,
    results : PlatformProps[]
}

const usePlatforms = () => {


    return { data : platforms, error : null, isLoading : null } ;
}

export default usePlatforms
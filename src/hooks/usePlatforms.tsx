import { PlatformProps } from './useGames';

import useData from './useData'

interface PlatformResponse{
    count : number,
    results : PlatformProps[]
}

const usePlatforms = () => {

    const { data,error,isLoading } = useData<PlatformProps>("/platforms/lists/parents");

    return { data,error,isLoading } ;
}

export default usePlatforms
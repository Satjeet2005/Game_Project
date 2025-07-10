import React from 'react'
import { useState, useEffect } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios';

interface GameProps{
    id : number,
    name : string
}

interface FetchGameProps{
    count : number;
    results : GameProps[]
}

const useGames = () => {
        const [games,setGames] = useState<GameProps[]>([]);
        const [error,setError] = useState('');
    
        useEffect(() => {
            const controller = new AbortController();

            apiClient
            .get<FetchGameProps>('/games', {signal : controller.signal})
            .then(res => setGames(res.data.results))
            .catch(err => {
                if(err instanceof CanceledError)
                    return
                setError(err.message)})
    
            return () => controller.abort();
        },[])

  return { games, error }
}

export default useGames
import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import useData from './useData';

export interface Genre{
    id : number,
    name : string,
    image_background : string
}


const useGenres = () => {
    const { data, error, isLoading} = useData<Genre>('/genres');

  return { data, error, isLoading };
}

export default useGenres
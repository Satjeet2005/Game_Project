import React from "react";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface PlatformProps {
  id: number;
  name: string;
  slug: number;
}
export interface GameProps {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: PlatformProps }[];
}


const useGames = (genre : Genre | null,platform : PlatformProps | null) => {
    const { data, error, isLoading} = useData<GameProps>('/games',{ params: { genres : genre?.id, platforms : platform?.id}}, [genre?.id,platform?.id]);

  return { data, error, isLoading };
};

export default useGames;

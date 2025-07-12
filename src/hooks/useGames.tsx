import React from "react";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

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


const useGames = (gameQuery : GameQuery) => {
    const { data, error, isLoading} = useData<GameProps>('/games',{ params: { genres : gameQuery.genre?.id, platforms : gameQuery.platform?.id}}, [gameQuery]);

  return { data, error, isLoading };
};

export default useGames;

import React from "react";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

interface FetchGameProps {
  count: number;
  results: GameProps[];
}

const useGames = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGameProps>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;

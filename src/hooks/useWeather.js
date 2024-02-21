import { useQuery } from "@tanstack/react-query";

import { getCurrentWeather } from "../components/weather/services/accions";

export const useWeather = (lat, lon) => {

    const { isLoading, isError, error, data: currentWeather = {}, isFetching, isStale, refetch } = useQuery(

        { queryKey: ['currentWeatherTEST', lat, lon], queryFn: getCurrentWeather(lat, lon), staleTime: 60 * 60 * 1000 /* 60 minutos * 60 segundos * 1000 milisegundos*/ }

    );

    return {
        error,
        isError,
        isFetching,
        isLoading,
        currentWeather,
        isStale, refetch
    };

}
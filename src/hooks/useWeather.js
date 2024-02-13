import { useQuery } from "@tanstack/react-query";

import { getCurrentWeather } from "../components/weather/services/accions";

export const useWeather = (lat, lon) => {


    const { isLoading, isError, error, data: currentWeather = {}, isFetching } = useQuery(

        { queryKey: ['currentWeatherTEST', lat, lon], queryFn: getCurrentWeather(lat, lon), staleTime: 5000 }

    );



    return {
        error,
        isError,
        isFetching,
        isLoading,
        currentWeather,
    };
}


/*


     ['currentWeather'],
        console.log('jsg ejecuto getCurrentWeather'),//() => getCurrentWeather.getCurrentWeather(),
        {
            staleTime: 1000 * 60 * 60,
        }

*/
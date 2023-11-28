import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useTrainer = () => {

    const axiosPublic = useAxiosPublic();
    const { data: trainers = [], isPending: loading, refetch } = useQuery({

        queryKey: ['trainer'],
        queryFn: async () => {

            const res = await axiosPublic.get('/trainer');
            return res.data;
        }
    })
    return [trainers, loading, refetch]
};

export default useTrainer;
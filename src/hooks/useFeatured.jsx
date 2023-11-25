import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useFeatured = () => {

    const axiosPublic = useAxiosPublic();
    const { data: featured=[], isPending: loading, refetch } = useQuery({

        queryKey: ['featured'],
        queryFn: async () => {

            const res = await axiosPublic.get('/featured');
            return res.data;
        }
    })
    return [featured, loading, refetch]
};

export default useFeatured;
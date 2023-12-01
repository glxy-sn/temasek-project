import { axiosPrivate } from "../Api/axiosPrivate"

const useApiRA = () => {
    const getListRA = async () => {
        try {
            const data = await axiosPrivate
            .get(`/temasek/dashboard-ra/page`)
            .then(({data}) => {
                return data;
            });
            return data;
        }catch (err) {
            console.log(err.message);
        }
    };

    return {
        getListRA,
    };
};

export default useApiRA
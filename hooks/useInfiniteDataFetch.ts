import { useSWRInfinite } from "swr";
import { BaseSyntheticEvent } from "react";

const useInfiniteDataFetch = <T>(url: string) => {
    const getKey = (pageIndex, previousPageData) => {
        if (previousPageData && !previousPageData?.data?.length) return null;

        return url.replace(":page", pageIndex + 1);
    };
    const { data, size, setSize, error, mutate } = useSWRInfinite(getKey);
    const errors = Boolean(error);
    const ready = Boolean(data);
    const finalData = data || [];
    const isLoadingMore =
        size > 0 && data && typeof data?.[size - 1] === "undefined";

    const onLoadMore = (e: BaseSyntheticEvent) => {
        const bottom =
            e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        const isLastPage = data?.[0]?.meta.last_page === size;
        if (isLastPage) {
            return;
        }
        if (bottom) {
            setSize(size + 1);
        }
    };

    return { ready, data: finalData, isLoadingMore, onLoadMore, errors, mutate };
};

export default useInfiniteDataFetch;

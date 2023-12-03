import { useInfiniteQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import InfiniteScroll from 'react-infinite-scroll-component';

const getImageUrls = async ({ pageParam = 0 }) => {
    const res = await fetch(`http://localhost:5000/images?limit=12&offset=${pageParam}`);
    const data = await res.json();

    return { imageUrls: data, prevOffset: pageParam };
};

const Gallery = () => {
    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ['images'],
        queryFn: getImageUrls,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffset + 12 > lastPage.imageUrls.length) {
                return false;
            }
            return lastPage.prevOffset + 12;
        },
    });

    const imageUrls = data?.pages.reduce((acc, page) => {
        return [...acc, ...page.imageUrls];
    }, []);

    return (
        <div>
            <div className="bg-base-300 text-gray-900 text-center py-4">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ZenFiT | Gallery</title>
            </Helmet>
                <h1 className="text-4xl font-bold">--- Gallery Page ---</h1>
            </div>
            <div className='bg-base-200'>
                <InfiniteScroll
                    dataLength={imageUrls ? imageUrls.length : 0}
                    next={() => fetchNextPage()}
                    hasMore={hasNextPage}
                    loader={<div>Loading...☝️</div>}
                >
                    <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
                        {imageUrls &&
                            imageUrls.map((image, idx) => {
                                return (
                                    <div className="border-2 p-2 bg-slate-200 rounded" key={image._id}>
                                        <img src={image.url} alt={`Image ${idx + 1}`} className="w-full h-auto mb-2" />
                                    </div>
                                );
                            })}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default Gallery;

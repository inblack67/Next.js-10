import { useRouter } from 'next/router';

const SingleUser = () =>
{
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <h1>user id is { id }</h1>
        </div>
    );
};

export default SingleUser;

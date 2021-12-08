import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchposts } from '../../store/actions/postAction'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Masonry } from '@mui/lab';

interface RootState {
    allpost: any
}

const NewsTemplate = () => {
    const dispatch = useDispatch();
    const allpost = useSelector((state: RootState) => state.allpost)
    const { posts } = allpost

    useEffect(() => {
        dispatch(fetchposts());
    }, [])
    return (
        <>
            <h1>News</h1>
            <Masonry columns={4} spacing={1}>
                {posts && posts.map((post: any, index: number) => (
                    <Card key={index} sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {post.body}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                ))}
            </Masonry>
        </>
    )
}

export default NewsTemplate
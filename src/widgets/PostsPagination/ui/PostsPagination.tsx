import { useAppDispatch, useAppSelector } from 'app/hooks'
import { type FC } from 'react'
import { Pagination } from 'react-bootstrap'
import classes from './style.module.scss'
import { changeActivePaginationIndex } from 'app/store/slices/mainSlice'
import { FIRST_ARRAY_ITEM_INDEX } from 'shared/consts'

export const PostsPagination: FC = () => {
    const MIN_POSTS_ARRAY_FOR_DISPLAYED_PAGINATION = 2
    const splitedPosts = useAppSelector(state => state.posts.splitedPosts)
    const activePaginationIndex = useAppSelector(state => state.main.activePaginationIndex)
    const dispatch = useAppDispatch()

    return (
        <>
            {
                splitedPosts
                    ? <div className={ classes.pagination }>
                        {
                            splitedPosts.length < MIN_POSTS_ARRAY_FOR_DISPLAYED_PAGINATION
                                ? ''
                                : <Pagination size='sm'>
                                    {
                                        splitedPosts.map((item, index) => {
                                            return (
                                                <Pagination.Item
                                                    key={ item[FIRST_ARRAY_ITEM_INDEX].id }
                                                    active={ index === activePaginationIndex }
                                                    onClick={ () => {dispatch(changeActivePaginationIndex(index))} }
                                                >
                                                    { index + 1 }
                                                </Pagination.Item>
                                            )
                                        })
                                    }
                                </Pagination>
                        }
                    </div>
                    : ''
            }
        </>

    )
}

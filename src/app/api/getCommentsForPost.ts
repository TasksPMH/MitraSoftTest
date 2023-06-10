import axios from 'axios'
import { EApiMethods } from './types'
import { REQUEST_FAILED_MESSAGE, SUCCESS_RESPONSE_STATUS } from 'shared/consts'
import { IResponse } from 'shared/types'
import { ICommentItem } from 'entities/Comments/types'

export type IGetCommentsForPostResponse = IResponse<ICommentItem[]>

export async function getCommentsForPost(postId: number): Promise<IGetCommentsForPostResponse> {
    const commentsResponse: IGetCommentsForPostResponse = {
        isSucceeded: false
    }

    await new Promise(res=> setTimeout(() => res(true), 500))

    return axios.get(EApiMethods.GET_COMMENTS_BY_POST, {
        params: {
            postId
        }
    })
        .then(function (response) {
            if (response.status === SUCCESS_RESPONSE_STATUS) {
                commentsResponse.isSucceeded = true
                commentsResponse.data = response.data
            } else {
                commentsResponse.isSucceeded = false
                commentsResponse.message = response.statusText || REQUEST_FAILED_MESSAGE
            }
            return commentsResponse

        })
        .catch(function () {
            return {
                isSucceeded: false,
                message: REQUEST_FAILED_MESSAGE
            }
        })
}

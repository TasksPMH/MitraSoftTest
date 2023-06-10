import axios from 'axios'
import { EApiMethods } from './types'
import { REQUEST_FAILED_MESSAGE, SUCCESS_RESPONSE_STATUS } from 'shared/consts'
import { IResponse } from 'shared/types'
import { IPostItem } from 'entities/Posts/types'

export type IGetUserPostsResponse = IResponse<IPostItem[]>

export async function getUserPosts(userId: number): Promise<IGetUserPostsResponse> {
    const userPostsResponse: IGetUserPostsResponse = {
        isSucceeded: false
    }

    await new Promise(res=> setTimeout(() => res(true), 500))

    return axios.get(EApiMethods.GET_USERS_POSTS, {
        params: {
            userId
        }
    })
        .then((response) => {
            if (response.status === SUCCESS_RESPONSE_STATUS) {
                userPostsResponse.isSucceeded = true
                userPostsResponse.data = response.data
            } else {
                userPostsResponse.isSucceeded = false
                userPostsResponse.message = response.statusText || REQUEST_FAILED_MESSAGE
            }
            return userPostsResponse

        })
        .catch(function () {
            return {
                isSucceeded: false,
                message: REQUEST_FAILED_MESSAGE
            }
        })
}

import axios from 'axios'
import { EApiMethods } from './types'
import { REQUEST_FAILED_MESSAGE, SUCCESS_RESPONSE_STATUS } from 'shared/consts'
import { IResponse } from 'shared/types'
import { IPostItem } from 'entities/Posts/types'

export type IGetAllPostsResponse = IResponse<IPostItem[]>

export async function getAllPosts(): Promise<IGetAllPostsResponse> {
    const allPostsResponse: IGetAllPostsResponse = {
        isSucceeded: false
    }

    await new Promise(res=> setTimeout(() => res(true), 500))

    return axios.get(EApiMethods.GET_ALL_POSTS)
        .then(function (response) {
            if (response.status === SUCCESS_RESPONSE_STATUS) {
                allPostsResponse.isSucceeded = true
                allPostsResponse.data = response.data
            } else {
                allPostsResponse.isSucceeded = false
                allPostsResponse.message = response.statusText || REQUEST_FAILED_MESSAGE
            }
            return allPostsResponse

        })
        .catch(function () {
            return {
                isSucceeded: false,
                message: REQUEST_FAILED_MESSAGE
            }
        })
}

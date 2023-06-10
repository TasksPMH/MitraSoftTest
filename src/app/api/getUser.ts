import axios from 'axios'
import { EApiMethods } from './types'
import { REQUEST_FAILED_MESSAGE, SUCCESS_RESPONSE_STATUS } from 'shared/consts'
import { IResponse } from 'shared/types'
import { IUserItem } from 'entities/Users/types'

export type IGetUserResponse = IResponse<IUserItem>

export async function getUser(userId: number): Promise<IGetUserResponse> {
    const getUserResponse: IGetUserResponse = {
        isSucceeded: false
    }

    await new Promise(res=> setTimeout(() => res(true), 500))

    if (!userId) return getUserResponse

    return axios.get(`${EApiMethods.GET_USER}/${userId}`)
        .then(function (response) {
            if (response.status === SUCCESS_RESPONSE_STATUS) {
                getUserResponse.isSucceeded = true
                getUserResponse.data = response.data as IUserItem
            } else {
                getUserResponse.isSucceeded = false
                getUserResponse.message = response.statusText || REQUEST_FAILED_MESSAGE
            }
            return getUserResponse

        })
        .catch(function () {
            return {
                isSucceeded: false,
                message: REQUEST_FAILED_MESSAGE
            }
        })
}

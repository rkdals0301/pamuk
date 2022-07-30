import axiosInstance from '@/services/axios'

const endPoint = {
    lookupUserList: () =>
        `/users`
}

const recipeAPI = {
    lookupUserList: (params) =>
        axiosInstance.get(endPoint.lookupUserList(), {
            params
        })
}

export default recipeAPI

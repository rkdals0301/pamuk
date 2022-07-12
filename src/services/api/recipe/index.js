import axiosInstance from '@/services/axios'

const endPoint = {
  lookupRecipeList: () =>
    `/rest/api/v1`
}

const recipeAPI = {
  lookupRecipeList: (params) =>
    axiosInstance.get(endPoint.lookupRecipeList(), {
      params
    })
}

export default recipeAPI

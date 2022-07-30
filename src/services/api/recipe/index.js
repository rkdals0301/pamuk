import axiosInstance from '@/services/axios'

const endPoint = {
  lookupRecipeList: () =>
    `/recipes`
}

const recipeAPI = {
  lookupRecipeList: (params) =>
    axiosInstance.get(endPoint.lookupRecipeList(), {
      params
    })
}

export default recipeAPI

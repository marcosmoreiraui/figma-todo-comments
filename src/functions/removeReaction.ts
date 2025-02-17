import axios from 'axios'
import { constants } from '../constants'

const removeReaction = async (commentId: string, keys: { fileKey: string, token: string }) => {
  try {
    const response = await axios.delete(`${constants.BASE_API_URL}${keys.fileKey}/comments/${commentId}/reactions?emoji=:white_check_mark:`, {
      headers: {
        'X-Figma-Token': keys.token
      }
    })
    return response.data
  } catch (error) {
    parent.postMessage(
      {
        pluginMessage: {
          type: 'ERROR',
          content: 'Error adding the reaction. Please check your token permissions, we need "write" permissions in comments.'
        }
      },
      '*'
    )
  }
}

export default removeReaction

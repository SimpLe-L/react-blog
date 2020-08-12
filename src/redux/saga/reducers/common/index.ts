//公共reducer数据 比如 超时提示，公共的数据接口之类的
import { setRetryTip } from '../../actions/common';

const initialStateSetter = {
  retryTip:false
}

export default (state = initialStateSetter, action: ActionParams) => {
  switch (action.type) {
    case setRetryTip.TRIGGER: {
      return {
        ...state,
        retryTip:true,
      }
    }
  }
  return state;
}

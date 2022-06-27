//! 引入 element-plus 的loading
import { ElLoading } from 'element-plus'
//! loading 加载处理
const loading = {
  flag: null,

  open() {
    if (this.flag === null) {
      this.flag = ElLoading.service({
        lock: true, // 是否锁定屏幕的滚动
        text: '加载中……', // loading下面的文字
        background: 'rgba(0, 0, 0, 0.7)', // loading的背景色
        target: 'body' // loading显示在容器
      })
    }
  },
  //! 关闭loading加载
  close() {
    if (this.flag !== null) {
      this.flag.close()
      this.flag = null
    }
  }
}
export default loading

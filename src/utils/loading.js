// 引入 element-plus 的loading
import { ElLoading } from 'element-plus'
// loading 加载处理
const loading = {
  flag: null,
  open() {
    if (this.flag === null) {
      this.flag = ElLoading.service({
        target: 'body',
        background: 'rgba(0,0,0,0.4)'
      })
    }
  },
  // 关闭loading加载
  close() {
    if (this.flag !== null) {
      this.flag.close()
      this.flag = null
    }
  }
}
export default loading

export default {
  path: '/home',
  name: 'home',
  component: () => import('/@/views/home/index.vue'),
  meta: {
    title: '首页',
    isLink: '',
    isHide: false,
    isKeepAlive: true,
    isAffix: true,
    isIframe: false,
    roles: ['admin', 'common'],
    icon: 'iconfont icon-shouye'
  }
}

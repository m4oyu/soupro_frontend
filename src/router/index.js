import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../components/Signup.vue'
import Signin from '../components/Signin.vue'
import Wellcome from '../components/Wellcome.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/user/signin',
    component: Signin,
  },
  {
    path: '/user/signup',
    component: Signup
  },
  {
    path: '/welcome',
    component: Wellcome
  }
  // {
  //   path: '/home',
  //   name: 'Home',
  //   meta: 'Hint! トップページ',
  //   component: TopPage,
  //   beforeEnter: async function (from, to, next) {
  //     console.log(from)
  //     await pageInitializer.initHome()
  //     next()
  //   }
  // },

  // {
  //   path: '/detail',
  //   name: 'ArticleDetail',
  //   meta: '記事詳細ページ',
  //   component: () => import('../views/ArticleDetail.vue'),
  //   beforeEnter: async function (from, to, next) {
  //     const articleId = from.query.id
  //     await pageInitializer.initDetail(articleId)
  //     next()
  //   }
  // },
  // {
  //   path: '/articles',
  //   name: 'Articles',
  //   meta: '記事一覧ページ',
  //   component: () => import('../views/Articles.vue'),
  //   beforeEnter: async function (from, to, next) {
  //     const tagId = from.query.tag_id
  //     const tagName = from.query.tag_name
  //     const orderby = from.query.orderby
  //     console.log(tagId, tagName, orderby)
  //     await pageInitializer.initArticles(tagId, tagName, orderby)
  //     console.log('store', store)
  //     next()
  //   }
  // },
  // {
  //   path: '/companies',
  //   name: 'Companies',
  //   meta: '訪問企業一覧ページ',
  //   component: () => import('@/views/Companies.vue'),
  //   beforeEnter: async function (from, to, next) {
  //     await pageInitializer.initCompanies()
  //     next()
  //   }
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   meta: 'お問い合わせ',
  //   component: () => import('@/views/Contact.vue')
  // },
  // {
  //   name: 'notFound',
  //   path: '*',
  //   component: () => import('@/views/NotFound'),
  //   meta: { title: 'お探しのページは見つかりませんでした' }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/About', component: () => import('pages/About.vue') },
      { path: '/Courses', component: () => import('pages/Courses.vue') },
      { path: '/Pricing', component: () => import('pages/Pricing.vue') },
      { path: '/Gallery', component: () => import('pages/Gallery.vue') },
      { path: '/Blog', component: () => import('pages/Blog.vue') },
      { path: '/Contact', component: () => import('pages/Contact.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/Newlayout.vue'),
    children: [
      { path: '/pointerchange', component: () => import('pages/pointerchange.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

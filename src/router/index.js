import Vue from 'vue'
import Router from 'vue-router'
import DashboardPage from '@/pages/dashboard/DashboardPage'
import KpirPage from '@/pages/kpir/KpirPage'
import VatPage from '@/pages/vat/VatPage'
import ContractorsPage from '@/pages/contractors/ContractorsPage'
import FixedAssetsPage from '@/pages/fixedAssets/FixedAssetsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardPage
    },
    {
      path: '/kpir',
      name: 'kpir',
      component: KpirPage
    },
    {
      path: '/vat',
      name: 'vat',
      component: VatPage
    },
    {
      path: '/contractors',
      name: 'contractors',
      component: ContractorsPage
    },
    {
      path: '/fixed-assets',
      name: 'fixed-assets',
      component: FixedAssetsPage
    }
  ]
})

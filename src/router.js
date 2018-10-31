import Vue from 'vue'
import Router from 'vue-router'

import Contractors from '@/components/contractors';
import FixedAssets from '@/components/fixed-assets';
import Kpir from '@/components/kpir';
import Vat from '@/components/vat';

Vue.use(Router)

export default new Router({
  routes: [
    { name: 'home', path: '', components: {} },
    Contractors,
    FixedAssets,
    Kpir,
    Vat,
  ]
})

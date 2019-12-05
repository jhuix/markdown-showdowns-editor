/*
 * @Description: showdown markdown editor
 * @Author: Jhuix (Hui Jin) <jhuix0117@gmail.com>
 * @Date: 2019-08-18 14:05:41
 * @LastEditors: Jhuix (Hui Jin) <jhuix0117@gmail.com>
 * @LastEditTime: 2019-09-14 23:08:24
 */

import VueMDSE from './index';

export default VueMDSE;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueMDSE);
}

// define all the tabs
var tabs = [
  {
    name: 'Home',
    component: {
      template: `<div>主页</div>`
    }
  },
  {
    name: 'Bolg',
    component: {
      template: `<div>Posts</div>`
    }
  },
  {
    name: 'Archive',
    component: {
      template: `<div>Archive</div>`
    }
  }
]

new Vue({
  el: '#dynamic-component-demo',
  data: {
    tabs: tabs,
    currentTab: tabs[0]
  }
})

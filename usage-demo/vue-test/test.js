// 响应式测试
//var data = { name: "Jack ma", email: "al@alibaba.com" };

//var vm = new vue({data: data});

//vm.name = "Leborn James";
//vm.email = "ji@inno.top"

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello vue'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '初次加载' + new Date().toLocaleTimeString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {text: 'Basic Javascript'},
      {text: 'Basic Vue'},
      {text: 'Do something great'},
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Just a simple statement!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Begin Vue'
  }
});

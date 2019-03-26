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

// 模块化使用的实例
// 定义一个 todo-item的组件
Vue.component('todo-item', {
  // 使用 props 定义自定义属性
  props: ['title'],   
  template: '<li>{{ title }}<button v-on:click="$emit(\'remove\')">Remove</button> </li>'
});

var app7 = new Vue({
  el: '#app-7',
  // 生命周期钩子
  // 还有 mounted updated destoryed
  updated: function () {
    console.log('visitCount is ' +  this.visitCount);
  },
  data: {
    todos: [
      { id: 0, text: 'Do some cleaning' },
      { id: 1, text: 'Having dinner with beautiful lady' },
      { id: 2, text: 'Buy clothes' },
    ],
    newTodoText: '',
    nextTodoId: 3,
    visitCount: 0,
    error: null,
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({
        id: this.nextTodoId ++,
        text: this.newTodoText
      });
      this.newTodoText = '';
    }
  }
});


// 实例的属性与方法
// 可以使用 $ 操作符调用一个实例的属性以及方法
var person = {name: 'MJ'};
var vm = new Vue({
  el: '#example',
  data: person
});
console.log(vm.$data === person);
console.log(vm.$el === document.getElementById('example'))

// 使用$watch 执行一次函数回调
vm.$watch('name', function (val) {
  // 当 'name' 改变后调用

});



// template usage test
var app8 = new Vue({
  el: '#app-8',
  data: {
    message: 'This will be in a different color',
    raw_message: '<span style="color: red">This will be red</span>'
  }
});


/*指令与参数:
 *  Vue 可以使用v-dir的形式进行囧指令的调用,例如
 *  v-if , v-for, v-bind 可以用于元素的绑定,
 *  v-on 用于监听一个DOM事件
 *
 *
 *  可以使用一个[JS-ops]作为一个指令的参数,使用动态参数
 *
 *
 *  修饰符:可以在一个指令的后面跟上一个`.`操作符,作为修饰符
 *  <form v-on:submit.prevent="onSubmit></form>
 *
 *  v-bind-> :
 *  v-on -> @*/


// 计算属性,可以用于作为方法的缓存,不是响应式的方法
// 直接缓存最终的结果,是不可变的
var app9 = new Vue({
  el: '#app-9',
  data: {
    message: 'Now use the computed attribute',
    firstName: 'Leborn',
    lastName: 'James',
  },
  computed: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('');
    },
    fullName: {
      // 计算属性可以设置 getter setter
      get: function () {
        return this.firstName + ' ' + this.lastName;
      },
    
      set: function(full) {
        var names = full.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
      },
    }  
  }
});


// Class and style 的绑定,可以使用 v-bind 指令进行类以及
// 样式的绑定,其中支持,对象,数组以及内联的方式

// <div v-binb:class="{ A: isActive}">
// 当属性值 isActive 为真时可以将这个类别标签添加到
// div上,否则不添加,这是对象的类别绑定
//
// <div
//  class="static"
//  v-bind:class="{ active: isActive, 'text-danger': hasError }"
// ></div>
//
// 数组语法:
// <div v-bind:class="[activeClass, errorClass]"></div>
// data: {
//  activeClass: 'active',
//  errorClass: 'text-danger'
// }
//
// <div v-bind:class="[{ active: isActive }, errorClass]"></div>
// 等价于使用三元表达式:
// <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
// 默认如果 isActive 不为真,则只加载错误信息
//

var app10 = new Vue({
  el: '#app-10',
  data: {
    activeColor: 'red',
    fontSize: 30,
    styleObj: {
      color: 'green',
      fontsize: '15px'
    },
    awesome: false,
  }
});

var tem1 = new Vue({
  el: '#tem-1',
  data: {
    loginType: 'username'
  },
  methods: {
    changed: function () {
      if (this.loginType === 'username') {
        this.loginType = 'email';
      } else {
        this.loginType = 'username';
      }
    }
  }
});


// v-if & v-show:
// v-if 的加载是惰性的,也解释说在初始条件下如果不需要加载
// 该组件,那么就不会加载,v-show 将所有组件在初始加载,可以降低
// 切换开销
//
// v-for 语句具有对于父作用域的的全部访问权
// 使用 v-for="(index, item) in itmes" 的语法进行刘表访问
// 同时支持对于对象属性的访问
//
// (value, key) in object
// (value, key, index) in object
//
//
// Vue不可以检测对象属性的增加或者删除,不可以检测数组的直接的下标
// 操作,以及对于length属性的直接操作,可以使用
// Vue.set(array, index, value) 操作数组
// vm.itmes.splice(newLength)
// Vue.set(obj, key, value)   操作对象
//
//
// 为了为一个对象添加多个属性可以将两个对象合并为一个对象
//
// vm.userProfile = Object.assign({}, vm.userProfile, {
//  age: 27,
//  favoriteColor: 'Vue Green'
//})
var fav = {
  name: "Leborn James",
  age: 35,
  height: '6.9inc',
  children: ['BJ', 'MJ', 'Sj']
};

var favVm = new Vue({
  el: '#fav',
  data: {
    star: fav
  },
  methods: {
    addOne: function () {
      var len = this.star.children.length;
      this.$set(this.star.children, len, 'LJ');
    },
    reset: function() {
      this.star.children.splice(3);
      this.star.age = 35;
    }
  }
});

// 定义组件中使用 v-for 指令时,需要明确key

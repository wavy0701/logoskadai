(function() {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      newItem2: '',
      newItem3: '',
      newItem4: '',
      todos: []
    },
    watch: {
      todos: {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true
      }
    },
    methods: {
      addItem: function() {
        var item = {
          title: this.newItem,
          title2: this.newItem2,
          title3: this.newItem3,
          title4: this.newItem4,
          isDone: false
        };
        this.todos.push(item);
        this.newItem = '';
        this.newItem2 = '';
        this.newItem3 = '';
        this.newItem4 = '';
      },
      deleteItem: function(index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1);
        }
      },
      purge: function() {
        if (!confirm('delete finished?')) {
          return;
        }
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining: function() {
        return this.todos.filter(function(todo) {
          return !todo.isDone;
        });
      }
    }
  });
})();

<template lang="html">
<div id="app">
  <input type="text" name="" value="" v-model="text">
  <input type="button" name="add" value="add" @click="addTodo(text)">
  <ul>
    <li v-for="todo in todos" :key="todo['.key']">
      <input type="text" name="" :value="todo.description" @input="updateTodo(todo['.key'], $event.target.value)">
      <input type="button" name="" value="delete" @click="deleteTodo(todo['.key'])">
    </li>
  </ul>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      text: '',
      todos: []
    }
  },
  methods: {
    addTodo (text) {
      this.$firebaseRefs.todos.push(
        {
          'description': text,
          'done': false
        }
      )
    },
    deleteTodo (key) {
      this.$firebaseRefs.todos.child(key).remove()
    },
    updateTodo (key, value) {
      this.$firebaseRefs.todos.child(key + '/description').set(value)
    }
  },
  mounted () {
    this.$bindAsArray('todos', firebase.database().ref('/todos'), null)
  }
}
</script>

<style lang="css">
</style>

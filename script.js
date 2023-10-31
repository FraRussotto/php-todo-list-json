const { createApp } = Vue;

createApp({
  data(){
    return {
      list: [],
      newTask: ''
    }
  },
  methods:{
    getListTasks(){
      axios.get('server.php')
      .then(res => {
        this.list = res.data;
      })
    },
    addTask(){
      const data = new FormData();
      data.append('task', this.newTask);
      data.append('isDone', false);
      axios.post('server.php', data)
        .then(res => {
          this.list = res.data;
          this.newTask = ''
        })
    },
    deleteTask(index){
      const data = new FormData();
      data.append('itemToDelete', index)
      axios.post('server.php', data)
        .then(res => {
          this.list = res.data;
        })
    },
    changeStatus(index){
      const data = new FormData();
      data.append('itemToChange', index)
      axios.post('server.php', data)
        .then(res => {
          this.list = res.data;
        })
    }
  },
  mounted(){
    this.getListTasks();
  }





}).mount('#app');
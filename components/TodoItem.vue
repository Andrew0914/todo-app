<template>
    <div class="card text-white mb-3" :class="`bg-${dataColor} ${dataDone ? 'todo-done':''}`" style="max-width: 18rem;">
        <div class="card-header">

            <span v-if="mode == 'normal'">
                {{dataTitle}}
            </span>

            <input type="text" class="form-control mb-1" v-else-if="mode == 'edit'" v-model="dataTitle">
            <input type="checkbox" class="float-right" v-model="dataDone" @click="markAsDone">

        </div>
        <div class="card-body">
            <p class="card-text" v-if="mode == 'normal'">{{dataContent}}</p>

            <span v-else-if="mode == 'edit'">

               <textarea resize="false" rows="5" class="form-control"  v-model="dataContent"></textarea>

               <select class="form-control mt-2" v-model="dataColor">
                   <option v-for='colour in colors' v-bind:key='colour' :value='colour'>{{colour}}</option>
               </select>

            </span>
            
        </div>
        <div class="card-footer">

                <button type="button" class="btn btn-sm btn-outline-light" 
                    v-if="mode == 'edit'" 
                    @click="save"
                    :disabled='dataDone'>Save</button>

                <button type="button" class="btn btn-sm btn-outline-light" 
                    v-else-if="mode == 'normal'" 
                    @click="edit"
                    :disabled='dataDone'>Edit</button>

                <button type="button" class="btn btn-sm btn-outline-light"
                    @click="_delete"
                    :disabled='dataDone'>Delete</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props:{
        id:{
            type: Number,
            required: true
        },
        userId:{
            type: Number,
            required: true
        },
        title:{
            type: String,
            default: 'TODO TITLE',
        },
        done:{
            type: Boolean ,
            default: false
        },
        content:{
            type: String,
            default: 'TODO CONTENT',
        },
        color:{
            type: String,
            default: 'danger',
        }

    },
    data(){
        return{
            mode:'normal',
            colors: ['primary','info','secondary','danger','warning','dark','success'],
            dataTitle: this.title,
            dataDone: this.done,
            dataContent: this.content,
            dataColor: this.color
        }
    },
    methods: {
        ...mapActions('todos',{
            editTodo:'editTodo',
            deleteTodo: 'deleteTodo',
            doneTodo: 'doneTodo'
        }),
        edit() {
            this.mode = "edit";
        },
        save() {
            this.mode = "normal";
            this.editTodo({
                id: this.id,
                userId: this.userId,
                title: this.dataTitle,
                content: this.dataContent,
                color: this.dataColor
            });
        },
        _delete() {
            this.deleteTodo(this.id);
        },
        markAsDone() {
            this.doneTodo({id: this.id, done: !this.dataDone});
        }
    }
}
</script>
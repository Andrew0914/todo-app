<template>
    <div class="card text-white mb-3" :class="`bg-${color} ${done ? 'todo-done':''}`" style="max-width: 18rem;">
        <div class="card-header">

            <span v-if="mode == 'normal'">
                {{title}}
            </span>

            <input type="text" class="form-control mb-1" v-else-if="mode == 'edit'" v-model="title">
            <input type="checkbox" class="float-right" v-model="done">

        </div>
        <div class="card-body">
            <p class="card-text" v-if="mode == 'normal'">{{content}}</p>

            <span v-else-if="mode == 'edit'">

               <textarea resize="false" rows="10" class="form-control"  v-model="content"></textarea>

               <select class="form-control mt-2" v-model="color">
                   <option v-for='color in colors' v-bind:key='color' :value='color'>{{color}}</option>
               </select>

            </span>
            
        </div>
        <div class="card-footer">

                <button type="button" class="btn btn-sm btn-outline-light" 
                    v-if="mode == 'edit'" 
                    @click="save"
                    :disabled='done'>Save</button>

                <button type="button" class="btn btn-sm btn-outline-light" 
                    v-else-if="mode == 'normal'" 
                    @click="edit"
                    :disabled='done'>Edit</button>

                <button type="button" class="btn btn-sm btn-outline-light"
                    @click="_delete"
                    :disabled='done'>Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:'TODO TITLE',
            done:false,
            content:'TODO CONTENT',
            color:'danger',
            mode:'normal',
            colors: ['primary','info','secondary','danger','warning','dark','success']
        }
    },
    methods: {
        edit(){
            this.mode = "edit";
        },
        save(){
            this.mode = "normal";
        },
        _delete(){
            alert("delete");
        }
    }
}
</script>
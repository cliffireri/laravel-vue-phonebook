<template>
    <div>
        <nav class="panel column is-offset-2 is-8">
            <p class="panel-heading">
                Cliff Phonebook
                <button @click = "openModal()" class="button is-link is-outlined">
                    Add Number
                </button>
            </p>
            <div class="panel-block">
                <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="Search">
                    <span class="icon is-left">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </span>
                </p>
            </div>
            <a v-for="(item,key) in lists" class="panel-block">
                <div class="column is-9">
                    {{ item.name }}
                </div>
                <div class="column is-1">
                <span class="panel-icon">
                  <i class="has-text-danger fa fa-trash" aria-hidden="true"></i>
                </span>
                </div>
                <div class="column is-1">
                <span class="panel-icon">
                  <i class="has-text-primary fa fa-edit" aria-hidden="true"></i>
                </span>
                </div>
                <div class="column is-1">
                <span class="panel-icon">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </span>
                </div>
            </a>
        </nav>
        <Add @closeRequest="closeModal()" :activemodal="modalActive"></Add>
    </div>
</template>
<script>
    import Add from './Add.vue';
    export default{
        components: {
            Add
        },
        data() {
            return {
                modalActive: '',
                lists: {},
                errors: {},
            }
        },
        methods: {
            openModal() {
                this.modalActive = 'is-active';
            },
            closeModal() {
                this.modalActive = '';
            }
        },
        mounted() {
            axios.post('/getData').then((response) => {
                this.lists = response.data;
                console.log(response)
            }).catch((error) => {
                console.log(error);
            })
        }
    }
</script>
<style></style>

<template>
    <div>
        <nav class="panel column is-offset-2 is-8">
            <p class="panel-heading">
                Cliff Phonebook
                <button @click = "openModal()" class="button is-link is-outlined">
                    Add Number
                </button>
                <span class="is-pulled-right" v-if="loading">
                     <i class="fa fa-refresh fa-spin fa-2x fa-fw"></i>
                </span>
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
                      <i class="has-text-danger fa fa-trash" aria-hidden="true" @click="del(key, item.id)"></i>
                    </span>
                </div>
                <div class="column is-1">
                    <span class="panel-icon">
                      <i @click="openUpdate(key)" class="has-text-primary fa fa-edit" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="column is-1">
                    <span class="panel-icon">
                      <i @click="openShow(key)" class="fa fa-eye" aria-hidden="true"></i>
                    </span>
                </div>
            </a>
        </nav>
        <Add @closeRequest="closeModal()" :activemodal="modalActive"></Add>
        <ShowDetails @closeRequest="closeModal()" :openmodal="showActive"></ShowDetails>
        <Update @closeRequest="closeModal()" :openupdate="showUpdate"></Update>
    </div>
</template>
<script>
    import Add from './Add.vue';
    import ShowDetails from './ShowDetails.vue';
    import Update from './Update';
    export default{
        components: {
            Add,ShowDetails,Update
        },
        data() {
            return {
                modalActive: '',
                lists: {},
                errors: {},
                showActive: '',
                showUpdate: '',
                loading: false
            }
        },
        methods: {
            openModal() {
                this.modalActive = 'is-active';
            },
            closeModal() {
                this.modalActive = this.showActive = this.showUpdate = '';
            },
            openShow(key) {
                this.$children[1].list = this.lists[key];
                this.showActive = 'is-active';
            },
            openUpdate(key) {
                this.$children[2].list = this.lists[key];
                this.showUpdate = 'is-active';
            },
            del(key, id){
                if(confirm("Are you sure?")){
                    this.loading = !this.loading;
                    axios.delete(`/phonebook/${id}`).then((res) => {
                        console.log('deleted')
                        this.loading = !this.loading;
                        this.lists.splice(key, 1);
                    }).catch( (error) => {
                        console.log(error)
                    });
                }
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

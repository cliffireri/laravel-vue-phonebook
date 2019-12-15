<template>
    <div class="modal" :class="activemodal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button class="delete" @click = "$emit('closeRequest')" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input :class="{'is-danger': errors.name}" v-model="list.name" class="input" type="text" placeholder="Name">
                    </div>
                    <small class="has-text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
                </div>
                <div class="field">
                    <label class="label">Phone</label>
                    <div class="control">
                        <input :class="{'is-danger': errors.phone}" v-model="list.phone" class="input" type="text" placeholder="Phone">
                    </div>
                    <small class="has-text-danger" v-if="errors.phone">{{ errors.phone[0] }}</small>
                </div>
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input :class="{'is-danger': errors.email}" v-model="list.email" class="input" type="email" placeholder="Email">
                    </div>
                    <small class="has-text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click="save">Save changes</button>
                <button class="button" @click = "$emit('closeRequest')">Cancel</button>
            </footer>
        </div>
    </div>
</template>
<script>
    export default{
        props:[
            'activemodal'
        ],

        data() {
            return {
                list: {
                    email: '',
                    name: '',
                    phone: ''
                },
                errors: {

                }
            }
        },
        methods: {
            save() {
                axios.post('/phonebook', this.$data.list).
                    then((response) => {
                        console.log(response);
                        this.$emit('closeRequest');
                }).catch( (error) => {
                    this.errors = error.response.data.errors;
                })
            }
        }
    }
</script>

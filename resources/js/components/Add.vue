<template>
    <div class="modal" :class="activemodal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button class="delete" @click = "$emit('closeRequest')" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <!-- Content ... -->
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button" @click = "$emit('closeRequest')">Cancel</button>
            </footer>
        </div>
    </div>
</template>
<script>
    export default{
        props:[
            'activemodal'
        ]
    }
</script>

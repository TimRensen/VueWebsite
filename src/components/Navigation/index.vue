<template>
    <div id="navigation">
        <navbar/>
        <offcanvas/>
    </div>
</template>

<script>
    import navbar from '@/components/Navigation/Navbar/navbarGrey.vue'

    import offcanvas from '@/components/Navigation/Offcanvas/offcanvasColorful.vue'
    // import offcanvas from '@/components/Navigation/Offcanvas/offcanvasGrey.vue'

    export default {
        name: 'navigation',
        components: {
            navbar,
            offcanvas,
        },
        methods: {
        }
    }
</script>
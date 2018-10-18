<template>
    <div id="app">
        <navigation/>
        <div ref="main" id="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import navigation from '@/components/Navigation/index.vue';

    export default {
        name: 'app',
        components: {
            navigation
        },
        methods: {}
    }
</script>

<style lang="less">
    #main {
        transition: margin-left .5s;
        padding: 10px;
        text-align: center;
        height: 100%;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #a5a5a5;
        font-size: calc(16px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    }

    a:-webkit-any-link {
        color: inherit;
        text-decoration: none;
    }

    @media screen and (min-width: 480px) {
        #app {
            font-size: calc(12px + 15 * ((100vw - 300px) / (1600 - 300)));
        }
    }

    @media screen and (min-width: 768px) {
        #app {
            font-size: 24px;
        }
    }

    @media screen and (min-width: 1024px) {
        #app {
            font-size: 36px;

            #main {
                font-size: 24px;
            }
        }
    }
</style>

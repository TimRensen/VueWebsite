<template>
    <div id="navigation">
        <div class="topBar">
            <div class="left">
                <div class="content">
                    <i class="fas fa-bars" @click="openNav"></i>
                </div>
            </div>
            <div class="mid">
                <div class="content">
                    <div class="ele">
                        <!--<div>-->
                        <i class="fas fa-file-alt"></i>
                        <!--</div>-->
                    </div>
                    <div class="ele">
                        <!--<div>-->
                        <i class="fas fa-calendar-alt"></i>
                        <!-- </div>-->
                    </div>
                    <div class="ele">
                        <!--<div>-->
                        <i class="fas fa-address-book"></i>
                        <!--</div>-->
                    </div>
                    <div class="ele">
                        <!--div>-->
                        <i class="fas fa-users"></i>
                        <!-- </div>-->
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="content">
                    <i class="fab fa-500px"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
        components: {},
        methods: {
            openNav: function () {
                var vm = this;

                this.$root.$emit('openOffcanvas');
            },
            closeNav: function () {
                var vm = this;

                offcanvas.methods.closeOffcanvas();
            }
        }
    }
</script>

<style lang="less">
    .topBar {
        width: 100%;
        height: 80px;
        background-color: #111;
        font-size: 36px;
        color: #a5a5a5;

        .left, .mid, .right {
            float: left;
            height: 100%;

            i {
                &:hover {
                    color: white;
                }
            }

            .content {
                height: 100%;
            }

            .ele {
                width: 25%;
                height: 100%;
                float: left;
            }
        }

        .left, .right {
            width: 20%;

            .content {
                text-align: center;

                * {
                    bottom: 50%;
                    transform: translateY(50%);
                }
            }
        }

        .mid {
            width: 60%;

            .ele {
                text-align: left;

                * {
                    bottom: 50%;
                    transform: translateY(50%);
                }

                i {
                    padding-left: 10%;
                }
            }
        }

        .right {
            color: lightblue;
        }
    }
</style>
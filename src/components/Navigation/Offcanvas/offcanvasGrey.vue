<template>
    <div id="offcanvasId">
        <div id="offcanvasWrapperId" class="navigation--offcanvas">
            <div class="navigation--offcanvas--table">

                <div class="navigation--offcanvas--tableRow">
                    <div class="navigation--offcanvas--table-cell">
                        <div class="navigation--offcanvas--top-buttons">
                            <div @click="closeOffcanvas"
                                 class="navigation--offcanvas--button navigation--offcanvas--button--close">
                                <i class="fas fa-times"></i>
                            </div>
                            <div @click="closeOffcanvas"
                                 class="navigation--offcanvas--button navigation--offcanvas--button--home">
                                <router-link to="/">
                                    <i class="fas fa-home"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="navigation--offcanvas--content">
                            <div class="navigation--offcanvas--nav">
                                <!-- News -->
                                <div class="navigation--offcanvas--nav--navEle" @click="closeOffcanvas">
                                    <router-link to="/News" class="navigation--offcanvas--router">
                                        <div class="navigation--offcanvas--router-wrapper">
                                            <div class="navigation--offcanvas--router-icon">
                                                <i class="fas fa-file-alt"></i>
                                            </div>
                                            <div class="navigation--offcanvas--router-text">
                                                <span class="navigation--offcanvas--router-span">News</span>
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                                <!-- Kalender -->
                                <div class="navigation--offcanvas--nav--navEle" @click="closeOffcanvas">
                                    <router-link to="/Kalender" class="navigation--offcanvas--router">
                                        <div class="navigation--offcanvas--router-wrapper">
                                            <div class="navigation--offcanvas--router-icon">
                                                <i class="fas fa-calendar-alt"></i>
                                            </div>
                                            <div class="navigation--offcanvas--router-text">
                                                <span class="navigation--offcanvas--router-span">Kalender</span>
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                                <!-- Kader -->
                                <div class="navigation--offcanvas--nav--navEle" @click="closeOffcanvas">
                                    <router-link to="/Kader" class="navigation--offcanvas--router">
                                        <div class="navigation--offcanvas--router-wrapper">
                                            <div class="navigation--offcanvas--router-icon">
                                                <i class="fas fa-address-book"></i>
                                            </div>
                                            <div class="navigation--offcanvas--router-text">
                                                <span class="navigation--offcanvas--router-span">Kader</span>
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                                <!-- Teams -->
                                <div class="navigation--offcanvas--nav--navEle" @click="closeOffcanvas">
                                    <router-link to="/Teams" class="navigation--offcanvas--router">
                                        <div class="navigation--offcanvas--router-wrapper">
                                            <div class="navigation--offcanvas--router-icon">
                                                <i class="fas fa-users"></i>
                                            </div>
                                            <div class="navigation--offcanvas--router-text">
                                                <span class="navigation--offcanvas--router-span">Team</span>
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navigation--offcanvas--tableRow">
                    <div class="navigation--offcanvas--table-cell navigation--offcanvas--table-cell--footer">
                        <div class="navigation--offcanvas--footer">
                            <div class="navigation--offcanvas--footer-container">
                                <div class="navigation--offcanvas--footer-container--btn-container navigation--offcanvas--btn-container--login-btn">
                                    <span class="navigation--offcanvas--btn-container-text">LOG IN</span>
                                </div>

                                <div class="navigation--offcanvas--footer-container--btn-container navigation--offcanvas--btn-container--signup-btn">
                                    <span class="navigation--offcanvas--btn-container-text">SIGN UP</span>
                                </div>
                                <div class="navigation--offcanvas--social-media-container">
                                    <!-- Facebook -->
                                    <i class="fab fa-facebook-square"></i>
                                    <!-- Instagram -->
                                    <i class="fab fa-instagram"></i>
                                    <!-- Youtube -->
                                    <i class="fab fa-youtube"></i>
                                    <!-- Twitter -->
                                    <i class="fab fa-twitter-square"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'offcanvas',
        methods: {
            openOffcanvas: function () {
                var vm = this;

                var w = window.innerWidth;

                offcanvasWrapperId.style.transform = "translateX(0%)";
                body.style.overflow = "hidden";

                if (this.$mq === 'mobile' || w < 768) {
                } else if (this.$mq === 'tablet' || w < 1024) {
                } else if (this.$mq === 'tabletLandscape' || w < 1260) {
                } else if (this.$mq === 'desktop' || w > 1260) {
                }
            },
            closeOffcanvas: function () {
                var vm = this;

                offcanvasWrapperId.style.transform = "translateX(-100%)";
                body.style.overflow = "visible";
            }
        },
        mounted() {
            this.$root.$on('openOffcanvas', event => {
                this.openOffcanvas();
            });
        }
    }
</script>

<style lang="less">
    .navigation--offcanvas {
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        transition: 1s;
        transform: translateX(-100%);

        .navigation--offcanvas--table {
            display: table;
            height: 100%;
            width: 100%;

            .navigation--offcanvas--tableRow {
                display: table-row;

                .navigation--offcanvas--table-cell {
                    display: table-cell;

                    &.navigation--offcanvas--table-cell--footer {
                        vertical-align: bottom;
                    }
                }
            }
        }
    }

    .navigation--offcanvas--top-buttons {
        display: block;
        height: 80px;
        position: relative;

        .navigation--offcanvas--button {
            display: inline-block;
            font-size: 36px;
            bottom: 50%;
            transform: translateY(50%);
            position: absolute;

            &.navigation--offcanvas--button--close {
                left: 30px;
            }

            &.navigation--offcanvas--button--home {
                right: 30px;
            }

            &:hover {
                transform: scale(1.1) translateY(48%);
            }
        }
    }

    .navigation--offcanvas--content {
        margin: 0 10%;
        text-align: center;

        .navigation--offcanvas--nav {
            margin-bottom: 15px;
        }

        .navigation--offcanvas--nav--navEle {
            width: 50%;
            display: inline-block;

            &:hover {
                transform: scale(1.1);
            }

            i {
                font-size: 50px;
                margin-bottom: 5px;
            }

            span {
                //font-size: 25px;
            }

            .navigation--offcanvas--router-wrapper {
                padding: 20px;
            }
        }
    }

    .navigation--offcanvas--footer {
        margin: 0 10% 35px;
        text-align: center;

        .navigation--offcanvas--footer-container {
            margin-bottom: 20px;

            .navigation--offcanvas--footer-container--btn-container {
                border: 2px solid;
                border-radius: 15px;
                padding: 5px;
                margin: 0 0 15px 0;

                &:hover {
                    transform: scale(1.05);
                    border-color: white;
                }

                &.navigation--offcanvas--btn-container--login-btn {
                    border-color: white;
                    background-color: white;
                    color: #111
                }

                &.navigation--offcanvas--btn-container--signup-btn {
                    &:hover {
                        color: white;
                    }
                }
            }

            .navigation--offcanvas--social-media-container {
                i {
                    width: 25%;
                    font-size: 36px;

                    &:hover {
                        color: white;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 480px) {
        .navigation--offcanvas .navigation--offcanvas--content .navigation--offcanvas--nav .navigation--offcanvas--nav--navEle {
            width: 25%;
        }
    }

    /* @media screen and (min-width: 768px) {
         .offcanvas {
             width: 25%;
         }
     }

     @media screen and (min-width: 1024px) {
         .offcanvas {
             width: 20%;
         }
     }

     @media screen and (min-width: 1260px) {
         .offcanvas {
             width: 15%;
         }
     }*/
</style>
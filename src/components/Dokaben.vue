<template>
    <div class="dokaben loop komaochi">
        <!-- <router-link to="/question">
        <img class="logo" src="../assets/logo_kemono.png" />
    </router-link> -->
        <h1>ドカベン</h1>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            msg: 'ようこそジャパリパークへ！'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    @font-face {
        font-family: 'dokaben';
        src: url('../fonts/dokaben_ver2_1.ttf') format('truetype');
    }

    h1 {
        margin: 0.25em 0;
        display: inline-block;
        font-size: 84px;
        text-align: center;
        color: #bf2b04;
    }

    .dokaben {
        font-family: 'dokaben_ver2_1';
        font-weight: normal;
        text-shadow: rgba(93, 20, 0, 0.9) 0px 2px 0px, rgba(93, 20, 0, 0.9) -2px 0px 0px, rgba(93, 20, 0, 0.9) 0px -2px 0px, rgba(93, 20, 0, 0.9) -2px 0px 0px, rgba(93, 20, 0, 0.9) 2px 2px 0px, rgba(93, 20, 0, 0.9) -2px 2px 0px, rgba(93, 20, 0, 0.9) 2px -2px 0px, rgba(93, 20, 0, 0.9) -2px -2px 0px;
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation: dokaben 2s;
        animation: dokaben 2s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
        -webkit-animation-direction: alternate;
        animation-direction: alternate;
    }

    .speed-up {
        -webkit-animation-duration: 0.5s;
        animation-duration: 0.5s;
    }

    .loop {
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
    }

    .komaochi {
        -webkit-animation-timing-function: steps(12);
        animation-timing-function: steps(12);
    }

    .vartical-align-baseline {
        -webkit-transform-origin: center 90%;
        transform-origin: center 90%;
    }

    @-webkit-keyframes dokaben {
        0% {
            -webkit-transform: rotate3d(1, 0, 0, -90deg);
            transform: rotate3d(1, 0, 0, -90deg);
        }
        100% {
            -webkit-transform: rotate3d(1, 0, 0, 0deg);
            transform: rotate3d(1, 0, 0, 0deg);
        }
    }

    @keyframes dokaben {
        0% {
            -webkit-transform: rotate3d(1, 0, 0, -90deg);
            transform: rotate3d(1, 0, 0, -90deg);
        }
        100% {
            -webkit-transform: rotate3d(1, 0, 0, 0deg);
            transform: rotate3d(1, 0, 0, 0deg);
        }
    }

</style>

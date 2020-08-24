<template>
    <div class="sidebar">
        <b-button id="chevron" v-b-toggle.sidebar-1> <b-icon icon="chevron-bar-right"></b-icon> </b-button>
        <b-sidebar id="sidebar-1" title="NewsApp" shadow>
            <div class="px-3 py-2">
                <b-nav vertical class="w-25">
                    <b-nav-item>
                        <router-link to="/business">Business</router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/entertainment">Entertainment</router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/health">Health</router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/science">Science</router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/sports">Sports</router-link>
                    </b-nav-item>
                </b-nav>
            </div>
        </b-sidebar>
    </div>
</template>

<style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        border-radius: 0;
    }

    .sidenav-group{
        border: none;
    }

    #chevron{
        border-radius: 0px;
    }
</style>

<script>
export default {
    
}
</script>
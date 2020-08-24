<template>
    <div class="sidebar">
        <b-button v-b-toggle.sidebar-1> <b-icon icon="chevron-bar-right"></b-icon> </b-button>
        <b-sidebar id="sidebar-1" title="Sidebar" shadow>
            <div class="px-3 py-2">
                <b-list-group>
                    <b-list-group-item>
                        <router-link to="/about">About</router-link>
                    </b-list-group-item>
                </b-list-group>
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
</style>

<script>
export default {
    
}
</script>
<template>
    <router-link
        class="sidebar-item"
        :to="{ name: routeName }"
        tag="li"
        active-class="selected"
        exact
    >
        <a
            class="sidebar-link waves-effect waves-dark sidebar-link"
            aria-expanded="false"
        >
            <i :class="`fas fa-${icon}`"></i>
            <span class="hide-menu">
                <slot></slot>
            </span>
        </a>
    </router-link>
</template>

<script>
export default {
    name: "SidebarLink",
    props: {
        routeName: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }
};
</script>

<style></style>

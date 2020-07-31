<template>
    <div>
        <the-breadcrumbs
            :paths="[
                { name: 'Genera', route: 'genera.index' },
                { name: 'Display Genre', route: 'genera.show' }
            ]"
        ></the-breadcrumbs>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">
                                {{ genus.name }} Information
                            </h5>
                            <hr />

                            <h6>Family Name:</h6>
                            <p>{{ genus.family.name }}</p>

                            <h6>Species for {{ genus.name }}</h6>
                            <!-- <plants-for-genera-table genus="{{ $genus->id }}" genus_name="{{ $genus->name }}"></plants-for-genera-table> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GeneraShow",
    props: {
        genus: {
            type: Object,
            required: true
        }
    }
};
</script>

<style></style>

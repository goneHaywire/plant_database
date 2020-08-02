<template>
    <div>
        <the-breadcrumbs
            :paths="[
                { name: 'Species', route: 'species.index' },
                { name: 'Display Species', route: 'species.show' }
            ]"
        ></the-breadcrumbs>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">
                                {{ specie.genera.name }}
                                {{ specie.name }} Information
                            </h5>
                            <hr />
                            <!-- {{--                        <test></test>--}} -->
                            <!-- <species-show specie="{{ $specie->name }}" genus="{{ $specie->genera->name }}" family="{{ $specie->genera->family->name }}"></species-show> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SpeciesShow",
    props: {
        specie: {
            type: Object,
            required: true
        }
    }
};
</script>

<style></style>

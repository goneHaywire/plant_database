<template>
    <div>
        <the-breadcrumbs
            :paths="[
                { name: 'Families', route: 'families.index' },
                { name: 'Display Family', route: 'families.show' }
            ]"
        ></the-breadcrumbs>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <!-- <h5 class="card-title">{{ $family->name }} Information</h5>
                        <hr>
                        <h6>Family Description:</h6>
                        @isset( $family->description )
                            <p>{{ $family->description }}</p>
                        @else
                            <p class="text-muted">This family has no description.</p>
                        @endisset

                        <h6>Family Leaves Description:</h6>
                        @isset( $family->leaves )
                            <p>{{ $family->leaves }}</p>
                        @else
                            <p class="text-muted">This family has no leaves description.</p>
                        @endisset

                        <h6>Family Flowers Description:</h6>
                        @isset( $family->flowers )
                            <p>{{ $family->flowers }}</p>
                        @else
                            <p class="text-muted">This family has no flowers description.</p>
                        @endisset

                        <h6>Family Seeds Description:</h6>
                        @isset( $family->seeds )
                            <p>{{ $family->seeds }}</p>
                        @else
                            <p class="text-muted">This family has no seeds description.</p>
                        @endisset

                        <h6>Family Characteristics:</h6>
                        @isset( $family->characteristics )
                            <p>{{ $family->characteristics }}</p>
                        @else
                            <p class="text-muted">This family has no characteristics information.</p>
                        @endisset

                        <h6>Genera for {{ $family->name }}</h6>
              <genera-for-family-table family="{{ $family->id }}"></genera-for-family-table>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>

<template>
    <div>
        <the-breadcrumbs
            :paths="[
                { name: 'Families', route: 'families.index' },
                { name: 'Create Family', route: 'families.create' }
            ]"
        ></the-breadcrumbs>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <form class="form-horizontal" method="post" action="">
                            <!-- @csrf -->
                            <div class="card-body">
                                <h4 class="card-title">Family Data</h4>
                                <div class="form-group row">
                                    <label
                                        for="fname"
                                        class="col-sm-3 text-right control-label col-form-label"
                                        >Family Name</label
                                    >
                                    <div class="col-sm-9">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="Family Name Here"
                                        />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label
                                        for="cono1"
                                        class="col-sm-3 text-right control-label col-form-label"
                                        >Family Description</label
                                    >
                                    <div class="col-sm-9">
                                        <textarea
                                            class="form-control"
                                            name="desc"
                                        ></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label
                                        for="cono1"
                                        class="col-sm-3 text-right control-label col-form-label"
                                        >Leaves Description</label
                                    >
                                    <div class="col-sm-9">
                                        <textarea
                                            class="form-control"
                                            name="leaves"
                                        ></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label
                                        for="cono1"
                                        class="col-sm-3 text-right control-label col-form-label"
                                        >Flowers Description</label
                                    >
                                    <div class="col-sm-9">
                                        <textarea
                                            class="form-control"
                                            name="flowers"
                                        ></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label
                                        for="cono1"
                                        class="col-sm-3 text-right control-label col-form-label"
                                        >Seeds Description</label
                                    >
                                    <div class="col-sm-9">
                                        <textarea
                                            class="form-control"
                                            name="seeds"
                                        ></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label
                                        for="cono1"
                                        class="col-sm-3 text-right control-label col-form-label"
                                        >Family Characteristics</label
                                    >
                                    <div class="col-sm-9">
                                        <textarea
                                            class="form-control"
                                            name="characteristics"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="border-top">
                                <div class="card-body">
                                    <input
                                        type="submit"
                                        class="btn btn-primary"
                                        value="Create"
                                    />
                                </div>
                            </div>
                        </form>
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

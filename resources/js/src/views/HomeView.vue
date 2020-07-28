<template>
    <div>
        <the-breadcrumbs
            :paths="[{ name: 'Home', route: 'home' }]"
        ></the-breadcrumbs>

        <div class="container-fluid">
            <div class="btn btn-primary" @click="callapi()">click me</div>
            <!-- ============================================================== -->
            <!-- Sales Cards  -->
            <!-- ============================================================== -->
            <div class="row">
                <!-- Column -->
                <div class="col-md-6 col-lg-2 col-xlg-3">
                    <a class="card card-hover" :to="{ name: 'home' }">
                        <div class="box bg-cyan text-center">
                            <h1 class="font-light text-white">
                                <i class="mdi mdi-view-dashboard"></i>
                            </h1>
                            <h6 class="text-white">Home</h6>
                        </div>
                    </a>
                </div>
                <!-- Column -->
                <div class="col-md-6 col-lg-4 col-xlg-3">
                    <router-link
                        :to="{ name: 'families.index' }"
                        class="card card-hover"
                    >
                        <div class="box bg-success text-center">
                            <h1 class="font-light text-white">
                                <i class="fas fa-tree"></i>
                            </h1>
                            <h6 class="text-white">Families</h6>
                        </div>
                    </router-link>
                </div>
                <!-- Column -->
                <div class="col-md-6 col-lg-2 col-xlg-3">
                    <router-link
                        class="card card-hover"
                        :to="{ name: 'genera.index' }"
                    >
                        <div class="box bg-warning text-center">
                            <h1 class="font-light text-white">
                                <i class="far fa-list-alt"></i>
                            </h1>
                            <h6 class="text-white">Genera</h6>
                        </div>
                    </router-link>
                </div>

                <div class="col-md-6 col-lg-4 col-xlg-3">
                    <router-link
                        class="card card-hover"
                        :to="{ name: 'species.index' }"
                    >
                        <div class="box bg-danger text-center">
                            <h1 class="font-light text-white">
                                <i class="fas fa-leaf"></i>
                            </h1>
                            <h6 class="text-white">Species</h6>
                        </div>
                    </router-link>
                </div>

                <div class="col-md-6 col-lg-4 col-xlg-3">
                    <router-link
                        class="card card-hover"
                        :to="{ name: 'favourites.index' }"
                    >
                        <div class="box bg-info text-center">
                            <h1 class="font-light text-white">
                                <i class="far fa-star"></i>
                            </h1>
                            <h6 class="text-white">Favourites</h6>
                        </div>
                    </router-link>
                </div>

                <div class="col-md-6 col-lg-2 col-xlg-3">
                    <router-link
                        class="card card-hover"
                        :to="{ name: 'users.index' }"
                    >
                        <div class="box bg-danger text-center">
                            <h1 class="font-light text-white">
                                <i class="fas fa-user"></i>
                            </h1>
                            <h6 class="text-white">Users</h6>
                        </div>
                    </router-link>
                </div>
                <!-- Column -->
                <div class="col-md-6 col-lg-4 col-xlg-3">
                    <router-link
                        class="card card-hover"
                        :to="{ name: 'albanian.index' }"
                    >
                        <div class="box bg-info text-center">
                            <h1 class="font-light text-white">
                                <i class="fas fa-map-marker-alt"></i>
                            </h1>
                            <h6 class="text-white">Albanian Species</h6>
                        </div>
                    </router-link>
                </div>
                <!-- Column -->
                <div class="col-md-6 col-lg-2 col-xlg-3">
                    <router-link
                        class="card card-hover"
                        :to="{ name: 'filter.index' }"
                    >
                        <div class="box bg-cyan text-center">
                            <h1 class="font-light text-white">
                                <i class="fas fa-search"></i>
                            </h1>
                            <h6 class="text-white">Filter</h6>
                        </div>
                    </router-link>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="card m-t-0">
                        <div class="row py-2 align-items-center">
                            <div
                                class="col-md-6 d-flex align-items-center justify-content-center"
                            >
                                <h3 class="mb-0">Families</h3>
                            </div>
                            <div
                                class="col-md-6 border-left text-center p-t-10"
                            >
                                <h3 class="mb-0 font-weight-bold">
                                    {{ $family_count }}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card m-t-0">
                        <div class="row py-2 align-items-center">
                            <div
                                class="col-md-6 d-flex align-items-center justify-content-center"
                            >
                                <h3 class="mb-0">Genera</h3>
                            </div>
                            <div
                                class="col-md-6 border-left text-center p-t-10"
                            >
                                <h3 class="mb-0 font-weight-bold">
                                    {{ $genera_count }}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card m-t-0">
                        <div class="row py-2 align-items-center">
                            <div
                                class="col-md-6 d-flex align-items-center justify-content-center"
                            >
                                <h3 class="mb-0">Species</h3>
                            </div>
                            <div
                                class="col-md-6 border-left text-center p-t-10"
                            >
                                <h3 class="mb-0 font-weight-bold">
                                    {{ $species_count }}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card m-t-0">
                        <div class="row py-2 align-items-center">
                            <div
                                class="col-md-6 d-flex align-items-center justify-content-center"
                            >
                                <h3 class="mb-0">Albanian</h3>
                            </div>
                            <div
                                class="col-md-6 border-left text-center p-t-10"
                            >
                                <h3 class="mb-0 font-weight-bold">
                                    {{ $albanian_count }}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card m-t-0">
                        <div class="row py-2 align-items-center">
                            <div
                                class="col-md-6 d-flex align-items-center justify-content-center"
                            >
                                <h3 class="mb-0">Users</h3>
                            </div>
                            <div
                                class="col-md-6 border-left text-center p-t-10"
                            >
                                <h3 class="mb-0 font-weight-bold">
                                    {{ $user_count }}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card m-t-0">
                        <div class="row py-2 align-items-center">
                            <div
                                class="col-md-6 d-flex align-items-center justify-content-center"
                            >
                                <h3 class="mb-0">Favourites</h3>
                            </div>
                            <div
                                class="col-md-6 border-left text-center p-t-10"
                            >
                                <h3 class="mb-0 font-weight-bold">
                                    {{ $favourites_count }}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">
                                Families with most species in Albania
                            </h5>
                            <div class="pie" style="height: 800px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import clientApi from "../services/Api";

export default {
    name: "HomeView",
    methods: {
        callapi() {
            console.log("call api!!!!");
            clientApi.get("families").then(data => console.log(data));
        }
    }
};
</script>

<style></style>

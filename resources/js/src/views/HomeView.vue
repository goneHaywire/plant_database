<template>
    <div>
        <div class="page-breadcrumb">
            <div class="row">
                <div class="col-12 d-flex no-block align-items-center">
                    <h4 class="page-title">Home</h4>
                    <div class="ml-auto text-right">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                {{--
                                <li
                                    class="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Library
                                </li>
                                --}}
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <!-- ============================================================== -->
            <!-- Sales Cards  -->
            <!-- ============================================================== -->
            <div class="row">
                <!-- Column -->
                <div class="col-md-6 col-lg-2 col-xlg-3">
                    <a class="card card-hover" :to="{ name: 'Home' }">
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
                        :to="{ name: 'Families' }"
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
                        :to="{ name: 'Genera' }"
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
                        :to="{ name: 'Species' }"
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
                        :to="{ name: 'Favourites' }"
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
                        :to="{ name: 'Users' }"
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
                        :to="{ name: 'Albanian' }"
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
                        :to="{ name: 'Filter' }"
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
export default {
    name: "HomeView"
};
</script>

<style></style>

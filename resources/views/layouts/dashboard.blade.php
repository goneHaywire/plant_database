<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Plant Database') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <link href="{{ asset('assets/libs/flot/css/float-chart.css') }}" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="{{ asset('dist/css/style.min.css') }}" rel="stylesheet">
</head>
<body>

<div class="preloader">
    <div class="lds-ripple">
        <div class="lds-pos"></div>
        <div class="lds-pos"></div>
    </div>
</div>

<div id="app">
    <div id="main-wrapper">
        <header class="topbar" data-navbarbg="skin5">
            <nav class="navbar top-navbar navbar-expand-md navbar-dark">
                <div class="navbar-header" data-logobg="skin5">
                    <!-- This is for the sidebar toggle which is visible on mobile only -->
                    <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i
                            class="ti-menu ti-close"></i></a>
                    <!-- ============================================================== -->
                    <!-- Logo -->
                    <!-- ============================================================== -->
                    <a class="navbar-brand d-flex align-items-center justify-content-center" href="{{ route('home') }}">
                        <!-- Logo icon -->
                        <b class="logo-icon p-l-10">
                            Plant Database
                            <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                            <!-- Dark Logo icon -->
                        </b>
                        <img src="{{ asset('images/logo.png') }}" alt="homepage" class="light-logo img-fluid" width="35px"/>
                        <!--End Logo icon -->
                        <!-- Logo text -->
{{--                        <span class="logo-text">--}}
{{--                             <!-- dark Logo text -->--}}
{{--                             <img src="../../assets/images/logo-text.png" alt="homepage" class="light-logo"/>--}}

{{--                        </span>--}}
                        <!-- Logo icon -->
                        <!-- <b class="logo-icon"> -->
                        <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                        <!-- Dark Logo icon -->
                        <!-- <img src="../../assets/images/logo-text.png" alt="homepage" class="light-logo" /> -->

                        <!-- </b> -->
                        <!--End Logo icon -->
                    </a>
                    <!-- ============================================================== -->
                    <!-- End Logo -->
                    <!-- ============================================================== -->
                    <!-- ============================================================== -->
                    <!-- Toggle which is visible on mobile only -->
                    <!-- ============================================================== -->
                    <a class="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)"
                       data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                       aria-expanded="false" aria-label="Toggle navigation"><i class="ti-more"></i></a>
                </div>
                <!-- ============================================================== -->
                <!-- End Logo -->
                <!-- ============================================================== -->
                <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                    <!-- ============================================================== -->
                    <!-- toggle and nav items -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav float-left mr-auto">
{{--                        <li class="nav-item d-none d-md-block"><a class="nav-link sidebartoggler waves-effect waves-light"--}}
{{--                                                                  href="javascript:void(0)" data-sidebartype="mini-sidebar"><i--}}
{{--                                    class="mdi mdi-menu font-24"></i></a></li>--}}
                        <!-- ============================================================== -->
                        <!-- create new -->
                        <!-- ============================================================== -->
{{--                        <li class="nav-item dropdown">--}}
{{--                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"--}}
{{--                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">--}}
{{--                                <span class="d-none d-md-block">Create New <i class="fa fa-angle-down"></i></span>--}}
{{--                                <span class="d-block d-md-none"><i class="fa fa-plus"></i></span>--}}
{{--                            </a>--}}
{{--                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">--}}
{{--                                <a class="dropdown-item" href="#">Action</a>--}}
{{--                                <a class="dropdown-item" href="#">Another action</a>--}}
{{--                                <div class="dropdown-divider"></div>--}}
{{--                                <a class="dropdown-item" href="#">Something else here</a>--}}
{{--                            </div>--}}
{{--                        </li>--}}
                        <!-- ============================================================== -->
                        <!-- Search -->
                        <!-- ============================================================== -->
                        <li class="nav-item search-box"><a class="nav-link waves-effect waves-dark"
                                                           href="javascript:void(0)"><i class="ti-search"></i></a>
                            <form class="app-search position-absolute" method="get" action="{{ route('filter.index') }}">
                                <input name="name" type="text" class="form-control" placeholder="Search Species"> <a
                                    class="srh-btn"><i class="ti-close"></i></a>
                            </form>
                        </li>
                    </ul>
                    <!-- ============================================================== -->
                    <!-- Right side toggle and nav items -->
                    <!-- ============================================================== -->
{{--                    <ul class="navbar-nav float-right">--}}
{{--                        <!-- ============================================================== -->--}}
{{--                        <!-- Comment -->--}}
{{--                        <!-- ============================================================== -->--}}
{{--                        <li class="nav-item dropdown">--}}
{{--                            <a class="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown"--}}
{{--                               aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-bell font-24"></i>--}}
{{--                            </a>--}}
{{--                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">--}}
{{--                                <a class="dropdown-item" href="#">Action</a>--}}
{{--                                <a class="dropdown-item" href="#">Another action</a>--}}
{{--                                <div class="dropdown-divider"></div>--}}
{{--                                <a class="dropdown-item" href="#">Something else here</a>--}}
{{--                            </div>--}}
{{--                        </li>--}}
{{--                        <!-- ============================================================== -->--}}
{{--                        <!-- End Comment -->--}}
{{--                        <!-- ============================================================== -->--}}
{{--                        <!-- ============================================================== -->--}}
{{--                        <!-- Messages -->--}}
{{--                        <!-- ============================================================== -->--}}
{{--                        <li class="nav-item dropdown">--}}
{{--                            <a class="nav-link dropdown-toggle waves-effect waves-dark" href="" id="2"--}}
{{--                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i--}}
{{--                                    class="font-24 mdi mdi-comment-processing"></i>--}}
{{--                            </a>--}}
{{--                            <div class="dropdown-menu dropdown-menu-right mailbox animated bounceInDown"--}}
{{--                                 aria-labelledby="2">--}}
{{--                                <ul class="list-style-none">--}}
{{--                                    <li>--}}
{{--                                        <div class="">--}}
{{--                                            <!-- Message -->--}}
{{--                                            <a href="javascript:void(0)" class="link border-top">--}}
{{--                                                <div class="d-flex no-block align-items-center p-10">--}}
{{--                                                <span class="btn btn-success btn-circle"><i--}}
{{--                                                        class="ti-calendar"></i></span>--}}
{{--                                                    <div class="m-l-10">--}}
{{--                                                        <h5 class="m-b-0">Event today</h5>--}}
{{--                                                        <span class="mail-desc">Just a reminder that event</span>--}}
{{--                                                    </div>--}}
{{--                                                </div>--}}
{{--                                            </a>--}}
{{--                                            <!-- Message -->--}}
{{--                                            <a href="javascript:void(0)" class="link border-top">--}}
{{--                                                <div class="d-flex no-block align-items-center p-10">--}}
{{--                                                    <span class="btn btn-info btn-circle"><i class="ti-settings"></i></span>--}}
{{--                                                    <div class="m-l-10">--}}
{{--                                                        <h5 class="m-b-0">Settings</h5>--}}
{{--                                                        <span class="mail-desc">You can customize this template</span>--}}
{{--                                                    </div>--}}
{{--                                                </div>--}}
{{--                                            </a>--}}
{{--                                            <!-- Message -->--}}
{{--                                            <a href="javascript:void(0)" class="link border-top">--}}
{{--                                                <div class="d-flex no-block align-items-center p-10">--}}
{{--                                                    <span class="btn btn-primary btn-circle"><i class="ti-user"></i></span>--}}
{{--                                                    <div class="m-l-10">--}}
{{--                                                        <h5 class="m-b-0">Pavan kumar</h5>--}}
{{--                                                        <span class="mail-desc">Just see the my admin!</span>--}}
{{--                                                    </div>--}}
{{--                                                </div>--}}
{{--                                            </a>--}}
{{--                                            <!-- Message -->--}}
{{--                                            <a href="javascript:void(0)" class="link border-top">--}}
{{--                                                <div class="d-flex no-block align-items-center p-10">--}}
{{--                                                <span class="btn btn-danger btn-circle"><i--}}
{{--                                                        class="fa fa-link"></i></span>--}}
{{--                                                    <div class="m-l-10">--}}
{{--                                                        <h5 class="m-b-0">Luanch Admin</h5>--}}
{{--                                                        <span class="mail-desc">Just see the my new admin!</span>--}}
{{--                                                    </div>--}}
{{--                                                </div>--}}
{{--                                            </a>--}}
{{--                                        </div>--}}
{{--                                    </li>--}}
{{--                                </ul>--}}
{{--                            </div>--}}
{{--                        </li>--}}
{{--                        <!-- ============================================================== -->--}}
{{--                        <!-- End Messages -->--}}
{{--                        <!-- ============================================================== -->--}}

{{--                        <!-- ============================================================== -->--}}
{{--                        <!-- User profile and search -->--}}
{{--                        <!-- ============================================================== -->--}}
{{--                        <li class="nav-item dropdown">--}}
{{--                            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href=""--}}
{{--                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img--}}
{{--                                    src="../../assets/images/users/1.jpg" alt="user" class="rounded-circle" width="31"></a>--}}
{{--                            <div class="dropdown-menu dropdown-menu-right user-dd animated">--}}
{{--                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-user m-r-5 m-l-5"></i> My--}}
{{--                                    Profile</a>--}}
{{--                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-wallet m-r-5 m-l-5"></i> My--}}
{{--                                    Balance</a>--}}
{{--                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-email m-r-5 m-l-5"></i>--}}
{{--                                    Inbox</a>--}}
{{--                                <div class="dropdown-divider"></div>--}}
{{--                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-settings m-r-5 m-l-5"></i>--}}
{{--                                    Account Setting</a>--}}
{{--                                <div class="dropdown-divider"></div>--}}
{{--                                <a class="dropdown-item" href="javascript:void(0)"><i--}}
{{--                                        class="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>--}}
{{--                                <div class="dropdown-divider"></div>--}}
{{--                                <div class="p-l-30 p-10"><a href="javascript:void(0)"--}}
{{--                                                            class="btn btn-sm btn-success btn-rounded">View Profile</a>--}}
{{--                                </div>--}}
{{--                            </div>--}}
{{--                        </li>--}}
{{--                        <!-- ============================================================== -->--}}
{{--                        <!-- User profile and search -->--}}
{{--                        <!-- ============================================================== -->--}}
{{--                    </ul>--}}
                </div>
            </nav>
        </header>

        <aside class="left-sidebar" data-sidebarbg="skin5">
            <!-- Sidebar scroll-->
            <div class="scroll-sidebar">
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">
                    <ul id="sidebarnav" class="p-t-30">
                        <li class="sidebar-item"><a class="sidebar-link waves-effect waves-dark sidebar-link"
                                                    href="{{ route('home') }}" aria-expanded="false"><i
                                    class="mdi mdi-view-dashboard"></i><span class="hide-menu">Home</span></a></li>

                        <li class="sidebar-item"><a class="sidebar-link waves-effect waves-dark sidebar-link"
                                                    href="{{ route('families.index') }}" aria-expanded="false"><i
                                    class="fas fa-tree"></i><span class="hide-menu">Families</span></a></li>

                        <li class="sidebar-item"><a class="sidebar-link waves-effect waves-dark sidebar-link"
                                                    href="{{ route('genera.index') }}" aria-expanded="false"><i
                                    class="far fa-list-alt"></i><span class="hide-menu">Genera</span></a></li>

                        <li class="sidebar-item"><a class="sidebar-link waves-effect waves-dark sidebar-link"
                                                    href="{{ route('plants.index') }}" aria-expanded="false"><i
                                    class="fas fa-leaf"></i><span class="hide-menu">Species</span></a></li>

                        <li class="sidebar-item"><a class="sidebar-link waves-effect waves-dark sidebar-link"
                                                    href="{{ route('albanian_plants') }}" aria-expanded="false"><i
                                    class="fas fa-map-marker-alt"></i><span class="hide-menu">Albanian species</span></a></li>

                        <li class="sidebar-item"><a class="sidebar-link waves-effect waves-dark sidebar-link"
                                                    href="{{ route('favourites.index') }}" aria-expanded="false"><i
                                    class="far fa-star"></i><span class="hide-menu">Favourites</span></a></li>

                        <li class="sidebar-item"><a class="sidebar-link waves-effect waves-dark sidebar-link"
                                                    href="{{ route('filter.form') }}" aria-expanded="false"><i
                                    class="fas fa-search"></i><span class="hide-menu">Filter</span></a></li>

                        <li class="sidebar-item"><a class="sidebar-link waves-effect waves-dark sidebar-link"
                                                    href="{{ route('users.index') }}" aria-expanded="false"><i
                                    class="fas fa-user"></i><span class="hide-menu">Users</span></a></li>

                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </aside>

        <div class="page-wrapper">
            @yield('content')
            <footer class="footer text-center">
                Designed and Developed by Emiljan Dusha.
            </footer>
        </div>
    </div>

</div>
@section('scripts')
    @include('layouts.scripts')
@show
</body>
</html>

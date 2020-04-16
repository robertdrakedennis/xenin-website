<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @if(View::hasSection('meta'))
        @yield('meta')
    @else
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="keywords" content="xenin, xenin.co, game servers, us game servers, garrysmod, us garrysmod servers, garrys mod, garrysmod, darkrp, Darkrp, darkRP, dark roleplay, dark role play">
        <meta name="description" content="{{ env('APP_NAME') }}'s the name, good server's the game.">
        <meta name="title" content="Xenin - Darkrp | Dark Roleplay | US darkrp | dark rp server">
        <meta property="og:site_name" content="{{ 'Xenin' }}">
        <meta property="og:title" content="Bringing what's right to gmod.">
        <meta property="og:description" content="Xenin's the name, good server's the game.">
        <meta property="og:type" content="Product">
        <meta property="og:image" content="/assets/media/meta/promo.png">
        <meta property="og:url" content="https://xenin.co">
        <meta content="summary_large_image" name="twitter:card">
        <meta content="@xeninco" name="twitter:site">
        <meta name="twitter:description" content="Darkrp that isn't shit.">
        <meta name="twitter:image" content="/assets/media/meta/promo.png">
        <meta name="theme-color" content="#955799">
    @endif
    <link href="{{ mix('assets/css/xenin.css') }}" rel="stylesheet">
    <link rel="icon" href="{{ '/assets/media/logo/favicon.png' }}">
    @yield('css')
    <title>Xenin - @yield('title')</title>
</head>
<div class="loading-screen bg-brand-black flex-column flex-fill justify-content-center align-items-center">
    <div class="looping-rhombuses-spinner">
        <div class="rhombus"></div>
        <div class="rhombus"></div>
        <div class="rhombus"></div>
    </div>
</div>
@if(View::hasSection('bodyBackground'))
    <body class="@yield('bodyBackground')">
    @else
        <body class="bg-brand-black">
        @endif
        <div class="h-100" id="app">
            <div>
                <div class="position-absolute w-100">
                    @if(View::hasSection('navBackground'))
                        <nav class="position-relative navbar navbar-expand-lg navbar-dark  @yield('navBackground') px-sm-1 px-md-2 px-lg-4 px-xl-5 py-3 mx-auto" style="z-index: 1;">
                            @else
                                <nav class="position-relative navbar navbar-expand-lg navbar-dark bg-transparent px-sm-1 px-md-2 px-lg-4 px-xl-5 py-3 mx-auto" style="z-index: 1;">
                                    @endif
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <a class="navbar-brand" href="{{ route('home') }}">
                                        <img src="{{ '/assets/media/logo/light.svg' }}" class="d-block brand-image" style="height: auto; width: 3.25rem;">
                                    </a>
                                    <div class="collapse navbar-collapse" id="navbar">
                                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                            <li class="nav-item active">
                                                <a class="nav-link" href="{{ route('home') }}">Home <span class="sr-only">(current)</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="{{ route('forums.index') }}">Forums</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="{{ route('store') }}">Store</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="{{ route('articles.index') }}">News & Updates</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link community-nav" href="{{ route('users.index') }}" v-tippy="{ html:  '#community', interactive : true, theme : 'navbar-mega-menu', animateFill : false, placement : 'bottom', arrow: true, arrowType: 'round',  arrowTransform: 'scale(1.5)' }">
                                                    Community
                                                </a>
                                                <community-component class="d-none" id="community" v-tippy-html users="{{route('users.index')}}" leaderboards="{{route('users.leaderboards')}}" staff="{{route('users.staff')}}"  bans="{{route('users.bans')}}"></community-component>

                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link dont-fade social-nav" href="#" v-tippy="{ html:  '#social', interactive : true, theme : 'navbar-mega-menu', animateFill : false, placement : 'bottom', arrow: true, arrowType: 'round',  arrowTransform: 'scale(1.5)' }">
                                                    Social
                                                </a>
                                                <social-component class="d-none" id="social" discord="{{ route('discord') }}" steam="{{route('steam')}}"></social-component>
                                            </li>
                                        </ul>
                                        @guest
                                            <form method="POST" action="{{ action('Auth\SteamLoginController@login') }}">
                                                @method('POST')
                                                @csrf
                                                <button type="submit" class="my-2 my-lg-0 btn btn-outline-brand-white login-button" style="font-size: 14px;">
                                                    Login
                                                </button>
                                            </form>
                                        @endguest
                                        @auth
                                            <li class="nav-item" style="list-style: none;">
                                                <a href="{{ route('users.show', Auth::user()) }}" class="nav-link profile-nav" v-tippy="{ html:  '#profile', interactive : true, theme : 'navbar-mega-menu', animateFill : false, placement : 'bottom', arrow: true, arrowType: 'round',  arrowTransform: 'scale(1.5)' }">
                                                    <img src="{{ Storage::url(Auth::user()->avatar) }}" class="my-1 my-lg-0 avatar-img avatar-img-sm">
                                                </a>
                                                <profile-component id="profile" class="d-none" show="{{ route('users.show', Auth::user()) }}" edit="{{ route('users.edit', Auth::user()) }}" logout="{{ route('logout') }}"></profile-component>
                                            </li>
                                        @endauth
                                    </div>
                                </nav>
                </div>
                <div>
                    @yield('content')
                    <div class="footer p-sm-2 p-md-0 @yield('footerColor')">
                        @if(View::hasSection('footerSvg'))
                        @else
                            <svg class="footer-bg-primary" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="1920" height="646" viewBox="0 0 1920 646"><path fill="#23272A" fill-rule="evenodd" d="M311.478317,194.247158 C428.197687,129.319873 513.536745,119.841824 588.607057,203.140878 C663.67737,286.439932 716.325807,70.8998219 807.036745,63.9549791 C897.747682,57.0101364 939.595339,139.660796 1029.40003,119.423884 C1119.20471,99.1869713 1242.5094,-32.995495 1414.5094,7.75174914 C1586.5094,48.4989932 1574.70081,208.570198 1678.86878,178.697219 C1783.03674,148.824239 1804.33003,79.9080675 1882.233,98.8502198 C1946.88388,114.570118 1982.71859,219.910259 2059.96965,185.795542 C2312.89807,74.100223 2264.92932,644.93616 2264.92932,644.93616 L28.6962867,646 C28.6962867,646 -75.2531884,175.625756 112.53378,228.851709 C204.462404,254.90777 234.76939,236.917901 311.478317,194.247158 Z" transform="translate(-156)"></path></svg>
                        @endif
                        <div class="content">
                            <div class="d-flex flex-sm-row flex-md-row flex-sm-wrap justify-content-sm-center justify-content-sm-around justify-content-md-between align-items-sm-start align-items-md-start">
                                <div class="d-flex flex-column align-items-sm-center align-items-md-start my-sm-4 my-md-0 w-sm-45 footer-sub-section">
                                    <img src="{{ '/assets/media/logo/light.svg' }}" class="d-block brand-image" style="height: auto; width: 4.25rem;">
                                </div>
                                <div class="d-flex flex-column align-items-sm-center align-items-md-start my-sm-4 my-md-0 w-sm-45 footer-sub-section">
                                    <h3 class="sub-header">Community</h3>
                                    <a href="{{ route('forums.index') }}" class="nav-link py-1 pr-0 sub-link">Forums</a>
                                    <a href="{{ route('users.leaderboards') }}" class="nav-link py-1 pr-0 sub-link dont-fade">Leaderboard</a>
                                    <a href="{{ route('discord') }}" class="nav-link py-1 pr-0 sub-link">Discord</a>
                                    <a href="{{ route('steam') }}" class="nav-link py-1 pr-0 sub-link">Steam</a>
                                </div>
                                <div class="d-flex flex-column align-items-sm-center align-items-md-start my-sm-4 my-md-0 w-sm-45 footer-sub-section">
                                    <h3 class="sub-header">Server</h3>
                                    <a href="{{ route('store') }}" class="nav-link py-1 pr-0 sub-link">Store</a>
                                    <a href="#" class="nav-link py-1 pr-0 sub-link dont-fade">Rules</a>
                                    <a href="{{ route('users.bans') }}" class="nav-link py-1 pr-0 sub-link dont-fade">Bans</a>
                                </div>
                                <div class="d-flex flex-column align-items-sm-center align-items-md-start my-sm-4 my-md-0 w-sm-45 footer-sub-section">
                                    <h3 class="sub-header">Contact</h3>
                                    <a href="{{ route('mail') }}" class="nav-link py-1 pr-0 sub-link dont-fade">Mail</a>
                                    <a href="{{ route('discord') }}" class="nav-link py-1 pr-0 sub-link">Support</a>
                                    <a href="{{ route('discord') }}" class="nav-link py-1 pr-0 sub-link">Discord</a>
                                </div>
                                <div class="d-flex flex-column align-items-sm-center align-items-md-start my-sm-4 my-md-0 w-sm-45 footer-sub-section">
                                    <h3 class="sub-header">Organization</h3>
                                    <a href="{{ route('tos') }}" class="nav-link py-1 pr-0 sub-link">Terms of Service</a>
                                    <a href="{{ route('articles.index') }}" class="nav-link py-1 pr-0 sub-link">Updates</a>
                                    <a href="#" class="nav-link py-1 pr-0 sub-link">Applications</a>
                                </div>
                                <div class="d-flex flex-column align-items-sm-center align-items-md-start my-sm-4 my-md-0 w-sm-45 footer-sub-section">
                                    <h3 class="sub-header">More</h3>
                                    <a href="#" class="nav-link py-1 pr-0 sub-link">Partners</a>
                                    <a href="{{ route('server') }}" class="nav-link py-1 pr-0 sub-link dont-fade">Connect to Server</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="{{mix('/assets/js/jquery.js')}}"></script>
        <script src="{{mix('/assets/js/bootstrap.js')}}"></script>
        <script src="{{mix('/assets/js/spectrum.js')}}"></script>
        <script src="{{mix('/assets/js/xenin.js')}}"></script>
        <script src="{{mix('/assets/js/app.js')}}"></script>
        <div class="position-fixed w-100" style="z-index: 9999; bottom: 0;">
            @include('cookieConsent::index')
        </div>
        @include('sweetalert::alert')
        @yield('scripts')
        </body>
</html>
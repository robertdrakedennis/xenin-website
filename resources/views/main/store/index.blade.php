@extends('layouts.master')
@section('title', 'Store')


@section('content')
    <section class="d-flex flex-column position-relative brand bg-brand-primary" style="min-height: 600px; padding: 10rem 0 10rem;">
        <div class="d-flex flex-column position-relative text-center justify-content-center align-items-center brand h-100">
            <h1 class="text-white text pb-2">Store</h1>
            <h5 class="text-white sub-text pb-2">Features, FAQ's, and more about xenin's store.</h5>
            <img src="{{ '/assets/media/logo/light.svg' }}" style="height: auto; width: 15rem;">
            <a class="btn btn-lg btn-outline-brand-white mt-3 mx-auto" href="{{ route('credits.index') }}">Purchase Credits</a>
        </div>
    </section>
    <section class="bg-brand-white d-flex flex-column position-relative brand" style="min-height: 600px; padding: 10rem 0 10rem;">
        <div class="container">
            <h3 class="text-dark text-center">Credits</h3>
            <div class="row">
                <div class="col-5 align-items-center d-flex flex-column justify-content-center">
                    <img src="{{ 'assets/media/hero/heroicon-currency-lg.svg' }}" style="width: 10rem; height: auto;">
                </div>
                <div class="col-7 align-items-center d-flex flex-column justify-content-center">
                    <p class="text-dark">
                        We use credit's for our in-game store, you can purchase credits here with paypal, and eventually we'll provide other platforms to open up to other markets. If you have any questions feel free to read below.
                    </p>
                </div>
                <div class="col-12 d-flex flex-row align-items-center mt-5">
                    <a class="waves-effect btn btn-lg btn-primary mx-auto" href="{{ route('credits.index') }}">Purchase Credits</a>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-brand-white d-xs-none d-sm-none d-md-flex d-lg-flex d-xl-flex flex-column position-relative brand" style="min-height: 600px; padding: 10rem 0 10rem;">
        <div class="container">
            <h3 class="text-dark text-center">Benefits</h3>
            <div class="row shadow-lg" style="min-height: 250px;">
                <div class="col-3 px-0">
                    <div class="nav flex-column nav-pills bg-brand-primary rounded-left h-100 py-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                        <a class="nav-link active text-light bg-transparent dont-fade" id="v-pills-ranks-tab" data-toggle="pill" href="#v-pills-ranks" role="tab" aria-controls="v-pills-ranks" aria-selected="true">Unlocking Ranks</a>
                        <a class="nav-link text-light bg-transparent dont-fade" id="v-pills-support-tab" data-toggle="pill" href="#v-pills-support" role="tab" aria-controls="v-pills-support" aria-selected="false">Priority Support</a>
                        <a class="nav-link text-light bg-transparent dont-fade" id="v-pills-discord-tab" data-toggle="pill" href="#v-pills-discord" role="tab" aria-controls="v-pills-discord" aria-selected="false">Discord Benefits</a>

                    </div>
                </div>
                <div class="col-9 rounded-right" style="background: #EFEFEF;">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-ranks" role="tabpanel" aria-labelledby="v-pills-ranks-tab">
                            <div class="d-flex flex-column">
                                <div class="d-flex flex-row justify-content-center align-items-center">
                                    <div class="card border-0 bg-transparent">
                                        <div class="card-body align-items-center">
                                            <img src="{{ '/assets/media/donator/full_color/prime.svg' }}" class="store-rank-prime" v-tippy title="This ranked is unlocked when reaching 1100 total credits in your account." style="height: auto; width: 4.5rem">
                                            <h6 class="text-dark text-center">Prime</h6>
                                        </div>
                                    </div>
                                    <div class="card border-0 bg-transparent">
                                        <div class="card-body align-items-center">
                                            <img src="{{ '/assets/media/donator/full_color/supreme.svg' }}" class="store-rank-supreme" v-tippy title="This ranked is unlocked when reaching 2875 total credits in your account." style="height: auto; width: 4.5rem">
                                            <h6 class="text-dark text-center">Supreme</h6>
                                        </div>
                                    </div>
                                    <div class="card border-0 bg-transparent">
                                        <div class="card-body align-items-center">
                                            <img src="{{ '/assets/media/donator/full_color/zenith.svg' }}" class="store-rank-zenith" v-tippy title="This ranked is unlocked when reaching 8525 total credits in your account." style="height: auto; width: 4.5rem">
                                            <h6 class="text-dark text-center">Zenith</h6>
                                        </div>
                                    </div>
                                    <div class="card border-0 bg-transparent">
                                        <div class="card-body align-items-center">
                                            <img src="{{ '/assets/media/donator/full_color/founder.svg' }}" class="store-rank-founder" v-tippy title="This rank can only be achieved by people who have purchased credits in the first week of Xenin's release" style="height: auto; width: 4.5rem">
                                            <h6 class="text-dark text-center">Founder</h6>
                                        </div>
                                    </div>


                                </div>
                                <p class="text-center">
                                    Ranks are given out once you've reached a threshold in your credits. Once you've received this rank, you'll be able to unlock tons of content on the website and in-game, more information about ranks / benefits is farther down the page.
                                </p>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-support" role="tabpanel" aria-labelledby="v-pills-support-tab">
                            <div class="d-flex flex-column justify-content-center align-items-center mt-4">
                                <img src="{{ 'assets/media/hero/heroicon-diamond-lg.svg' }}" style="height: auto; width: 7.5rem;">
                            </div>
                            <div class="d-flex justify-content-center align-items-center">
                                <p>Ranked / donated users will always get priority support when in need of help, we appreciate the support you've given us :)</p>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-discord" role="tabpanel" aria-labelledby="v-pills-discord-tab">
                            <div class="d-flex flex-column justify-content-center align-items-center mt-5 mb-3">
                                <i class="fab fa-discord text-brand-lightest-grey fa-6x fa-fw"></i>
                            </div>
                            <div class="d-flex justify-content-center align-items-center h-100">
                                <p>In our discord? Get some extra benefits with early update channels, priority notifications, and more!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-brand-white d-flex flex-column position-relative brand" style="min-height: 600px; padding: 10rem 0 10rem;">
        <div class="container">
            <div class="d-flex flex-column">
                <h3 class="text-dark text-center"> What kind of features do I get on Xenin's website?</h3>
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Profile Customization
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                When you reach Prime, you'll be able to upload and customize backgrounds, use gifs for avatars and backgrounds, change to a light or dark profile, and eventually edit layouts, featured content, social media, and much more!
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Forum customization
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body">
                                Prime members and above can also edit the color of their post background, and the image of their post background, not to mention change the color of their username. Eventually you'll be able to do more as time passes, we'll keep you up to date with the latest changes :)
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Show off in style
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div class="card-body">
                               You'll also get a fancy badge to show off anywhere throughout the site, this badge shows to other members you're a user who has put faith and effort in to us, thank you!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@section('footerColor', 'bg-brand-primary')
@section('footerSvg', '')
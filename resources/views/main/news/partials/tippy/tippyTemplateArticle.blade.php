<div id="template_article_{{ $article->id }}">
    <div class="hovercard-header" style="background-color: {{ $article->user->color ?? '#202225' }};">
        <img class="hovercard-header-image" src="{{ Storage::url($article->user->avatar) }}">
        <div class="hovercard-header-name">{{ $article->user->name }}</div>
    </div>
    <div class="hovercard-body">
        <div class="hovercard-body-item">
            <div class="hovercard-body-item-icon">
                @if($article->user->hasAnyRole(['Owner', 'Administrator', 'Moderator']))
                    <i class="fal fa-fw fa-user my-auto text-light"></i>
                @else
                    <i class="fal fa-fw fa-shield-check my-auto text-light"></i>
                @endif
            </div>
            <div>
                <div class="hovercard-content-item text-light">
                    Rank
                </div>
                <div class="hovercard-content-item-muted">
                    {{ $article->user->roles()->first()->name }}
                </div>
            </div>
        </div>
        <div class="hovercard-body-item">
            <div class="hovercard-body-item-icon">
                <i class="fal fa-fw fa-paste my-auto text-light"></i>
            </div>
            <div class="hovercard-body-item">
                <div>
                    <div class="hovercard-content-item text-light">
                        Threads / Replies
                    </div>
                    <div class="hovercard-content-item-muted">
                        {{ $article->user->threads()->count() . ' / ' . $article->user->replies()->count()  }}
                    </div>
                </div>
            </div>
        </div>
        <div class="hovercard-body-item">
            <div class="hovercard-body-item-icon">
                @if($article->user->donator_tier == null)
                    <i class="fal fa-frown fa-fw text-light py-2"></i>
                @elseif($article->user->donator_tier == 'founder')
                    <img src="{{ '/assets/media/donator/solid_white/founder.svg' }}" class="store-rank-founder my-auto" style="height: 1.25em; width: auto;" title="This rank can only be achieved by people who have purchased credits in the first week of Xenin's release">
                @elseif($article->user->donator_tier == 'prime')
                    <img src="{{ '/assets/media/donator/solid_white/prime.svg' }}" class="store-rank-prime my-auto" style="height: 1.25em; width: auto;" title="This ranked is unlocked when reaching 1100 total credits in your account">
                @elseif($article->user->donator_tier == 'supreme')
                    <img src="{{ '/assets/media/donator/solid_white/supreme.svg' }}" class="store-rank-supreme my-auto" style="height: 1.25em; width: auto;" title="This ranked is unlocked when reaching 2875 total credits in your account.">
                @elseif($article->user->donator_tier == 'zenith')
                    <img src="{{ '/assets/media/donator/solid_white/zenith.svg' }}" class="store-rank-zenith my-auto" style="height: 1.25em; width: auto;" title="This ranked is unlocked when reaching 8525 total credits in your account.">
                @endif
            </div>
            <div class="hovercard-body-item">
                <div>
                    <div class="hovercard-content-item text-light">
                        Donator Tier
                    </div>
                    <div class="hovercard-content-item-muted">
                        {{ $article->user->donator_tier ?? 'none' }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="hovercard-footer">
        <a class="hovercard-footer-item" style="color: {{ $article->user->color ?? '#EFEFEF' }};" href="{{ route('users.show', $article->user) }}">Profile</a>
    </div>
</div>
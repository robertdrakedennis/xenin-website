<template>
    <div>
        <div class="hovercard-header" :style="{ backgroundColor: user.color }">
            <img class="hovercard-header-image" :src="this.avatar">
            <div class="hovercard-header-name">{{user.name}}</div>
        </div>
        <div class="hovercard-body">
            <div class="hovercard-body-item">
                <div class="hovercard-body-item-icon">
                    <i class="fal fa-fw fa-user my-auto text-light"></i>
                </div>
                <div>
                    <div class="hovercard-content-item text-light">
                        Rank
                    </div>
                    <div class="hovercard-content-item-muted">
                        {{this.rank}}
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
                            {{user.post_count}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="hovercard-body-item">
                <div class="hovercard-body-item-icon">
                    <i class="fal fa-dollar-sign fa-fw text-light py-2"></i>
                </div>
                <div class="hovercard-body-item">
                    <div>
                        <div class="hovercard-content-item text-light">
                            Donator Tier
                        </div>
                        <div class="hovercard-content-item-muted">
                            {{ user.donator_tier }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hovercard-footer">
            <a class="hovercard-footer-item" style="color: #fff" :href="'https://xenin.co/users/' + user.slug">Profile</a>
        </div>
    </div>
</template>

<script>

    export default {
        name: "HovercardComponent",
        props: [
            'slug',
            'avatar',
            'rank'
        ],
        data() {
            return {
                user: [],
                errors: [],
            }
        },
        async created() {
            try {
                const response = await this.$http.get(`https://xenin.co/api/users/${this.slug}`);
                this.user = response.data;
            } catch (e) {
                this.errors.push(e);
            }
        }
    }
</script>
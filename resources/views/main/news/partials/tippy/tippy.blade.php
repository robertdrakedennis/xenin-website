<script>
    tippy('.template_article_{{ $article->id }}', {
        html: document.querySelector('#template_article_{{ $article->id }}'),
        animateFill: true,
        hideOnClick: false,
        theme: 'transparent',
        interactive: true,
        inertia: true,
        interactiveBorder: true,
        multiple: true,
        placement: 'right',
        flip: true,
        trigger: 'mouseenter',
        flipBehavior: ['left', 'right']
    });
</script>
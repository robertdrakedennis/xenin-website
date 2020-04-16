<template>
    <div class="form-group bg-white text-dark">
        <input type="hidden" name="body"/>
        <div ref="editor"></div>
    </div>
</template>
<script>
    import Quill from 'quill';

    import swal from 'sweetalert2'

    export default {
        props: [
            'post'
        ],
        data() {
            return {
                editor: null
            };
        },
        mounted() {
            this.editor = new Quill(this.$refs.editor, {
                modules: {
                    toolbar: {
                        container: [
                            [{'header': [1, 2, 3, 4, 5, 6, false]}],
                            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                            ['blockquote', 'code-block'],
                            [{'list': 'ordered'}, {'list': 'bullet'}],
                            [{'indent': '-1'}, {'indent': '+1'}], // outdent/indent
                            ['image'],
                            ['clean'] // remove formatting button
                        ],
                        handlers: {
                            image: imageHandler,
                        }
                    },
                },
                theme: 'snow',
                placeholder: '',
            });

            async function imageHandler() {
                let range = this.quill.getSelection();

                const {value: imgURL} = await swal({
                    title: 'What\'s the image url?',
                    input: 'text',
                    inputValue: imgURL,
                    showCancelButton: true,
                    inputValidator: (value) => {
                        return !value && 'You need to write something!'
                    }
                });

                this.quill.insertEmbed(range.index, 'image', (imgURL), Quill.sources.USER);
            }

            this.editor.on('text-change', () => {
                let body = document.querySelector('input[name=body]');
                body.value = JSON.stringify(this.editor.getContents());
                if (this.editor.delta) {
                    body.value = JSON.stringify(this.editor.getContents());
                }
            });

            let post = this.post;
            this.editor.setContents(JSON.parse(post));
        }
    }
</script>

<style scoped>
    .ql-editor{
        min-height: 250px !important;
    }
</style>

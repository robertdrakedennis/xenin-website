// let toolbarOptions = {
//     container: [
//         [{'header': [1, 2, 3, 4, 5, 6, false]}],
//         ['bold', 'italic', 'underline', 'strike'], // toggled buttons
//         ['blockquote', 'code-block'],
//         [{'list': 'ordered'}, {'list': 'bullet'}],
//         [{'indent': '-1'}, {'indent': '+1'}], // outdent/indent
//         ['image'],
//         ['emoji'],
//         ['clean'] // remove formatting button
//     ],
//     handlers: {
//         image: imageHandler,
//         'emoji': function () {}
//     }
// };
//
// function imageHandler() {
//     let range = this.quill.getSelection();
//     let value = prompt('What is the image URL');
//     this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
// }
//
//
// let quill = new Quill('#editor', {
//     modules: {
//         toolbar: toolbarOptions,
//         "emoji-toolbar": true,
//         "emoji-shortname": true
//     },
//     placeholder: 'Compose an epic',
//     theme: 'snow'
// });
//
// quill.on('text-change', update);
// update();
//
// function update(delta) {
//     let body = document.querySelector('input[id=body]');
//     body.value = JSON.stringify(quill.getContents());
//     if (delta) {
//         body.value = JSON.stringify(quill.getContents());
//     }
// }
// // async function imageHandler() {
// //     let range = this.quill.getSelection();
// //     //let value = prompt('What is the image URL');
// //
// //     const {value: imgURL} = await swal({
// //         title: 'What\'s the image url?',
// //         input: 'text',
// //         inputValue: imgURL,
// //         showCancelButton: true,
// //         inputValidator: (value) => {
// //             return !value && 'You need to write something!'
// //         }
// //     });
// //
// //     this.quill.insertEmbed(range.index, 'image', (imgURL), Quill.sources.USER);
// // }
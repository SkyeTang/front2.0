<template>
    <div class="edit-container">
        <textarea :id="id"></textarea>
    </div>
</template>

<script>
    export default{
        props: {
            id: {
                type: String,
                default: 'richEditor'
            },
            value: {
                type: String,
                default: ''
            },
            toolbar: {
                type: Array,
                required: false,
                default() {
                    return ["undo redo | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | fontselect fontsizeselect | forecolor backcolor | bullist numlist | outdent indent | removeformat | link unlink uploadimage | preview fullscreen  "]
                }
            },
        },
        data(){
            return {
                hasChange: false,
                hasInit: false
            }
        },
        mounted(){
            tinymce.init({
                language: 'zh_CN',
                selector: `#${this.id}`,
                height: 500,
                menubar: '',
                upload_image_url: '/upload/cloud',
                plugins: [
                    'advlist autolink autosave lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen textcolor colorpicker textpattern code uploadimage',
                    'contextmenu paste'
                ],
                toolbar: this.toolbar,
                default_link_target: '_blank',
                content_css: '//www.tinymce.com/css/codepen.min.css',
                init_instance_callback: editor => {
                    if (this.value) {
                        editor.setContent(this.value)
                    }
                    this.hasInit = true;
                    editor.on('Change', () => {
                        this.hasChange = true;
                        console.log(editor.getContent({format: 'raw'}))
                        this.$emit('input', editor.getContent({format: 'raw'}));
                    });
                },
            });
        }
    }
</script>

<style lang="less">

</style>
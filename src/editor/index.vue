<template>
    <div class="edit-container">
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
</template>

<script>
    export default{
        mounted(){
            tinymce.init({
                selector: 'textarea',
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table contextmenu paste code'
                ],
                toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                content_css: '//www.tinymce.com/css/codepen.min.css'
            });
        }
    }
</script>

<style lang="less">

</style>
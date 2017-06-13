<template>
    <div class="edit-container">
        <textarea :id="id"></textarea>
    </div>
</template>

<script>
    export default{
        name:'richEditor',
        props: {
            id: {
                type: String,
                default: 'richEditor'
            },
            value: {
                type: String,
                default: ''
            },
            url:{
                type:String,
                default:'/upload'
            },
            toolbar: {
                type: Array,
                required: false,
                default() {
                    return ["undo redo | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | fontselect fontsizeselect | forecolor backcolor | bullist numlist | outdent indent | removeformat | link unlink uploadimage   "]
                }
            },
            config:{
                type:Object,
                default(){
                    return{

                    }
                }
            }
        },
        data(){
            return {
                hasChange: false,
                hasInit: false
            }
        },
        mounted(){
            tinymce.init(Object.assign(this.config,{
                //中文，需要添加lange文件
                language: 'zh_CN',
                //可以设置编辑器id
                selector: `#${this.id}`,
                height: 500,
                menubar: '',
                //上传图片地址
                upload_image_url: this.url,
                //链接在新窗口打开
                default_link_target: '_blank',
                //插件
                plugins: [
                    'advlist autolink autosave lists link image charmap print preview anchor',
                    'textcolor colorpicker textpattern code uploadimage',
                    'paste'
                ],
                //工具件
                toolbar: this.toolbar,
                //设置选择的字体及字体大小
                fontsize_formats: "12px 14px 16px 18px 24px 36px 72px",
                font_formats:"微软雅黑MicrosoftYaHei='Microsoft YaHei';宋体SimSun='SimSun';黑体SimHei='SimHei';仿宋FangSong='FangSong';楷体KaiTi='KaiTi';隶书LiSu='LiSu';幼圆YouYuan='YouYuan'",
                //粘贴时的相关配置，去掉格式等
                paste_as_text: true,
                paste_auto_cleanup_on_paste: true,
                paste_remove_spans: true,
                paste_remove_styles: true,
                paste_retain_style_properties: false,
                //初始化完成后的回调方法
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
            }));
        }
    }
</script>

<style lang="less">

</style>
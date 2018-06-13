<template>
    <div class="tags" v-if="showTags">
        <ul>
            <li class="tags-li" v-for="(item, index) in tagsList" :class="{'active': isActive(item.path)}" :key="index">
                <router-link :to="item.path" class="tags-title">
                    {{ item.title }}
                </router-link>
                <i class="el-icon-close" @click="closeTags(index)"></i>
            </li>
        </ul>
        
        <div class="tags-close-box">
            <el-dropdown trigger="hover" @command="handleTags">
                <span class="tags-close-title">
                    标签选项<i class="el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu size="small" slot="dropdown">
                    <el-dropdown-item command="other">关闭其他</el-dropdown-item>
                    <el-dropdown-item command="all">全部关闭</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tagsList: []
            }
        },
        watch:{
            $route(newValue, oldValue) {
                this.setTags(newValue);
            }
        },
        computed: {
            showTags() {
                return this.tagsList.length > 0;
            },
        },
        methods: {
            setTags(route) { // 设置导航标签
                const isExist = this.tagsList.some(item => {
                    return item.path === route.path;
                });
                !isExist && this.tagsList.push({
                    title: route.meta.title,
                    path: route.path
                });
            },
            isActive(path) { // 判断当前标签是否高亮
                return path === this.$route.path;
            },
            closeTags(index) { // 关闭当前标签
                const delItem = this.tagsList.splice(index, 1)[0];
                const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
                if (item) {
                    delItem.path === this.$route.path && this.$router.push(item.path);
                } else {
                    this.$router.push('/');
                }
            },
            closeOther() { // 关闭其他标签
                this.tagsList = this.tagsList.filter( item => {
                    return item.path === this.$route.path;
                });
            },
            closeAll() { // 关闭全部标签
                this.tagsList = [];
                this.$router.push('/');
            },
            handleTags(command) {
                command === 'other' ? this.closeOther() : this.closeAll();
            }
        },
        created() {
            this.setTags(this.$route);
        }
    }
</script>

<style lang="less">
    .tags {
        position: relative;
        height: 30px;
        background: #fff;
        z-index: 2;
    }
    .tags ul {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        white-space: nowrap;
        overflow: hidden;
    }
    .tags-li {
        display: inline-block;
        margin: 3px 5px 2px 3px;
        padding: 0 5px 0 12px;
        border: 1px solid #e9eaec;
        border-radius: 3px;
        vertical-align: middle;
        background: #fff;
        overflow: hidden;
        height: 23px;
        line-height: 23px;
        font-size: 14px;
        color: #666;
        transition: all .3s ease-in;
        cursor: pointer;

        &.active {
            border-color: #409EFF;
            background-color: #409EFF;
            color: #fff;

            .tags-title {
                color: #fff;
            }
        }
    }
    .tags-title {
        display: inline-block;
        text-decoration: none;
        color: #666;
    }
    .tags-close-box {
        position: absolute;
        right: 0;
        top: 3px;
        height: 24px;
        padding: 0 10px;
        border-radius: 3px;
        background-color: #409EFF;
        color: #fff;
    }
    .tags-close-title {
        color: #fff;
        cursor: pointer;
    }
</style>

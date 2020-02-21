<!--
 * @Date: 2020-02-21 18:04:43
 * @LastEditTime: 2020-02-21 19:55:34
 * @Author: 李芳芳
 * @Github: https://github.com/J-Fan-Fan/
 -->
/*
 * @Date: 2020-02-21 18:04:43
 * @LastEditTime: 2020-02-21 18:04:46
 * @Author: 李芳芳
 * @Github: https://github.com/J-Fan-Fan/
 */
 <template>
    <div class="footer">
        <li>
            <router-link to="/">
                <span class="fa fa-home"></span><br>
                首页
            </router-link>
        </li>
        <li>
            <router-link to="/viedo">
                <span class="fa fa-shopping-bag"></span><br>
                视频
            </router-link>
        </li>
        <li>
            <router-link to="/classfiy">
                <span class="fa fa-shopping-cart"></span><br>
                分类
            </router-link>
        </li>
        <li>
            <router-link to="/frind">
                <span class="fa fa-user-circle"></span><br>
                发现
            </router-link>
        </li>
             <li>
            <router-link to="/mine">
                <span class="fa fa-user-circle"></span><br>
                我的
            </router-link>
        </li>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    position: fixed;
    display: flex;
    left: 0px;
    bottom: 0px;
    bottom:red;
}
  li{
    /* display: flex;
     */
    flex:1;
    }
</style>

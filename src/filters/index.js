import Vue from 'vue'
// import moment from 'moment'
import format from 'date-fns/format'
// 自定义过滤器
// moment使用格式YYYY-MM-DD HH:mm:ss
Vue.filter('date-format', function (value,formatStr='yyyy-MM-dd HH:mm:ss') {
    // return moment(value).format(formatStr)
    return format(value, formatStr)
})

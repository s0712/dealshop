<template>
  <section class="page">
    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="currentPage4"
                   :page-sizes="[100, 200, 300, 400]"
                   :page-size="100"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="400">
    </el-pagination>
  </section>
</template>
<script>
export default {
  data() {
    return {
      currentPage4: 4
    };
  },
  components: {},
  created() {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style  lang="scss">
.page {
  .el-pagination {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
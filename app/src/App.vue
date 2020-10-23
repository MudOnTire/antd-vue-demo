<template>
  <div>
    <a-table
      :columns="columns"
      :dataSource="dataSource"
      :pagination="pagination"
      :loading="loading"
      :components="components"
      :rowKey="(record) => record.email"
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
      }"
      :customRow="customRow"
    >
      <template slot="name" slot-scope="name"
        >{{ name.first }} {{ name.last }}</template
      >
    </a-table>
    <div v-show="false">
      <div class="row-icon" ref="rowIcon">
        <a-icon type="star" />
      </div>
    </div>
  </div>
</template>
<script>
import reqwest from "reqwest";
import DraggbleWrapper from "./components/DraggbleWrapper";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    width: "20%",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Gender",
    dataIndex: "gender",
    filters: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" },
    ],
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];

export default {
  data() {
    return {
      loading: false,
      pagination: {},
      dataSource: [],
      columns,
      selectedRowKeys: [],
      components: {
        body: {
          wrapper: DraggbleWrapper,
        },
      },
    };
  },
  provide() {
    return {
      data: this,
    };
  },
  mounted() {
    this.fetch();
    document.addEventListener("mouseenter", (e) => {
      console.log("mouseenter");
      if (e.target.tagName === "tr") {
        console.log(e.target);
      }
    });
  },
  methods: {
    customRow() {
      return {
        on: {
          mouseenter: (event) => {
            const checkboxWrapper = event.target.querySelector("td");
            checkboxWrapper.prepend(this.$refs.rowIcon);
          },
          mouseleave: (event) => {
            const checkboxWrapper = event.target.querySelector("td");
            checkboxWrapper.removeChild(this.$refs.rowIcon);
          },
        },
      };
    },
    fetch(params = {}) {
      this.loading = true;
      reqwest({
        url: "https://randomuser.me/api",
        method: "get",
        data: {
          results: 10,
          ...params,
        },
        type: "json",
      }).then((res) => {
        console.log(res.results);
        const pagination = { ...this.pagination };
        pagination.total = 200;
        pagination.pageSize = 10;
        this.loading = false;
        this.dataSource = res.results;
        this.pagination = pagination;
      });
    },
  },
};
</script>
<style>
.ant-table-selection-column {
  position: relative;
}
</style>

<style scoped>
.row-icon {
  position: absolute;
  left: 3px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
}
</style>
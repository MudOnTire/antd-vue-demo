<template>
  <a-table
    :columns="columns"
    :dataSource="dataSource"
    :pagination="pagination"
    :loading="loading"
    :components="components"
    :rowKey="(record) => record.email"
    style="height: 400px; overflow: auto auto"
  >
    <template slot="name" slot-scope="name"
      >{{ name.first }} {{ name.last }}</template
    >
  </a-table>
</template>
<script>
import reqwest from "reqwest";
import CustomWrapper from "./components/CustomWrapper";

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
      components: {
        body: {
          wrapper: CustomWrapper,
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
  },
  methods: {
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

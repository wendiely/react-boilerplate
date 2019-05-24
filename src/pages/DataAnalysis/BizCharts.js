import React from "react";

import DemoApi from "@/api";
import BizTable from "../../components/BizChartTable";
import PropTypes from "prop-types";
import { Row, Col, Switch } from "antd";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";

const Chartone = e => {
  console.log("哈哈哈哈哈哈", e.list);
  const data = e.list;
  const cols = {
    birth: {
      range: [0, 1]
    }
  };
  return (
    <Chart height={400} width={200} data={data} scale={cols} forceFit>
      <Axis name="name" />
      <Axis name="birth" />
      <Tooltip
        crosshairs={{
          type: "y"
        }}
      />
      {/* <Geom type="interval" position="name*birth" /> */}
      <Geom type="line" position="name*birth" size={2} />
      <Geom
        type="point"
        position="name*birth"
        size={4}
        shape={"circle"}
        style={{
          stroke: "#fff",
          lineWidth: 1
        }}
      />
    </Chart>
  );
};
const Charttwo = e => {
  console.log("哈哈哈哈哈哈", e.list);
  const { DataView } = DataSet;
  // const data = e.list
  const data = [
    {
      item: "事例一",
      count: 40
    },
    {
      item: "事例二",
      count: 21
    },
    {
      item: "事例三",
      count: 17
    },
    {
      item: "事例四",
      count: 13
    },
    {
      item: "事例五",
      count: 9
    }
  ];

  const dv = new DataView();
  dv.source(data).transform({
    type: "percent",
    field: "count",
    dimension: "item",
    as: "percent"
  });
  const cols = {
    percent: {
      formatter: val => {
        val = val * 100 + "%";
        return val;
      }
    }
  };
  return (
    <Chart height={300} data={dv} scale={cols} padding={[0, 40, 0, 0]} forceFit>
      <Coord type="theta" radius={0.75} />
      <Axis name="percent" />
      <Legend position="right" offsetY={-300 / 2 + 120} offsetX={-100} />
      <Tooltip
        showTitle={false}
        itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      />
      <Geom
        type="intervalStack"
        position="percent"
        color="item"
        tooltip={[
          "item*percent",
          (item, percent) => {
            percent = percent * 100 + "%";
            return {
              name: item,
              value: percent
            };
          }
        ]}
        style={{
          lineWidth: 1,
          stroke: "#fff"
        }}
      >
        <Label
          content="percent"
          offset={-40}
          textStyle={{
            rotate: 0,
            textAlign: "center",
            shadowBlur: 2,
            shadowColor: "rgba(0, 0, 0, .45)"
          }}
        />
      </Geom>
    </Chart>
  );
};

// 定义一个表格组件

class BizCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  // 进入页面时掉用
  componentDidMount() {
    console.log("图表数据会更新吗？", this.props);
    const condition = {
      page: 1,
      pageSize: 20
    };
    this.getListNumber(condition);
  }

  getListNumber(e) {
    DemoApi.BizChart(e).then(res => {
      console.log("我调用加的api了", res, this.props);
      this.setState({ list: res.data.items });
    });
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <Row>
          <p>来一个图表</p>
        </Row>
        <Row>
          <Col span={18} push={6}>
            <Chartone list={this.state.list} />
          </Col>
          <Col span={6} pull={18}>
            <span>在左边，将右边/前面的表单刷新</span>
            <Switch />
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <BizTable list={this.state.list} />
          </Col>
          <Col span={8}>
            <Charttwo list={this.state.list} />
          </Col>
        </Row>
      </div>
    );
  }
}
BizCharts.PropTypes = {
  history: PropTypes.object
};

export default BizCharts;

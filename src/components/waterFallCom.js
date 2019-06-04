import React from "react";
import PropTypes from "prop-types";

import ImageLayout from "react-image-layout";

// import Masonry from 'masonry-layout';
// import cx from 'classnames';
// import resizeMe from '@/decorator/resizeMe';
// import isEqual from 'react-fast-compare';
// import './style/index.less';
// import '../components/style/index'

class WaterFallCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    console.log("确认一下props中有什么", props);
    // this.defaultProps = {
    //     prefixCls: 'antui-waterfall'
    // };
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}
  // fenjie = e => {
  //   const aa = []
  //   this.props.datasource.map(e => {
  //     console.log(e, 'fghjkl')
  //     aa.push(e.img)
  //   })
  //   console.log('ssss', aa)
  //   return aa

  // }

  render() {
    // const items = this.fenjie()
    // console.log('dddddd', items)
    const aa = [];
    this.props.datasource.map(e => {
      console.log(e, "fghjkl");
      aa.push(e);
    });

    console.log("cvbcvbcvbcb", this.props, aa);

    return (
      <div>
        {/* <ImageLayout items={items} columnWidth={200} columns={5} gutter={8} /> */}
        <ImageLayout items={aa} />
      </div>
    );
  }
}
WaterFallCom.propTypes = {
  datasource: PropTypes.array
  // columnWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // gutter: PropTypes.number,
  // horizontalOrder: PropTypes.bool,
  // percentPosition: PropTypes.bool,
  // fitWidth: PropTypes.bool,
  // onLayout: PropTypes.string,
  // render: PropTypes.node,
  // itemStyle: PropTypes.object,
  // className: PropTypes.string,
  // style: PropTypes.style
};

export default WaterFallCom;

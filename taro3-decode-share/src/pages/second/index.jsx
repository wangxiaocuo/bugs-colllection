import { getCurrentInstance, navigateTo } from "@tarojs/taro";
import React, { Component } from "react";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidShow() {
    // 1 没有问题
    // decodeURIComponent("https%3A%2F%2Fwww.baidu.com%3Fq%3D%E6%B3%B0%E7%BD%97");

    // 2 没有问题
    // const currQueryOpts = { url: 'https%3A%2F%2Fwww.baidu.com%3Fq%3D%E6%B3%B0%E7%BD%97' }
    // decodeURIComponent(currQueryOpts.url || '')

    // 3 没有问题
    // const currQueryOpts = getCurrentInstance().page.options;
    // const copy = JSON.parse(JSON.stringify(currQueryOpts))
    // copy.url = decodeURIComponent(copy.url || "");

    // 4 没有问题
    // const url = getCurrentInstance().page.options.url;
    // decodeURIComponent(url || "");

    // 5 出问题了，componentDidHide和componentWillUnmount不执行
    const currQueryOpts = getCurrentInstance().page.options;
    currQueryOpts.url = decodeURIComponent(currQueryOpts.url || "");
  }

  componentDidHide() {
    console.log("componentDidHide");
  }

  handleRouteToThird() {
    navigateTo({
      url: `/pages/third/index`
    });
  }

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Button onClick={this.handleRouteToThird.bind(this)}>
          进入第三页
        </Button>
      </View>
    );
  }
}
